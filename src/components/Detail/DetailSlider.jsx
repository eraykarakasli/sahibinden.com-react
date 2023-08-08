import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsZoomIn, BsPlayCircle } from 'react-icons/bs'

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
            <div className=" w-5/12">
                
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
                <div className="flex border justify-center">
                    <img className='h-[120px] w-40 object-contain hover:bg-gray-100 cursor-pointer' src={image} />
                    <img className='h-[120px] w-40 object-contain hover:bg-gray-100 cursor-pointer' src={image} />
                    <img className='h-[120px] w-40 object-contain hover:bg-gray-100 cursor-pointer' src={image} />
                </div>
            </div>
           
        </>
    );
}

export default DetailSlider