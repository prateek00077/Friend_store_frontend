import React from 'react'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const card = (props) => {
  const {name, role, desc, image} = props;
  return (
    <div className='bg-white flex flex-col w-2/7 h-48 gap-2 rounded-md'>
      <div className='bg-amber-200 flex justify-between rounded-md'>
        <img src={image} alt="" className='size-10'/>
        <div>
            {name}
            {role}
        </div>
        <div className='flex flex-row gap-2 justify-between items-center'>
        <CiEdit size={25}/>
        <RiDeleteBinLine size={25}/>
        </div>
      </div>

      <div className='bg-amber-800 h-full rounded-md'>
        {desc}
      </div>
    </div>
  )
}

export default card
