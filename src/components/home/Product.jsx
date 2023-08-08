import React from 'react'
import {useNavigate} from 'react-router-dom'

function Product({product, index}) {
    
  return (
    <div className='cursor-pointer hover:underline my-2'> 
    <div key={index} className='w-[129px] h-[95px] flex border mx-auto p-2 items-center justify-center'>
        <img src={product?.image} alt={product?.title}
        className='max-w-full max-h-full '
        />
        
    </div>
    <div className='text-sm '>{product?.title.slice(0,16)}...</div>
    </div>
  )
}

export default Product