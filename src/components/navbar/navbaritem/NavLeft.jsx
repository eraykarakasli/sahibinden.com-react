import React from 'react'
import {useNavigate} from 'react-router-dom'

function NavLeft() {
  const navigate = useNavigate()
  return (
    
    <div onClick={()=> navigate('/')} className='cursor-pointer h-[36px] p-1 w-auto bg-[#FFE800] text-2xl font-bold  m-[12px]'>sahibinden.com</div>
  )
}

export default NavLeft