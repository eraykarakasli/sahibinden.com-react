import React from 'react'
import PageContainers from '../../containers/PageContainers'
import { AiFillPhone } from 'react-icons/ai'

function Footer() {

    return (

        <div className='flex h-[650px] mt-10  bg-gray-100 border-t'>
            <PageContainers >
                <div className='flex'>
                    <div className='w-1/5'>
                        <div className='text-xl pb-6'>Kurumsal</div>
                        <div className='text-gray-500 '>
                            <div className='hover:underline cursor-pointer'>Hakkımızda</div>
                            <div className='hover:underline cursor-pointer'>Sürdürülebilirlik</div>
                            <div className='hover:underline cursor-pointer'>İnsan Kaynakları </div>
                            <div className='hover:underline cursor-pointer'> Haberler</div>
                            <div className='hover:underline cursor-pointer'>İletişim
                            </div>
                        </div>
                    </div>

                    <div className='w-1/5'>
                        <div className='text-xl pb-6'>Hizmetlerimiz</div>
                        <div className='text-gray-500'>
                            <div className='hover:underline cursor-pointer'>Doping</div>
                            <div className='hover:underline cursor-pointer'>S - Param Güvende</div>
                            <div className='hover:underline cursor-pointer'>Güvenli e-Ticaret(GeT)</div>
                            <div className='hover:underline cursor-pointer'>Toplu Ürün Girişi</div>
                            <div className='hover:underline cursor-pointer'>Reklam </div>
                            <div className='hover:underline cursor-pointer'>mahibinden Doğal Reklam </div>
                            <div className='hover:underline cursor-pointer'>Mobil </div>
                        </div>
                    </div>

                    <div className='w-1/5'>
                        <div className='text-xl pb-6'>Mağazalar</div>
                        <div className='text-gray-500'>
                            <div className='hover:underline cursor-pointer'>Neden Mağaza ?</div>
                            <div className='hover:underline cursor-pointer'>Mağaza Açmak İstiyorum</div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <div className='text-xl pb-6'>Gizlilik ve Kullanım</div>
                        <div className='text-gray-500'>
                            <div className='hover:underline cursor-pointer'>Sözleşmeler ve Kurallar</div>
                            <div className='hover:underline cursor-pointer'>Hesap Sözleşmesi</div>
                            <div className='hover:underline cursor-pointer'>Kullanım Koşulları</div>
                            <div className='hover:underline cursor-pointer'>Site Haritası</div>
                            <div className='hover:underline cursor-pointer'>Kişisel Verilerin Korunması </div>
                            <div className='hover:underline cursor-pointer'>Çerez Yönetimi</div>
                            <div className='hover:underline cursor-pointer'>Yardım ve İşlem Rehberi </div>
                        </div>
                    </div>
                    <div className='w-1/5'>
                        <div className='text-xl pb-6'>Bizi Takip Edin</div>
                        <div className='text-gray-500'>
                            <div className='hover:underline cursor-pointer'>Facebook</div>
                            <div className='hover:underline cursor-pointer'>Twitter</div>
                            <div className='hover:underline cursor-pointer'>Linkedin</div>
                            <div className='hover:underline cursor-pointer'>Instagram</div>
                            <div className='hover:underline cursor-pointer'>Youtube</div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-16 my-16'>
                    <div className='flex gap-3 text-red-500 '>
                        <AiFillPhone /> <div>7/24 Müşteri Hizmetleri</div>
                    </div>
                    <div className='flex gap-3 text-red-500'>
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
            </PageContainers>
        </div>

    )
}

export default Footer