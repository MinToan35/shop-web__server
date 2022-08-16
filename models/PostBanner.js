const mongoose = require("mongoose");
const bannerSchema = new mongoose.Schema(
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
module.exports = mongoose.model("postBanners", bannerSchema);
