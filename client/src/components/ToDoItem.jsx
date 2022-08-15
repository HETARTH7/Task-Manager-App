import React from "react";
import axios from "axios";

function ToDoItem(props) {
  const deleteItem = () => {
    const id = props.item._id;
    console.log(id);
    axios
      .post(`http://localhost:5000/delete/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return <li onClick={deleteItem}>{props.item.inputText}</li>;
}

export default ToDoItem;
