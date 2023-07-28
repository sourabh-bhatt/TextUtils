import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //   For lower case
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //   For clearing the text
  const handToClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState(""); //array destructuring

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="15"
          ></textarea>
        </div>
        {/* Buttons */}
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        {/* Lower Case */}
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary" onClick={handToClear}>
          Clear Text
        </button>
      </div>
      {/* Text summary */}
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        {/* Speed of reading that paragraph */}
        <p>{0.008 * text.split(" ").length} minutes to be read</p>

        {/* Preview */}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
