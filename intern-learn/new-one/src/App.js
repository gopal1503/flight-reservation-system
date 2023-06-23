import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Component } from "react";
import Main from "./components/Main";
import Main1 from "./components/Main1";
import image from "./image.png";


function Logo(props) {
  const userPic = <img src={image} />;
  return userPic;
}

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
      <Main1 />
      <Logo />
      
    </div>
  );
}

export default App;
