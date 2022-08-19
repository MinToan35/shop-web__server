require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRouter = require("./routes/post");
const postBannerRouter = require("./routes/postBanner");
const postAds = require("./routes/postAds");
const postGallery = require("./routes/postGallery");

const authRouter = require("./routes/auth");
const cartRouter = require("./routes/cart");

const app = express();
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern.y8kzf.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
app.use(express.json());
app.use(cors());
app.use("/api/posts", postRouter);
app.use("/api/posts", postBannerRouter);
app.use("/api/posts", postAds);
app.use("/api/posts", postGallery);

app.use("/api/auth", authRouter);
app.use("/api/posts", cartRouter);

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});

connectDB();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
