const mongoose = require("mongoose");
const gallerySchema = new mongoose.Schema(
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

module.exports = mongoose.model("postGallery", gallerySchema);
