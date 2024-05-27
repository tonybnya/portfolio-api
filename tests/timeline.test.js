require("dotenv").config();
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
    expect(response.body).toHaveProperty("api", api);
  });

  // test("should READ/GET all timelines", async () => {
  //   const response = await request(app).get("/api/timelines");

  //   expect(response.status).toBe(200);
  //   expect(response.length).toBe(data["timelines"].length);
  // });

  test("should READ/GET a specific timeline entry by ID", async () => {
    const id = "66520a112f948ce315329247";
    const response = await request(app).get(`/api/timelines/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", id);
    expect(response.body).toHaveProperty("year", data["timelines"][7]["year"]);
    expect(response.body).toHaveProperty(
      "timeline",
      data["timelines"][7]["timeline"],
    );
    expect(response.body).toHaveProperty(
      "duration",
      data["timelines"][7]["duration"],
    );
    expect(response.body).toHaveProperty(
      "details",
      data["timelines"][7]["details"],
    );
  });

  test("should return 500 for a non-existing timeline", async () => {
    const invalidId = 123;
    const response = await request(app).get(`/api/timelines/${invalidId}`);

    expect(response.status).toBe(500);
  });
});
