const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["Nữ", "Nam", "Trẻ em"],
      default: "Nữ",
    },
    categoryItem: {
      type: String,
      required: true,
    },
    catMenu: {
      type: String,
    },
    slugCatMenu: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    slugItem: {
      type: String,
      required: true,
    },
    catMenu: {
      type: String,
    },
    like: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Intl,
      required: true,
    },
    color: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
    slugDetail: {
      type: String,
      required: true,
    },
    listImg: {
      type: Array,
      required: true,
    },
    desc: {
      type: Array,
      required: true,
    },
    detail: {
      type: Array,
      required: true,
    },
    preserve: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("posts", postSchema);
