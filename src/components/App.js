
import React from "react";
import './../styles/App.css';
import {useState} from "react"

const App = () => {
  const [name,setName]=useState("");
  function handleInput(e){
    setName(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Enter your name:</p>
        <input type="text" onChange={handleInput}></input>
        {name!=""?<p>Hello {name}!</p>:""}

    </div>
  )
}

export default App
