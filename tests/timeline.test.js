require("dotenv").config();
const Timeline = require("../models/timeline.model");
const request = require("supertest");
const mongoose = require("mongoose");
const data = require("../data.js");
const app = require("../index");

// Run each test individually: `npm run test timeline.test.js`

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// describe("GET /api/timelines/:id", () => {
describe("Endpoints/Routes for API of the timelines", () => {
  let server;

  beforeAll(async () => {
    // Connect to the MongoDB database
    await mongoose.connect(MONGO_URI);
    // In `index.js`, do not start the server
    // Store the server instance and start it here
    server = app.listen(PORT);
  });

  afterAll(async () => {
    // Close the database connection
    await mongoose.connection.close();
    // Stop the server
    server.close();
  });

  let len;

  beforeEach(async () => {
    // Get the current number of timeline steps before each test
    len = await Timeline.countDocuments({});
  });

  test("should return a greetings message from root endpoint /", async () => {
    const message = "Hello from Portfolio API";
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", message);
  });

  test("should return JSON data from endpoint '/api'", async () => {
    const api = data["api"];
    const response = await request(app).get("/api");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", api["name"]);
    expect(response.body).toHaveProperty("description", api["description"]);
    expect(response.body).toHaveProperty("author", api["author"]);
    expect(response.body).toHaveProperty("version", api["version"]);
    expect(response.body).toHaveProperty("projectsAPI", api["projectsAPI"]);
    expect(response.body).toHaveProperty("timelinesAPI", api["timelinesAPI"]);
  });

  test("should CREATE/POST a new timeline", async () => {
    const timeline = {
      title: "Fake Timeline",
      description: "Fake description",
      tags: [],
      images: [],
      liveUrl: "https://faketimelinelive.com",
      sourceUrl: "https://faketimelinesource.com",
    };

    let response = await request(app).post("/api/timelines").send(timeline);

    expect(response.status).toBe(201);

    response = await request(app).get("/api/timelines");
    const responseBodyLength = response.body.length;

    expect(Array.isArray(response.body)).toBe(true);
    expect(len + 1).toBe(responseBodyLength);
  });

  len++;

  test("should READ/GET all timelines", async () => {
    const response = await request(app).get("/api/timelines");
    const responseBodyLength = response.body.length;

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(responseBodyLength).toBe(len);
  });

  test("should READ/GET a specific timeline entry by ID", async () => {
    const id = "randomId"; // replace `randomId` with a real `_id` in the DB
    const response = await request(app).get(`/api/timeline/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", id);
    // 8 here is the index of the 8th timeline
    // So, `randomId` should match the `_id` of this timeline in the DB
    expect(response.body).toHaveProperty("year", data["timelines"][8]["year"]);
    expect(response.body).toHaveProperty(
      "timeline",
      data["timelines"][8]["timeline"],
    );
    expect(response.body).toHaveProperty(
      "duration",
      data["timelines"][8]["duration"],
    );
    expect(response.body).toHaveProperty(
      "details",
      data["timelines"][8]["details"],
    );
  });

  test("should return 404 for a non-existing timeline to READ/GET", async () => {
    const invalidId = 123;
    const response = await request(app).get(`/api/timeline/${invalidId}`);

    expect(response.status).toBe(404);
  });

  test("should UPDATE/PUT an existing timeline entry by ID", async () => {
    const id = "randomId"; // an existing `_id` in the DB
    const updatedData = {
      title: "Updated timeline title",
      description: "Updated timeline description",
    };

    const response = await request(app)
      .put(`/api/timeline/${id}`)
      .send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("title", updatedData.title);
    expect(response.body).toHaveProperty(
      "description",
      updatedData.description,
    );
  });

  test("should return 4O4 for a non-existing timeline entry to UPDATE/PUT", async () => {
    const invalidId = 123;
    const response = await request(app).put(`/api/timeline/${invalidId}`);

    expect(response.status).toBe(404);
  });

  test("should DELETE an existing timeline entry by ID", async () => {
    const id = "randomId"; // an existing id in the DB
    const response = await request(app).delete(`/api/timeline/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      "message",
      "Timeline deteled successfully!",
    );

    const timelineAfterDeletion = await Timeline.findById(id);
    expect(timelineAfterDeletion).toBeNull();

    const newCount = await Timeline.countDocuments({});
    expect(newCount).toBe(len - 1);
  });

  test("should return 404 for a non-existing timeline entry to DELETE", async () => {
    const invalidId = 123;
    const response = await request(app).delete(`/api/timeline/${id}`);

    expect(response.status).toBe(404);
  });
});
