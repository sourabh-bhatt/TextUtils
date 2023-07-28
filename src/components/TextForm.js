import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Click");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here"); //array destructuring

  return (
    <>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="20"
        ></textarea>
      </div>
      <div className="btn btn-primary" onClick={handleUpClick}>
        Convert to Upper Case
      </div>
      {/* Lower Case */}
      <div className="btn btn-primary mx-2">Convert to Lower Case</div>
    </>
  );
}
