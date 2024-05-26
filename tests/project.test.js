const request = require("supertest");
const mongoose = require("mongoose");
const data = require("../data.js");
const app = require("../index");

// Run each test individually: `npm run test project.test.js`

const PORT = process.env.PORT || 3000;
const MONGO_URI =
  "mongodb+srv://tonybnya:H9aDF582zVBzR7bp@portfoliodb.e3aqjx8.mongodb.net/Portfolio-API?retryWrites=true&w=majority&appName=PortfolioDB";

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

  test("should READ/GET a specific project by ID", async () => {
    const id = "6652099f2f948ce315329243";
    const response = await request(app).get(`/api/projects/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", id);
    expect(response.body).toHaveProperty("title", data["projects"][2]["title"]);
    expect(response.body).toHaveProperty(
      "description",
      data["projects"][2]["description"],
    );
    expect(response.body).toHaveProperty("tags", data["projects"][2]["tags"]);
    expect(response.body).toHaveProperty(
      "images",
      data["projects"][2]["images"],
    );
    expect(response.body).toHaveProperty(
      "liveUrl",
      data["projects"][2]["liveUrl"],
    );
    expect(response.body).toHaveProperty(
      "sourceUrl",
      data["projects"][2]["sourceUrl"],
    );
  });

  test("should return 500 for a non-existing project", async () => {
    const invalidId = 123;
    const response = await request(app).get(`/api/projects/${invalidId}`);

    expect(response.status).toBe(500);
  });
});
