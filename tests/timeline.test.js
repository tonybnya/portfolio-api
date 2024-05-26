const request = require("supertest");
const mongoose = require("mongoose");
const data = require("../data.js");
const app = require("../index");

// Run each test individually: `npm run test timeline.test.js`

const PORT = process.env.PORT || 3001;
const MONGO_URI =
  "mongodb+srv://tonybnya:H9aDF582zVBzR7bp@portfoliodb.e3aqjx8.mongodb.net/Portfolio-API?retryWrites=true&w=majority&appName=PortfolioDB";

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

  // test("should READ/GET all timelines", async () => {
  //   const
  // })

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
