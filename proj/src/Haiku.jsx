import React, { useState } from "react";
import "./Haiku.css"
export default function Haiku() {
  const [theme, setTheme] = useState("");
  const [userHaiku, setUserHaiku] = useState("");

  function handleSelectChange(e) {
    setTheme(e.target.value);
  }
  function handleSubmit(e){
  e.preventDefault();

  if(userHaiku){
    alert(`Your haiku: ${userHaiku}`);
    if(!themes.user){ 
      themes.user = []; 
    }
    themes.user.push(userHaiku);
    console.log(themes)
  }
  setUserHaiku("");
}


  const themes = {
    nature: [
      "A gentle breeze blows",
      "Leaves rustle in the soft wind",
      "Nature whispers peace",
    ],
    love: [
      "Heartbeats softly sound",
      "Love's sweet melody resounds",
      "Together we're found",
    ],
    seasons: [
      "Spring blooms with new life",
      "Summer's warmth and joy arrive",
      "Autumn leaves fall, sigh",
    ],
  };

  function generateHaiku() {
    if (theme) {
      return themes[theme].map(function (line, index) {
        return <p key={index}>{line}</p>;
      });
    }
  }

  return (
    <div className="container">
      <h2>Haiku Builder</h2>
      <select onChange={handleSelectChange} value={theme} style={{color:"black"}}>
        <option value="">Select a theme </option>
        <option value="nature">🌲Nature</option>
        <option value="love">❤️ Love</option>
        <option value="seasons">🍂 Seasons</option>
        {/* <option vlaue="user">Users'</option> */}
      
      </select>
      <div>{generateHaiku()}</div>
      <br></br>
        <form onSubmit={handleSubmit}>
                <textarea className="haiku-textarea" placeholder="Write your own haiku here..." value={userHaiku} onChange={(e)=>{setUserHaiku(e.target.value)}}></textarea> <br/>
               
      <button>Submit</button>
        </form>
    </div>
  );
}
