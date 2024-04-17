import React from 'react'
import vid1 from "../../assets/video1.mp4"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import pause from "../../assets/pause_icon.png"
import arrow from "../../assets/arrow_btn.png"
import play from "../../assets/play_icon.png"
import "./back.css"


const Background = (props) => {
  if (props.PlayStatus) {
    return (
      <video className='background' autoPlay loop muted>
        <source src={vid1} type='video/mp4'/>
      </video>
    )
  } 
  else if(props.HeroCount===0){
    return <img  src={image1} className='background'/>

    }
  else if(props.HeroCount===1){
    return <img src={image2} className='background'/>

    }
  else if(props.HeroCount===2){
    return <img src={image3} className='background'/>

    }
  return (
    <div>
     dw
    </div>
  )
}

export default Background
