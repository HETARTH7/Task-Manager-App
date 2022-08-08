import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.deleteItem(props.id);
      }}
    >
      {props.item.inputText}
    </li>
  );
}

export default ToDoItem;
