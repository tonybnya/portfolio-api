const request = require("supertest");
const mongoose = require("mongoose");
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

  test("should READ/GET a specific timeline entry by ID", async () => {
    const id = "66520a112f948ce315329247";
    const year = 2008;
    const timeline = "Bachelor's Degree - Computer Science";
    const duration = "3 years";
    const details =
      "After completing my secondary education with a focus on Science and Mathematics, I went on to study Computer Science to earn a Bachelor's Degree at the Siantou Higher Institute of Technology in Yaounde, Cameroon. A rigorous 3-years coursework with practical exercises, and hands-on projects covering programming languages, algorithms and data structures, and software engineering. Through internships, research opportunities, and industry collaborations, I gained real-world experience and enhance my skills.";

    const response = await request(app).get(`/api/timelines/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", id);
    expect(response.body).toHaveProperty("year", year);
    expect(response.body).toHaveProperty("timeline", timeline);
    expect(response.body).toHaveProperty("duration", duration);
    expect(response.body).toHaveProperty("details", details);
  });

  test("should return 500 for a non-existing timeline", async () => {
    const invalidId = 123;
    const response = await request(app).get(`/api/timelines/${invalidId}`);

    expect(response.status).toBe(500);
  });
});
