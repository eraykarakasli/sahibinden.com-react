import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsZoomIn, BsPlayCircle } from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function DetailSlider({ image }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className=" w-5/12 shadow-sm">

                <Slider {...settings} className=" h-auto my-5 cursor-pointer ">
                    <div className='!flex items-center px-6 justify-center'>
                        <img className='h-[450px] ' src={image} />
                    </div>
                    <div className='!flex items-center px-6 justify-center'>
                        <img className='h-[450px]' src={image} />
                    </div>
                    <div className='!flex items-center px-6 justify-center'>
                        <img className='h-[450px]' src={image} />
                    </div>
                </Slider>
                <div className="flex justify-center gap-40  items-center shadow-md bg-slate-100 text-blue-800 cursor-pointer">
                    <div className="flex items-center gap-1"><BsZoomIn /> Büyük Fotoğraf</div>|
                    <div disabled className="flex items-center gap-1"><BsPlayCircle /> Video</div>
                </div>
                <div className="flex border justify-center p-4">
                    <img className='h-[120px] w-40 object-contain hover:bg-gray-100 cursor-pointer' src={image} />
                    <img className='h-[120px] w-40 object-contain hover:bg-gray-100 cursor-pointer' src={image} />
                    <img className='h-[120px] w-40 object-contain hover:bg-gray-100 cursor-pointer' src={image} />
                </div>
                <div className="flex gap-7 my-6 justify-center text-blue-700 text-sm">
                    <div className="hover:underline cursor-pointer flex gap-1">
                      <AiOutlineShoppingCart/>  Ürün Değerlendirme
                    </div>
                    <div className="hover:underline cursor-pointer flex gap-1">
                    <AiOutlineShoppingCart/> Ürün Hasar Sorgulama
                    </div>
                    <div className="hover:underline cursor-pointer flex gap-1">
                    <AiOutlineShoppingCart/> Sıfır Ürün İnceleme
                    </div>
                </div>
            </div>

        </>
    );
}

export default DetailSlider