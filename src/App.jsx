import './App.css'
import Mynavbar from './components/Mynavbar'
import Projects from './components/Projects'
import { useState } from "react";
import Hero from "./components/Hero";



export default function App() {
  
  return (
    <>
     <Mynavbar></Mynavbar>
     <Hero></Hero>
     <Projects></Projects>
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
 
  )
}

