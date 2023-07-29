import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { Link, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import BookList from "./components/Navbar";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/Navbar" element={<Navbar />} />
//         <Route path="/TextForm" element={<TextForm />} />
//       </Routes>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3 ">
        <About />
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
