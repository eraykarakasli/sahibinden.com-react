import React from 'react'
import { ImSearch } from "react-icons/im";
import {useNavigate} from 'react-router-dom'

function NavRight() {
  const navigate = useNavigate();
  return (
    
    <div className='flex items-center justify-between'>
      <span className='flex justify-center h-[48px] items-center mr-[190px] ' >
        <input className='outline-none w-[300px] bg-[#2F3546] rounded-2 h-9 p-2 focus:bg-white' type="text" placeholder='Kelime, ilan no veya mağaza adı ile ara' />
        <ImSearch className='cursor-pointer bg-[#2F3546] h-9 text-[#979AA2] p-1 w-6'/>
        <a className='text-white cursor-pointer m-6 font-thin' href="/">Detaylı Arama </a>
      </span>
      <div className='mr-6 '>
        <span className='text-white text-sm mr-4 p-4'>
          <a className='pr-4 hover:underline cursor-pointer' onClick={()=>navigate('/login')}>Giriş Yap</a> | <a className='pl-1 hover:underline cursor-pointer' onClick={()=>navigate('/register')}>Hesap Aç</a>
        </span>
        <span className='cursor-pointer  bg-[#489AF1] py-2 text-white px-6 rounded-sm'><a href="/">Ücretsiz* İlan Ver</a></span>
      </div>
    </div>
  )
}

export default NavRight