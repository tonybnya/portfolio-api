// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());

// // Connection to MongoDB
// mongoose.connect(process.env.MONGO_URI);

// // Set routes
// app.use("/projects", require("./routes/projects"));
// app.use("/timeline", require("./routes/timeline"));

// // Start and listening to the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from API Server");
});

app.listen(3000);

// Connection to MongoDB
mongoose
  // .connect(process.env.MONGO_URI)
  .connect(
    "mongodb+srv://tonybnya:H9aDF582zVBzR7bp@portfoliodb.e3aqjx8.mongodb.net/Portfolio-API?retryWrites=true&w=majority&appName=PortfolioDB",
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
