import { useState } from "react";


export default function Events() {
  const [interestedCount, setInterestedCount] = useState(0);
  const [goingCount, setGoingCount] = useState(0);
  const [interestedHover, setInterestedHover] = useState(false);
  const [goingHover, setGoingHover] = useState(false);
  const [imageHover, setImageHover] = useState(0);
  const [imageFocus, setImageFocus] = useState(false);
  const [headTooltip, setHeadTooltip] = useState(false);


  return <div style={{border: "4px solid black",
                      position:"relative", 
                      width: "350px",
                      height: headTooltip ? "":"550px",
                      placeItems: "center"
                      }}>
      
      <div>
        <h2 onMouseEnter={()=>{setHeadTooltip(true)}} onMouseLeave={()=>{setHeadTooltip(false)}}><i className="fa-solid fa-user"></i>InstaUser123{headTooltip && <div style={{fontSize: "20px", color: "red"}}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae asperiores voluptas quod voluptatem nihil, est adipisci quo, autem quos error porro aspernatur quisquam, aliquid blanditiis quidem ea. Saepe, similique optio.</p></div>}</h2>
      </div>
      <br></br>
      <div className="image">
        <img
        src="https://tse1.mm.bing.net/th/id/OIP.Cp-W-zfM-NDCmqumkvXtAQHaNK?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Fest"
        onFocus={()=>{setImageFocus(true)}}
        onClick={(e)=>{e.currentTarget.blur()}}
        onBlur={()=>{setImageFocus(false)}}
        onMouseEnter={()=>{setImageHover(1)}}
        onMouseLeave={()=>{setImageHover(0)}}
        style={
            { transform: imageFocus ? "scale(1.1)": "scale(1)",
              cursor: imageFocus ? "zoom-out" : imageHover ? "zoom-in": "default",
              width: "250px", height: "350px", }
            
        }
        tabIndex={0}
      />
      </div>
      <br />

     <div className="buttons">
       <button
        onClick={() => setInterestedCount(interestedCount + 1)}
        onMouseEnter={() => setInterestedHover(true)}
        onMouseLeave={() => setInterestedHover(false)}
        style={{
          transform: interestedHover ? "scale(1.1)" : "scale(1)",
          transition: "0.2s",
        }}
      >
        Interested ({interestedCount})
      </button>

      &nbsp;&nbsp;

      <button
        onClick={() => setGoingCount(goingCount + 1)}
        onMouseEnter={()=> setGoingHover(true)}
        onMouseLeave={()=> setGoingHover(false)}
        style={{
            transform: goingHover ? "scale(1.1)" : "scale(1)",
            transition: "0.2s",
           
        }}
        >
        Going ({goingCount})
      </button>
     </div>
     
    </div>
}
