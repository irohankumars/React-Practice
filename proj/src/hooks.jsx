import React from "react";
import{ useState, useEffect} from "react";

export default function Sideeffect() {
  const [toggle, setToggle] = useState(false);

  useEffect(function () {
    let intervalId;
    if(toggle){
        intervalId = setInterval(function(){
        const hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = hex;
      },2000);

    
    }
    return function(){
        if(intervalId){
          clearInterval(intervalId);
      }
        }
      
  }, [toggle]);

  const handleToggle = function () {
    setToggle(function (prevToggle) {
      return !prevToggle;
    });
  };

  return (
    <div id="toggle">
      <button onClick={handleToggle}>
        {toggle ? "Stop" : "Start"} Color Changing
      </button>
    </div>
  );
}
