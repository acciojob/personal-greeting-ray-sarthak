
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
       
        <input type="text" placeholder="Enter Name" onChange={handleInput}></input>
        <h1>{name}</h1>

    </div>
  )
}

export default App
