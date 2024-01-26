
import { useState } from "react";
import React from "react";
function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    //e.preventDefault();
    let input = e.target.value;
    setDisplay(display.concat(input));
  };
  const handleClear = (e) => {
    //e.preventDefault();
    setDisplay("");
  };

  const handleequal = (e) => {
    setDisplay(eval(display));
  };

  return (
    <div>
      <form>
        <input type="text" value={display} placeholder="0"></input>
        <input type="button" value="1" onClick={handleClick}></input>
        <input type="button" value="2" onClick={handleClick}></input>
        <input type="button" value="3" onClick={handleClick}></input>
        <input type="button" value="4" onClick={handleClick}></input>
        <input type="button" value="5" onClick={handleClick}></input>
        <input type="button" value="6" onClick={handleClick}></input>
        <input type="button" value="7" onClick={handleClick}></input>
        <input type="button" value="8" onClick={handleClick}></input>
        <input type="button" value="9" onClick={handleClick}></input>
        <input type="button" value="+" onClick={handleClick}></input>
        <input type="button" value="-" onClick={handleClick}></input>
        <input type="button" value="/" onClick={handleClick}></input>
        <input type="button" value="*" onClick={handleClick}></input>
        <input type="button" value="=" onClick={handleequal}></input>
      </form>
    </div>
  );
}
export default App;
