import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import PageContainers from '../../containers/PageContainers'
function Foot() {
    return (
        <div className='border-t mt-20'> 
        <PageContainers>
            <div  >
                <div className='flex gap-16 my-16 justify-center'>
                    <div className='flex gap-3 text-red-500 cursor-pointer '>
                        <AiFillPhone /> <div>7/24 Müşteri Hizmetleri</div>
                    </div>
                    <div className='flex gap-3 text-red-500 cursor-pointer'>
                        <AiFillPhone /> <div>Yardım Merkezi</div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='bg-white p-7 border shadow-md text-gray-400 text-sm '>
                        <div>
                            mahibinden.com'da yer alan kullanıcıların oluşturduğu tüm içerik, görüş ve bilgilerin doğruluğu, eksiksiz ve değişmez olduğu, yayınlanması ile ilgili yasal yükümlülükler içeriği oluşturan kullanıcıya aittir. Bu içeriğin, görüş ve bilgilerin yanlışlık, eksiklik veya yasalarla düzenlenmiş kurallara aykırılığından sahibinden.com hiçbir şekilde sorumlu değildir. Sorularınız için ilan sahibi ile irtibata geçebilirsiniz. Yer Sağlayıcı Belge No : 581
                        </div>

                    </div>


                </div>
                <div className='text-gray-500 text-sm flex  m-1 justify-between'>
                    <div className='flex gap-4'><div>Copyright © 2000-2023</div> <a href="">m.eraykarakasli@mail.com</a></div>
                    <div>(*) Bireysel hesap sahipleri için, limitli adetlerde, belirli kategorilerde ve belirli tekliflerde</div>
                </div>
            </div>
        </PageContainers></div>
    )
}

export default Foot