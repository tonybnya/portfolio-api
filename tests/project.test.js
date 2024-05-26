const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index");

const PORT = process.env.PORT || 3000;
const MONGO_URI =
  "mongodb+srv://tonybnya:H9aDF582zVBzR7bp@portfoliodb.e3aqjx8.mongodb.net/Portfolio-API?retryWrites=true&w=majority&appName=PortfolioDB";

describe("GET /api/projects/:id", () => {
  let server;

  beforeAll(async () => {
    // Connect to the MongoDB database
    await mongoose.connect(MONGO_URI);
    // Store the server instance and start it
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
    const title = "KaKo";
    const description =
      "Embark on a thrilling journey through the Batman universe with KaKo, an innovative e-commerce platform that brings the essence of Gotham City to your fingertips. Immerse yourself in a world where the iconic meets the extraordinary.";
    const tags = ["React", "Tailwind", "Vite", "Flask"];
    const images = [
      "https://i.postimg.cc/ZqQNgHz4/kako-image-1.png",
      "https://i.postimg.cc/KYjLJVV0/kako-image-2.png",
    ];
    const liveUrl = "https://kako-landing-page.onrender.com/";
    const sourceUrl = "https://github.com/tonybnya/kako";

    const response = await request(app).get(`/api/projects/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", id);
    expect(response.body).toHaveProperty("title", title);
    expect(response.body).toHaveProperty("description", description);
    expect(response.body).toHaveProperty("tags", tags);
    expect(response.body).toHaveProperty("images", images);
    expect(response.body).toHaveProperty("liveUrl", liveUrl);
    expect(response.body).toHaveProperty("sourceUrl", sourceUrl);
  });

  test("should return 500 for a non-existing project", async () => {
    const invalidId = 123;
    const response = await request(app).get(`/api/projects/${invalidId}`);

    expect(response.status).toBe(500);
  });
});
