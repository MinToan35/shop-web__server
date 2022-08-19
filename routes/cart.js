const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const Cart = require("../models/Cart");

router.post("/cart", verifyToken, async (req, res) => {
  const { cart, name, phoneNumber, city, district, wards, address, code } =
    req.body;
  if (!cart)
    return res
      .status(400)
      .json({ success: false, message: "Cart is required" });
  try {
    const newCart = new Cart({
      cart,
      name,
      phoneNumber,
      city,
      district,
      wards,
      address,
      code,
      user: req.userId,
    });

    await newCart.save();
    res.json({
      success: true,
      message: "Add cart success!",
      cart: newCart,
      name,
      phoneNumber,
      city,
      district,
      wards,
      address,
      code,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get("/cart", verifyToken, async (req, res) => {
  try {
    const cartOrder = await Cart.find({ user: req.userId });
    res.json({ success: true, cartOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.delete("/cart/:id", verifyToken, async (req, res) => {
  try {
    const postDeleteCondition = { _id: req.params.id, user: req.userId };
    const deletedPost = await Cart.findOneAndDelete(postDeleteCondition);

    if (!deletedPost)
      return res.status(401).json({
        success: false,
        message: "Post not found or user not authorised",
      });
    res.json({ success: true, post: deletedPost });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;
