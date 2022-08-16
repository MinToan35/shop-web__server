const mongoose = require("mongoose");
const bannerMobileSchema = new mongoose.Schema(
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
module.exports = mongoose.model("postBannerMobiles", bannerMobileSchema);
