import React from 'react'
import { RxCross2 } from "react-icons/rx";

const UpdateCard = () => {
  return (
    <div className='bg-slate-700 w-1/3 h-auto rounded-md font-semibold flex-col text-white'>
          <div className='flex justify-between m-5'>
            <div className='text-2xl '>My new BFF 😍</div>
            <div className='cursor-pointer'><RxCross2 size={25}/></div>
          </div>
    
        <div className='nameandrole flex justify-between m-5'>
            <div className='flex flex-col'>
                <div className='text-xl'>Full Name</div>
                <div className='border-1 border-slate-400 rounded-md'><input type="text" /></div>
            </div>
            <div className='flex flex-col'>
                <div className='text-xl '>Role</div>
                <div className='border-1 border-slate-400 rounded-md'><input type="text"/></div>
            </div>
        </div>
    
        <div className='discription flex flex-col m-5'>
            <div className='text-xl '>Description</div>
            <div className='border-1 border-slate-400 rounded-md h-18'><input type="text"/></div>
        </div>

        <div className='downbutton flex flex-row gap-3 align-middle justify-end mt-20 mr-5 ml-5 mb-5 h-10'>
            <div className='bg-cyan-400 text-xl w-20 h-full flex items-center justify-center text-slate-700 rounded-md'><button className='cursor-pointer'>Update</button></div>
            <div className='bg-slate-500 text-xl w-20 h-full flex items-center justify-center rounded-md'><button className='cursor-pointer'>Cancel</button></div>
        </div>
    </div>
  )
}

export default UpdateCard
