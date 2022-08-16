const express = require("express");
const router = express.Router();
const PostGallery = require("../models/PostGallery");
const { route } = require("./postAds");

router.post("/gallery", async (req, res) => {
  const { img, slug } = req.body;
  try {
    const newGallery = new PostGallery({
      img,
      slug,
    });
    await newGallery.save();
    res.json({
      success: true,
      message: "post success",
      gallery: newGallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.get("/gallery", async (req, res) => {
  try {
    const gallery = await PostGallery.find();
    res.json({ success: true, gallery });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
