
import PageContainers from '../../containers/PageContainers'
import AsideContainer from '../../containers/AsideContainer'
import React, { useState } from 'react';

function Aside() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleMenu1 = () => {
        setIsOpen1(!isOpen1);
    };
    return (
       
            <AsideContainer >

                <div className='p-2 border-b border-gray-200'>
                    <div className='flex  '>
                        <div className='mr-3 text-xl justify-center text-center items-center text-white bg-gray-400 rounded-full w-7 h-7'>!!</div>
                        <a className='text-blue-800 hover:underline ' href="/"> Acil  Acil</a>
                    </div>
                    <div className='flex py-1 text-blue-800'>
                        <div className='mr-3 text-xl justify-center text-center items-center text-white bg-gray-400 rounded-full w-7 h-7'>!!</div>
                        <div className=''>
                            <a className='hover:underline' href="/"> Son 48 Saat /</a>
                            <a className='hover:underline' href="/">  1 Hafta /</a>
                            <a className='hover:underline' href="/"> 1 Ay</a>
                        </div>
                    </div>
                </div>
                <div className='my-5 p-2 border-b border-gray-200'>
                    <div className='flex  '>
                        <div className='mr-3 text-xl justify-center text-center items-center text-white bg-gray-400 rounded-full w-7 h-7'>!!</div>
                        <a className='text-blue-800 hover:underline font-semibold' href="/"> Oto360</a>
                    </div>
                    <div className=''>

                        <a className='text-blue-800 hover:underline mx-10' href="/"> S-Aracım</a>
                    </div>
                    <div className='flex py-1 text-blue-800'>

                        <div className="relative mx-8 ">
                            {isOpen && (
                                <div className="">
                                    <ul>
                                        <li className="py-1 px-2 hover:underline">Araç Hasar Sorgulama</li>
                                        <li className="py-1 px-2 hover:underline">Araç Karşılaştırma</li>
                                        <li className="py-1 px-2 hover:underline">Araç Değerleme</li>
                                        <li className="py-1 px-2 hover:underline">Oto Sözlük</li>
                                        <li className="py-1 px-2 hover:underline">Araç Alım Rehberi</li>
                                        <li className="py-1 px-2 hover:underline">Araç Satış Rehberi</li>
                                        <li className="py-1 px-2 hover:underline">Kredi</li>
                                        <li className="py-1 px-2 hover:underline">Sıfır Araç Dünyası</li>
                                    </ul>
                                </div>
                            )}
                            <button
                                className="p-2 flex hover:underline "
                                onClick={toggleMenu}
                            >
                                {isOpen ? "Kapat" : "Tümünü Göster"}
                                {isOpen ? <img src="\src\assets\dropdown.png" className='h-6 rotate-180' /> : <img src="\src\assets\dropdown.png" className='h-6 ' />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='my-5 p-2 border-b border-gray-200'>
                    <div className='flex'>
                        <div className='mr-3 text-xl justify-center text-center items-center text-white bg-gray-400 rounded-full w-7 h-7'>!!</div>
                        <a className='text-blue-800 hover:underline font-semibold ' href="/">Emlak</a>

                    </div>

                    <div className='py-1'>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Konut </a></div>
                        <div><a className='text-blue-800 hover:underline mx-10' href="">İş Yeri </a></div>
                        <div> <a className='text-blue-800 hover:underline mx-10' href="">Arsa </a></div>
                        <div><a className='text-blue-800 hover:underline mx-10' href="">Konut Projeleri </a></div>
                        <div><a className='text-blue-800 hover:underline mx-10' href="">Bina </a></div>
                        <div> <a className='text-blue-800 hover:underline mx-10' href="">Devre Mülk </a></div>
                        <div><a className='text-blue-800 hover:underline mx-10' href="">Turistik Tesis </a></div>
                    </div>
                </div>
                <div className='my-5 p-2 border-b border-gray-200'>
                    <div className='flex  '>
                        <div className='mr-3 text-xl justify-center text-center items-center text-white bg-gray-400 rounded-full w-7 h-7'>!!</div>
                        <a className='text-blue-800 hover:underline font-semibold ' href="/">Vasıta</a>
                    </div>
                    <div className='py-1'>
                        <div ><a className='text-blue-800 hover:underline mx-10 ' href="">Otomobil </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10 py-1' href="">Arazi, SUV & Pickup </a></div>
                        <div > <a className='text-blue-800 hover:underline mx-10 py-1' href="">Motosiklet </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Minivan & Panelvan</a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Ticari Araçlar</a></div>
                        <div > <a className='text-blue-800 hover:underline mx-10' href="">Elektrikli Araçlar </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Kiralık Araçlar </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Deniz Araçları </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Hasarlı Araçlar </a></div>

                        <div className="relative mx-8 text-blue-800">



                            {isOpen1 && (
                                <div className="">
                                    <ul>
                                        <li className="py-1 px-2 hover:underline">Klasil Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">Modifiye Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">Hava Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">ATV</li>
                                        <li className="py-1 px-2 hover:underline">UTV</li>
                                        <li className="py-1 px-2 hover:underline">Karavan</li>
                                        <li className="py-1 px-2 hover:underline">Engelli Plakalı Araçlar</li>
                                    </ul>
                                </div>
                            )}
                            <button
                                className="p-2 flex hover:underline "
                                onClick={toggleMenu1}
                            >
                                {isOpen1 ? "Kapat" : "Tümünü Göster"}
                                {isOpen1 ? <img src="\src\assets\dropdown.png" className='h-6 rotate-180' /> : <img src="\src\assets\dropdown.png" className='h-6 ' />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='my-5 p-2 border-b border-gray-200'>
                    <div className='flex'>
                        <div className='mr-3 text-xl justify-center text-center items-center text-white bg-gray-400 rounded-full w-7 h-7'>!!</div>
                        <a className='text-blue-800 hover:underline font-semibold ' href="/"><div href="">Yedek Parça, Aksesuar,</div> <div href="">Donanım & Tunning</div></a>

                    </div>

                    <div className='py-1'>
                        <div className='py-1'><a className='text-blue-800 hover:underline mx-10' href="">Otomotiv Ekipmanları </a></div>
                        <div className='py-1'><a className='text-blue-800 hover:underline mx-10' href="">Motosiklet Ekipmanları </a></div>
                        <div className='py-1'> <a className='text-blue-800 hover:underline mx-10' href="">Deniz Aracı Ekipmanlar </a></div>
                    </div>
                </div>
            {/* ////////////////////////// */}
            <div className='my-5 p-2 border-b border-gray-200'>
                    <div className='flex  '>
                        <div className='mr-3 text-xl justify-center text-center items-center text-white bg-gray-400 rounded-full w-7 h-7'>!!</div>
                        <a className='text-blue-800 hover:underline font-semibold ' href="/">Vasıta</a>
                    </div>
                    <div className='py-1'>
                        <div ><a className='text-blue-800 hover:underline mx-10 ' href="">Otomobil </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10 py-1' href="">Arazi, SUV & Pickup </a></div>
                        <div > <a className='text-blue-800 hover:underline mx-10 py-1' href="">Motosiklet </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Minivan & Panelvan</a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Ticari Araçlar</a></div>
                        <div > <a className='text-blue-800 hover:underline mx-10' href="">Elektrikli Araçlar </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Kiralık Araçlar </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Deniz Araçları </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Hasarlı Araçlar </a></div>

                        <div className="relative mx-8 text-blue-800">



                            {isOpen1 && (
                                <div className="">
                                    <ul>
                                        <li className="py-1 px-2 hover:underline">Klasil Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">Modifiye Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">Hava Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">ATV</li>
                                        <li className="py-1 px-2 hover:underline">UTV</li>
                                        <li className="py-1 px-2 hover:underline">Karavan</li>
                                        <li className="py-1 px-2 hover:underline">Engelli Plakalı Araçlar</li>
                                    </ul>
                                </div>
                            )}
                            <button
                                className="p-2 flex hover:underline "
                                onClick={toggleMenu1}
                            >
                                {isOpen1 ? "Kapat" : "Tümünü Göster"}
                                {isOpen1 ? <img src="\src\assets\dropdown.png" className='h-6 rotate-180' /> : <img src="\src\assets\dropdown.png" className='h-6 ' />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className='my-5 p-2 border-b border-gray-200'>
                    <div className='flex  '>
                        <div className='mr-3 text-xl justify-center text-center items-center text-white bg-gray-400 rounded-full w-7 h-7'>!!</div>
                        <a className='text-blue-800 hover:underline font-semibold ' href="/">Vasıta</a>
                    </div>
                    <div className='py-1'>
                        <div ><a className='text-blue-800 hover:underline mx-10 ' href="">Otomobil </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10 py-1' href="">Arazi, SUV & Pickup </a></div>
                        <div > <a className='text-blue-800 hover:underline mx-10 py-1' href="">Motosiklet </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Minivan & Panelvan</a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Ticari Araçlar</a></div>
                        <div > <a className='text-blue-800 hover:underline mx-10' href="">Elektrikli Araçlar </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Kiralık Araçlar </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Deniz Araçları </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Hasarlı Araçlar </a></div>

                        <div className="relative mx-8 text-blue-800">



                            {isOpen1 && (
                                <div className="">
                                    <ul>
                                        <li className="py-1 px-2 hover:underline">Klasil Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">Modifiye Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">Hava Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">ATV</li>
                                        <li className="py-1 px-2 hover:underline">UTV</li>
                                        <li className="py-1 px-2 hover:underline">Karavan</li>
                                        <li className="py-1 px-2 hover:underline">Engelli Plakalı Araçlar</li>
                                    </ul>
                                </div>
                            )}
                            <button
                                className="p-2 flex hover:underline "
                                onClick={toggleMenu1}
                            >
                                {isOpen1 ? "Kapat" : "Tümünü Göster"}
                                <img src="\src\assets\dropdown.png" className='h-6' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='my-5 p-2 border-b border-gray-200'>
                    <div className='flex  '>
                        <div className='mr-3 text-xl justify-center text-center items-center text-white bg-gray-400 rounded-full w-7 h-7'>!!</div>
                        <a className='text-blue-800 hover:underline font-semibold ' href="/">Vasıta</a>
                    </div>
                    <div className='py-1'>
                        <div ><a className='text-blue-800 hover:underline mx-10 ' href="">Otomobil </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10 py-1' href="">Arazi, SUV & Pickup </a></div>
                        <div > <a className='text-blue-800 hover:underline mx-10 py-1' href="">Motosiklet </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Minivan & Panelvan</a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Ticari Araçlar</a></div>
                        <div > <a className='text-blue-800 hover:underline mx-10' href="">Elektrikli Araçlar </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Kiralık Araçlar </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Deniz Araçları </a></div>
                        <div ><a className='text-blue-800 hover:underline mx-10' href="">Hasarlı Araçlar </a></div>

                        <div className="relative mx-8 text-blue-800">



                            {isOpen1 && (
                                <div className="">
                                    <ul>
                                        <li className="py-1 px-2 hover:underline">Klasil Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">Modifiye Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">Hava Araçlar</li>
                                        <li className="py-1 px-2 hover:underline">ATV</li>
                                        <li className="py-1 px-2 hover:underline">UTV</li>
                                        <li className="py-1 px-2 hover:underline">Karavan</li>
                                        <li className="py-1 px-2 hover:underline">Engelli Plakalı Araçlar</li>
                                    </ul>
                                </div>
                            )}
                            <button
                                className="p-2 flex hover:underline "
                                onClick={toggleMenu1}
                            >
                                {isOpen1 ? "Kapat" : "Tümünü Göster"}
                                <img src="\src\assets\dropdown.png" className='h-6' />
                            </button>
                        </div>
                    </div>
                </div>

            </AsideContainer>
       
    )
}

export default Aside