import {useState, useEffect} from "react"


export default function Timer(){


    const [seconds, setSeconds] = useState(0);
    useEffect(
          function  (){

            const intervalId = setInterval(function(){setSeconds(prevSec => prevSec + 1)}, 1000)
          
         return function(){
           clearInterval(intervalId); 
          }
        
        }     

         

    ,[])

    return (
    <div>
      <p>Elapsed Time: {seconds} seconds</p>
    </div>
  );
}