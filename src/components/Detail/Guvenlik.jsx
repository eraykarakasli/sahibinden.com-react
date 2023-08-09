import React from 'react'
import {GiCheckedShield} from 'react-icons/gi'

function Guvenlik() {
  return (
    <div className='border mt-4 h-[140px] shadow-lg'>
        <div className='m-5  flex text-center gap-2'>
          <div className='pl-4 w-9]'><GiCheckedShield className='h-6' /></div>
          <div className='text-blue-800 font-semibold'>Güvenlik İpuçları</div>
        </div>
        <div className='m-5 pl-3 text-sm text-gray-600'>
        İlgilendiğiniz aracı görmeden kapora ödemeyin, para göndermeyin.
        <div>Detaylı bilgi için <a className='cursor-pointer hover:underline text-blue-800'>tıklayın.</a></div>
        </div>
    </div>
  )
}

export default Guvenlik