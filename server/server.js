const express = require("express");
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

app.delete("/delete", (req, res) => {
  const deleteItem = req.body.id;
  console.log(deleteItem);
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
