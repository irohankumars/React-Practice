import Events from "./Events"
// import Progress from "./progressBar"
import { useState } from "react";

function ProgressBar({progress}){
    return(
        <div>
            <h1>Progress Bar</h1>
                <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "4px" }}>
                    <div
                    style={{
                        width: `${progress}%`,
                        backgroundColor: "#007bff",
                        height: "24px",
                        borderRadius: "4px",
                    }}
                    ></div>
                </div>
            <p>{progress}% Complete</p>
        </div>
    )
}


export default function App(){
    const [progress={}, setProgress] = useState(0);
  return (
   <>
    <ProgressBar progress={progress} />
    <button onClick={()=>{setProgress(Math.min((progress+10),100))}}>Progress</button>
   </>
  )
}