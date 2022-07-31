const mongoose = require("mongoose");

const itemsSchema = {
  item: String,
};

const Item = new mongoose.model("Item", itemsSchema);

module.exports = Item;
