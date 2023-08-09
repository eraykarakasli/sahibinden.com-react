import React from 'react'
import Guvenlik from './Guvenlik'

function UserCard() {
    return (
        <>

            <div className='border h-[210px] w-[340px] shadow-lg'>
                <div className='bg-[#EFEFEF] h-[200px] w-[330px] border m-1'>
                    <div className='pt-3 pl-6 font-semibold text-lg'>Onur Yıldız</div>
                    <div className='text-gray-400 pl-6 mt-2 text-sm'>Hesap Açma Tarihi Nisan 2014</div>
                    <div className='flex bg-[#F8F8F8] py-3 border shadow-md m-6 mb-0 gap-16 text-lg'><div className='px-6 text-lg font-semibold'>Cep</div><div>0 (338) 917 55 78</div></div>
                    <div className='text-blue-800 flex justify-center hover:underline cursor-pointer text-sm  mt-2'>Mesaj Gönder</div>

                </div>
                 <Guvenlik/> 
            </div>
        
           
           
        </>
    )
}

export default UserCard