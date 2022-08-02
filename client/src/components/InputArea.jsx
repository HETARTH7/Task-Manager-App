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
    const item = {
      inputText: inputText,
    };
    console.log(item);
    axios
      .post("http://localhost:5000/add", item)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setInputText("");
    window.location = "/";
  };

  return (
    <div className="form">
      <form action="/" method="post">
        <input onChange={handleChange} type="text" name={inputText} />
        <button type="submit" onClick={onSubmit}>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default InputArea;
