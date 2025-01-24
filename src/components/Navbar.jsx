import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import { FaEquals } from "react-icons/fa";

const Navbar = ({setShowModal}) => {
  return (
    <div className='w-3/5 flex justify-between align-middle bg-slate-700 py-2 px-4 rounded-md mt-3'>
        <div className="left flex flex-row justify-around align-bottom gap-2">
        <FaReact size={40}
        className='hover:scale-110 hover:rotate-180 transition duration-500 ease-in-out hover:shadow-cyan-500 shadow-xl rounded-full text-cyan-500'
        />
        <div className='flex items-center justify-center align-middle h-full'><IoMdAdd size={30} color='white'/></div>
        <SiPython size={40} color='yellow' />
        <div className='flex justify-center align-middle items-center'><FaEquals size={20} color='white'/></div>
        <div className='flex justify-center align-middle items-center h-full text-4xl'>🤯</div>
        </div>

        <div className="right flex justify-around flex-row gap-2">
            <div className='text-white font-bold pt-2'>BFFship</div>
            <div className='text-l place-items-center h-full pt-2'>🔥</div>
            <div className='bg-slate-600 flex justify-center align-middle w-12 items-center  rounded-md'>
              <MdOutlineLightMode 
              className='hover:scale-110 hover:rotate-180 transition duration-500 ease-in-out hover:text-yellow-500 text-white'
              size={25}/>
              </div>
            <div className='bg-slate-600 flex justify-center align-middle w-12 items-center rounded-md cursor-pointer'>
              <MdLibraryAdd 
              className='hover:scale-120 transition duration-500 ease-in-out hover:text-green-500 text-white'
            onClick={() => setShowModal(true)}
            size={25} color='white'/></div>
        </div>
        
    </div>
  )
}

export default Navbar
