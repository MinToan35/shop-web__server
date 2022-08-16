const mongoose = require("mongoose");
const adsSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("postAds", adsSchema);
