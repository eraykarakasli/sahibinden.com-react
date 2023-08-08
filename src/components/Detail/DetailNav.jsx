import React from 'react'
import PageContainers from '../../containers/PageContainers'
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineMail, AiOutlineStar, AiOutlinePrinter } from 'react-icons/ai'


function DetailNav({ productDetail }) {
    return (
        
            <div className='h-8 border-b bg-[#F2F2F2] shadow-md'>
                <PageContainers >
                    <div className='justify-between flex items-center'>
                        <div>{productDetail.category}</div>
                        <div className='text-blue-800 text-xs items-center flex '>
                            <a className='p-2 hover:underline' href="/">Favori İlanlarım </a> | <a className='p-2 hover:underline' href="/">Favori Aramalarım</a> | <a className='hover:underline p-2' href="/">Size Özel İlanlar</a>
                            | <a className='hover:underline p-2' href="/"> İlan Karşılaştır</a>
                        </div>
                    </div>
                    <div className='my-5  justify-between flex items-center border-b '>
                        <div className='text-2xl font-bold '>{productDetail.title} </div>
                        <div className='flex items-center justify-center gap-8'>
                            <a className='text-blue-800 text-sm flex items-center gap-1' href="/"><AiOutlineStar /> Favorilerime Ekle </a>
                            <a className='text-blue-800 text-sm flex items-center gap-1' href="/"><AiOutlinePrinter /> Yazdır </a>
                            <div className='flex gap-1 cursor-pointer'>
                                <AiFillFacebook />
                                <AiFillTwitterSquare />
                                <AiOutlineMail />
                            </div>
                        </div>
                    </div>
                </PageContainers>

            </div>
       
    )
}

export default DetailNav