import Events from "./Events"
import Progress from "./progressBar"
import { useState } from "react";
import Forms from "./Forms"
import Haiku from "./Haiku.jsx"
import TravelLog from "./Adventure.jsx"
import Counter from "./Counter.jsx"
import Sideeffect from "./hooks"
import Timer from "./timer.jsx"
import ToDo from "./ToDo.jsx"
import Apod from "./FetchData.jsx"
import Pokedex from "./Pokedex"

export default function App(){
  return ( <div> <ToDo/> <Timer/><Sideeffect/><Counter/></div> )

}