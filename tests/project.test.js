require("dotenv").config();
const Project = require("../models/project.model");
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

  let len;

  beforeEach(async () => {
    // Get the current count of projects before each test
    len = await Project.countDocuments({});
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
    expect(response.body).toHaveProperty("description", api["description"]);
    expect(response.body).toHaveProperty("author", api["author"]);
    expect(response.body).toHaveProperty("version", api["version"]);
    expect(response.body).toHaveProperty("projectsAPI", api["projectsAPI"]);
    expect(response.body).toHaveProperty("timelinesAPI", api["timelinesAPI"]);
  });

  test("should CREATE/POST a new project", async () => {
    const project = {
      title: "Fake project",
      description: "Fake project description for testing",
      tags: ["API", "JavaScript", "Jest", "Supertest"],
      images: ["fakeImage1.png", "fakeImage2.png"],
      liveUrl: "https://fakeprojectlive.com",
      sourceUrl: "https://fakeprojectsource.com",
    };
    let response = await request(app).post("/api/projects").send(project);

    expect(response.status).toBe(201);

    response = await request(app).get("/api/projects");
    const responseBodyLength = response.body.length;

    expect(Array.isArray(response.body)).toBe(true);
    expect(len + 1).toBe(responseBodyLength);
  });

  len++;

  test("should READ/GET all projects", async () => {
    const response = await request(app).get("/api/projects");
    const responseBodyLength = response.body.length;

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(responseBodyLength).toBe(len);
  });

  test("should READ/GET a specific project by ID", async () => {
    const id = "randomId"; // replace `randomId` with a real `_id` in the DB
    const response = await request(app).get(`/api/project/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", id);
    // 1 here is the index of the second project
    // So, `randomId` should match the `_id` of this project in the DB
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

  test("should return 404 for a non-existing project to READ/GET", async () => {
    const invalidId = 123;
    const response = await request(app).get(`/api/project/${invalidId}`);

    expect(response.status).toBe(404);
  });

  test("should UPDATE/PUT an existing project by ID", async () => {
    const id = "randomId"; // an existing id
    const updatedData = {
      title: "Updated project title",
      description: "Updated project description",
      tags: ["Updated", "Tags"],
      images: ["updatedImage1.png", "updatedImage2.png"],
      liveUrl: "https://updatedprojectlive.com",
      sourceUrl: "https://updatedprojectsource.com",
    };

    const response = await request(app)
      .put(`/api/project/${id}`)
      .send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("title", updatedData.title);
    expect(response.body).toHaveProperty(
      "description",
      updatedData.description,
    );
    expect(response.body).toHaveProperty("tags", updatedData.tags);
    expect(response.body).toHaveProperty("images", updatedData.images);
    expect(response.body).toHaveProperty("liveUrl", updatedData.liveUrl);
    expect(response.body).toHaveProperty("sourceUrl", updatedData.sourceUrl);
  });

  test("should return 404 for a non-existing project to UPDATE/PUT", async () => {
    const invalidId = 123;
    const response = await request(app).put(`/api/project/${invalidId}`);

    expect(response.status).toBe(404);
  });

  test("should DELETE an existing project by ID", async () => {
    const id = "randomId"; // an existing id
    const response = await request(app).delete(`/api/project/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      "message",
      "Project deleted successfully!",
    );

    const projectAfterDeletion = await Project.findById(id);
    expect(projectAfterDeletion).toBeNull();

    const newCount = await Project.countDocuments({});
    expect(newCount).toBe(len - 1);
  });

  test("should return 404 for a non-existing project to DELETE", async () => {
    const invalidId = 123;
    const response = await request(app).delete(`/api/project/${invalidId}`);

    expect(response.status).toBe(404);
  });
});
