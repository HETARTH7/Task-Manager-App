import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ToDoList = () => {
  const [x, setX] = useState([]);
  const xList = () => {
    return x.map((y,index) => {
      return <ToDoItem key={index} item={y} />;
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setX(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea />
      <div>{xList()}</div>
    </div>
  );
};

export default ToDoList;
