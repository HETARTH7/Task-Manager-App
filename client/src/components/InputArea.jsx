import React, { useState } from "react";
import axios from "axios";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const task = {
      inputText: inputText,
    };
    console.log(task);
    axios
      .post("http://localhost:5000/add", task)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setInputText("");
    window.location = "/";
  };

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={onSubmit}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
