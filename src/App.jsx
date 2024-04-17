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
const [HeroCount, setHeroCount] = useState(2);
const [PlayStatus, setPlayStatus] = useState(false);

  return (
    <>
    <Background PlayStatus={PlayStatus} HeroCount={HeroCount} />

    </>
  )
}

export default App
