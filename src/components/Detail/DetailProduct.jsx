import React from 'react'
import { FaUndoAlt } from 'react-icons/fa'

function DetailProduct({ productDetail }) {
  return (
    <div className='text-blue-800 mx-12 w-[350px]'>
      <div className='flex gap-1 justify-between'>
        <div className='flex items-center text-xl font-semibold '> {productDetail.price} TL  <FaUndoAlt className='w-4 ml-1' /> </div>
        <div className='text-sm hover:underline'> % Kredi Teklifi Al</div>
      </div>
      <div> </div>
      <div className='mt-8 text-black'>
        <div className='justify-between flex'><div>Ürün ID :</div>{productDetail.id}</div>
        <div className='justify-between flex'><div>Ürün Puanı :</div> {productDetail.rating.rate}</div>
        <div className='justify-between flex'><div>Ürün Miktarı : </div> {productDetail.rating.count} </div>
      </div>
    </div>
  )
}

export default DetailProduct