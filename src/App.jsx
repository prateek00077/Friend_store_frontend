import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import UpdateCard from './components/UpdateCard'
import AddCard from './components/AddCard'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='bg-slate-800 flex flex-col items-center h-screen w-screen'>
    <Navbar/>
    <div className='flex w-full align-middle justify-center m-15'><h1 className='text-cyan-500 font-bold text-5xl'>MY BESTIES🚀</h1></div>
    <AddCard/>

    {/* <Card 
    name={"Abhishek"}
    role={"Web Developer"}
    image={"https://avatar.iran.liara.run/public/boy"}
    desc={"He works at Google"}
    /> */}
    </div>
  )
}

export default App
