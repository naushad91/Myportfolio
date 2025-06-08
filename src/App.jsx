import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mynavbar from './components/Mynavbar'

import Hero from './components/Hero'
export default function App() {
  return (
    <>
     <Mynavbar></Mynavbar>
     <Hero></Hero>
     
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
 
  )
}

