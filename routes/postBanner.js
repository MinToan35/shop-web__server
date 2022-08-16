const express = require("express");
const router = express.Router();
const PostBanner = require("../models/PostBanner");
const bannerMobileSchema = require("../models/PostBannerMoblie");

//postBanner
router.post("/banner", async (req, res) => {
  const { img, slug } = req.body;
  try {
    const newPostBanner = new PostBanner({
      img,
      slug,
    });
    await newPostBanner.save();
    res.json({
      success: true,
      message: "post success",
      postBanner: newPostBanner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//get
router.get("/banner", async (req, res) => {
  try {
    const banners = await PostBanner.find();
    res.json({ success: true, banners });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//postBanner
router.post("/bannerMobile", async (req, res) => {
  const { img, slug } = req.body;
  try {
    const newPostBanner = new bannerMobileSchema({
      img,
      slug,
    });
    await newPostBanner.save();
    res.json({
      success: true,
      message: "post success",
      postBanner: newPostBanner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//get
router.get("/bannerMobile", async (req, res) => {
  try {
    const bannerMobiles = await bannerMobileSchema.find();
    res.json({ success: true, bannerMobiles });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
