import React from "react";

function Main(props) {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode is on</h1>;
  const lightMode = <h1>light mode is on</h1>;

  function click(){
    darkModeOn=!darkModeOn
    if(darkModeOn=true){
        console.log("Dark Mode is on")
    }else{
        console.log("light mode is on")
    }
  }
  return (
    <div>
        
       <h1>{props.Heading}</h1>
       <h1>{props.ToBeCompleted}</h1>
      {darkModeOn ? darkMode : lightMode}

      <h2>"yes iam learning"</h2>
      <button onClick={click}>Click me!</button>
      
      <ul>
        <li>{"he" + "lo"}</li>
        <li>{"2"}</li>
        <li>{"1" > "2"}</li>
        <li>{2 < 4}</li>
      </ul>
    </div>
  );
}

export default Main;
