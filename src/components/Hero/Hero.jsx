import React from 'react'
import "./Hero.css"
import Arrow from "../../assets/arrow_btn.png"
import pause from "../../assets/pause_icon.png"
import play from "../../assets/play_icon.png"

const Hero = (props) => {
  return (
    <div className='hero'>
      <div className="HeroText">
        <p>{props.HeroData.text1}</p>
        <p>{props.HeroData.text2}</p>
      </div>
      <div className="Hero-explore">
        <p>Explore the features</p>
        <img src={Arrow} />
      </div>
      <div className="her_dot_play">
        <ul className="hero_dots">
          <li onClick={()=> props.setHeroCount(0)} className={props.HeroCount===0? "hero-dot orange": "hero-dot" }></li>
          <li onClick={()=> props.setHeroCount(1)} className={props.HeroCount===1? "hero-dot orange": "hero-dot" }></li>
          <li onClick={()=> props.setHeroCount(2)} className={props.HeroCount===2? "hero-dot orange": "hero-dot" }></li>
        </ul>
        <div className="hero-play">
        <img className='btn' onClick={()=> props.SetPlayStatus(!props.playStatus)} src={props.playStatus? pause: play}/>
        <p>See the Video</p>
      </div>
      </div>
      
      
    </div>
  )
}

export default Hero
