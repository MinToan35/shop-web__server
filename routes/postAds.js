const express = require("express");
const router = express.Router();
const PostAds = require("../models/PostAds");

router.post("/ads", async (req, res) => {
  const { img, slug } = req.body;
  try {
    const newAds = new PostAds({
      img,
      slug,
    });
    await newAds.save();
    res.json({
      success: true,
      message: "post success",
      postAds: newAds,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.get("/ads", async (req, res) => {
  try {
    const ads = await PostAds.find();
    res.json({ success: true, ads });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
