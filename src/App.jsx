import React from 'react'
import { useState } from 'react';
import Background from "./components/background/Background"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  let HeroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
  ];
const [HeroCount, setHeroCount] = useState(1);
const [PlayStatus, setPlayStatus] = useState(1);

  return (
    <>
    <Background PlayStatus={PlayStatus} HeroCount={HeroCount} />
    <Navbar/>
    <Hero 
    SetPlayStatus={setPlayStatus}
    HeroData={HeroData[HeroCount]}
    HeroCount={HeroCount}
    setHeroCount={setHeroCount}
    playStatus={PlayStatus}
    />

    </>
  )
}

export default App
