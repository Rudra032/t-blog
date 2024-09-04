const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const postsRoute = require("./routes/posts");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://rudrarathore148:Tarun%40%23%24123@cluster0.yn8ir.mongodb.net/myDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));
// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
