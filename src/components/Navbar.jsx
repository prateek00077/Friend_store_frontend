import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import { FaEquals } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-3/5 flex justify-between align-middle bg-slate-700 py-2 px-4 rounded-md mt-3'>
        <div className="left flex flex-row justify-around align-bottom gap-2">
        <FaReact size={40} color='cyan'/>
        <div className='flex items-center justify-center align-middle h-full'><IoMdAdd size={30} color='white'/></div>
        <SiPython size={40} color='yellow' />
        <div className='flex justify-center align-middle items-center'><FaEquals size={20} color='white'/></div>
        <div className='flex justify-center align-middle items-center h-full text-4xl'>🤯</div>
        </div>

        <div className="right flex justify-around flex-row gap-2">
            <div className='text-white font-bold pt-2'>BFFship</div>
            <div className='text-l place-items-center h-full pt-2'>🔥</div>
            <div className='bg-slate-600 flex justify-center align-middle w-12 items-center  rounded-md'><MdOutlineLightMode size={25} color='white'/></div>
            <div className='bg-slate-600 flex justify-center align-middle w-12 items-center rounded-md cursor-pointer'><MdLibraryAdd size={25} color='white'/></div>
        </div>
        
    </div>
  )
}

export default Navbar
