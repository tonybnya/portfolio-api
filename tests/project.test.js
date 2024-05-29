require("dotenv").config();
const request = require("supertest");
const mongoose = require("mongoose");
const data = require("../data.js");
const app = require("../index");

// Run each test individually: `npm run test project.test.js`

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// describe("GET /api/projects/:id", () => {
describe("Endpoints/Routes for API of the projects", () => {
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

  test("should return a greetings message from root endpoint '/'", async () => {
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
    expect(response.body).toHaveProperty("author", api["author"]);
    expect(response.body).toHaveProperty("version", api["version"]);
    expect(response.body).toHaveProperty("projectsAPI", api["projectsAPI"]);
    expect(response.body).toHaveProperty("timelinesAPI", api["timelinesAPI"]);
  });

  test("should READ/GET a specific project by ID", async () => {
    const id = "6657aaad36c711adaac6eae8";
    const response = await request(app).get(`/api/project/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", id);
    expect(response.body).toHaveProperty("title", data["projects"][1]["title"]);
    expect(response.body).toHaveProperty(
      "description",
      data["projects"][1]["description"],
    );
    expect(response.body).toHaveProperty("tags", data["projects"][1]["tags"]);
    expect(response.body).toHaveProperty(
      "images",
      data["projects"][1]["images"],
    );
    expect(response.body).toHaveProperty(
      "liveUrl",
      data["projects"][1]["liveUrl"],
    );
    expect(response.body).toHaveProperty(
      "sourceUrl",
      data["projects"][1]["sourceUrl"],
    );
  });

  test("should return 500 for a non-existing project", async () => {
    const invalidId = 123;
    const response = await request(app).get(`/api/projects/${invalidId}`);

    expect(response.status).toBe(404);
  });
});
