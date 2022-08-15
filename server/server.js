const express = require("express");
const router = require("express").Router();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database has connected succesfully");
});

const itemsSchema = {
  inputText: String,
};

const Item = mongoose.model("Item", itemsSchema);

app.get("/", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error:" + err));
});

app.post("/add", (req, res) => {
  const inputText = req.body.inputText;

  const newItem = new Item({ inputText });

  newItem
    .save()
    .then(() => res.json("Item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Item.findByIdAndDelete(id)
    .then(() => res.json("Item deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
