import React, { useState } from "react";
import "./Adventure.css"

export default function TravelLog() {
const [activities, setActivities] = useState([]);
 const [inputData, setInputData] = useState({
   destination: "",
   dates: "",
   groupSize: "",
   travelPreferences: ""
 });
  function handleActivitiesChange(e) {
    const selectedActivities = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setActivities(selectedActivities);
  }

  function handleInputDataChange(e) {
    setInputData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    
  }

  return (
    <div>
      <h2>Adventure Travel Booking</h2>
    <div>
        <form onSubmit={handleSubmit} style={{
        display:"flex",
        flexDirection:"column",
        gap: "20px"
        }}>
        <input type="text" value={inputData.destination} onChange={handleInputDataChange}></input>
        <select onChange={handleInputDataChange}>
            <option value=""></option>
            <option>biking</option>
            <option>biking</option>
            <option>biking</option>
        </select>
        <input type="date" value={inputData.dates} id="dates" onChange={handleInputDataChange}></input> 
        <input type="number" value={inputData.groupSize} onChange={handleInputDataChange}></input>
        <textarea placeholder=" jot down your thoughts" onChange={handleInputDataChange} value={inputData.travelPreferences}></textarea>
        <button>Book Adventure!</button>
      </form>
    </div>
    </div>
  );
}
