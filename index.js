require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const data = require("./data.js");

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = require("./swaggerOptions.js");

const projectRoute = require("./routes/project.route");
const timelineRoute = require("./routes/timeline.route");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Form URL Encoded
app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Explicitly specify the allowed origin
//     credentials: true, // Important for cookies, authorization headers with HTTPS
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//     allowedHeaders: [
//       "Origin",
//       "Content-Type",
//       "Accept",
//       "Authorization",
//       "X-Request-With",
//     ],
//   }),
// );

// Handle Cross-Origin Resource Sharing (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, HEAD, OPTIONS, POST, PUT, DELETE",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  next();
});

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes/Endpoints for projects and timelines entries
app.use("/api", projectRoute);
app.use("/api", timelineRoute);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello from Portfolio API" });
});

app.get("/api", (req, res) => {
  return res.status(200).json(data["api"]);
});

// Connection to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    // Do not start the server to here to run tests
    // Start and listening to the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed!", error);
  });

module.exports = app;
