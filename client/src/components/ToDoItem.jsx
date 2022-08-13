import React from "react";

function ToDoItem(props) {
  
  const deleteItem = () => {
    console.log(props.item._id);
  };
  return <li onClick={deleteItem}>{props.item.inputText}</li>;
}

export default ToDoItem;
