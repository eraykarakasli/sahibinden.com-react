import React, { useEffect, useState } from 'react'
import { FaUndoAlt } from 'react-icons/fa'
import {RiFlagFill} from 'react-icons/ri'

function DetailProduct({ productDetail }) {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDiv(true);
    }, 500); // 3000 milisaniye (3 saniye) sonra div görüntülenecek

    return () => clearTimeout(timeout);
  }, []);
  const currentDate = new Date();
  const year = { year: 'numeric' };
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('tr-TR', options);
  const formattedYear = currentDate.toLocaleDateString('tr-TR', year);

  return (
    <div className='text-blue-800 mx-12 w-[350px] shadow-sm'>
      <div className='flex gap-1 justify-between'>
        <div className='flex items-center text-xl font-semibold '> {productDetail.price} TL  <FaUndoAlt className='w-4 ml-1' /> </div>
        <div className='text-sm hover:underline'> % Kredi Teklifi Al</div>
      </div>
      <div className='mt-4 hover:underline'>
        Samsun / İlkadım / Kadifekale Mah.
      </div>
      <div className='mt-2 text-black border-t py-3 '>
        <div className='gap-32 flex  border-b py-1'><div className='font-semibold'>İlan No</div><p className='text-red-500 '>{String(productDetail.id).padStart(10, '187529462199598554646')}</p></div>
        <div className='gap-20 flex border-b py-1'><div className='font-semibold'>İlan Kategori</div><div className='mx-4'>{productDetail.category}</div></div>
        <div className='gap-28 flex border-b py-1'><div className='font-semibold'>İlan Tarihi</div><div>{formattedDate} </div></div>
        {showDiv && (
          <div>
            <div className='gap-24  flex border-b py-1'><div className='font-semibold '>Ürün Puanı </div> <div className='mx-2'>{productDetail.rating.rate}</div></div>
            <div className='gap-20 flex border-b py-1'><div className='font-semibold'>  Ürün Miktarı</div><div className='mx-3'>{productDetail.rating.count}</div></div>
            <div className=' flex gap-28 border-b py-1'><div className='font-semibold'>Kimden</div><p className='text-red-500 mx-3'>Sahibinden</p></div>
          </div>
        )}
        <div className='gap-36 flex border-b py-1'><div className='font-semibold'>Yıl</div><div className='mx-3'>{formattedYear} </div></div>
      </div>
      <div className='flex justify-center hover:underline cursor-pointer'><RiFlagFill/> İlanla ile İlgili Şikayetim Var</div>
    </div>
  )
}

export default DetailProduct