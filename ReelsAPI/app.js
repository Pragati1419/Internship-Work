const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoutes = require("./routes/PostReel");


const app = express();
const bodyParser = require("body-parser");

const MONGO_URL = "mongodb://localhost:27017/feedsystem";

mongoose.connect(
   MONGO_URL,
    () => {
      console.log("Connected to MongoDB");
    }
  );

  app.use(express.json());
  // app.use(bodyParser.json());

  app.use("/api/reels", postReels);

  var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

