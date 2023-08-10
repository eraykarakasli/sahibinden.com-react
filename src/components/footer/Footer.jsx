import React from 'react'
import PageContainers from '../../containers/PageContainers'

import Foot from './Foot'

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
               <Foot/>
            </PageContainers>
        </div>

    )
}

export default Footer