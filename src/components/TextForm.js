import React, { useState } from "react";

export default function TextForm(props) {
  // For upper case
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

  //Convert all first letter to uppercase
  const convertFirstLetterToUpperCase = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const convertAllUpper = () => {
    const newText = convertFirstLetterToUpperCase(text);
    setText(newText);
  };

  //   Making text to speak

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  // Copy text
  const copyText = () => {
    let text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  //   Removing Any extra space
  const removeExtras = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //   Calling the change event listner for working of use state {text}
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //   creating useState hook
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

        <div className="row">
          <div className="col-12 col-md-4">
            <button
              className="btn btn-primary btn-block mb-3"
              onClick={handleUpClick}
            >
              Convert to Upper Case
            </button>
          </div>
          <div className="col-12 col-md-4">
            <button
              className="btn btn-primary btn-block mb-3"
              onClick={handleLoClick}
            >
              Convert to Lower Case
            </button>
          </div>
          {/*  */}
          {/* Convert all upper */}
          <div className="col-12 col-md-4">
            <button
              className="btn btn-primary btn-block mb-3"
              onClick={convertAllUpper}
            >
              Convert First to Uppercase
            </button>
          </div>

          {/* Let your text speak */}
          <div className="col-12 col-md-4">
            <button className="btn btn-primary btn-block mb-3" onClick={speak}>
              Speak
            </button>
          </div>

          {/* Copy all text */}
          <div className="col-12 col-md-4">
            <button
              className="btn btn-primary btn-block mb-3"
              onClick={copyText}
            >
              Copy All Text
            </button>
          </div>

          {/* Remove extra spaces - Structure the paragraph */}
          <div className="col-12 col-md-4">
            <button
              className="btn btn-primary btn-block mb-3"
              onClick={removeExtras}
            >
              Remove extra space
            </button>
          </div>

          {/* Clear All */}
          <div className="col-12 col-md-4">
            <button
              className="btn btn-primary btn-block mb-3"
              onClick={handToClear}
            >
              Clear Inside's All Texts
            </button>
          </div>
        </div>
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
        <p>
          {text.length > 0 ? text : "Enter something above to preview here:) "}
        </p>
      </div>
    </>
  );
}
