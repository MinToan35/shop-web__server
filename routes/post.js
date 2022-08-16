const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//post
router.post("/", async (req, res) => {
  const {
    category,
    categoryItem,
    name,
    slugItem,
    catMenu,
    slugCatMenu,
    like,
    title,
    price,
    color,
    size,
    slugDetail,
    listImg,
    desc,
    detail,
    preserve,
  } = req.body;
  try {
    const newPost = new Post({
      category,
      categoryItem,
      name,
      slugItem,
      catMenu,
      slugCatMenu,
      like,
      title,
      price,
      color,
      size,
      slugDetail,
      listImg,
      desc,
      detail,
      preserve,
    });

    await newPost.save();
    res.json({ success: true, message: "post success", post: newPost });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//get
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
