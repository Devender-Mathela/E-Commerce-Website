import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Category from './Category';

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className} hidden md:block cursor-pointer absolute left-10 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/30 hover:bg-white/80 transition-all`}>
      <AiOutlineArrowLeft className='text-black' size={24} />
    </div>
  )
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className} hidden md:block cursor-pointer absolute right-10 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/30 hover:bg-white/80 transition-all`}>
      <AiOutlineArrowRight className='text-black' size={24} />
    </div>
  )
}

const Carousel = () => {
  const navigate = useNavigate()

  const heroSlides = [
    {
      title: "FALL/WINTER COLLECTION",
      subtitle: "Elevate your everyday wardrobe.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop", // Fashion lifestyle image
    },
    {
      title: "ESSENTIALS REIMAGINED",
      subtitle: "Minimalist design for the modern era.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop", 
    }
  ]

  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div style={{ bottom: "30px" }}>
        <ul className="m-0 p-0 text-white"> {dots} </ul>
      </div>
    )
  };

  return (
    <div className='relative w-full overflow-hidden'>   
      <Slider {...settings} className="h-[80vh] md:h-[90vh]">
        {
          heroSlides.map((item, index) => {
            return (
              <div key={index} className='relative h-[80vh] md:h-[90vh] w-full outline-none'>
                {/* Background Image */}
                <div 
                  className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                {/* Overlay */}
                <div className='absolute inset-0 bg-black/20' />
                
                {/* Content */}
                <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4'>
                  <h3 className='text-white tracking-[0.2em] text-xs md:text-sm mb-4 font-medium'>
                    {item.subtitle.toUpperCase()}
                  </h3>
                  <h1 className='text-4xl md:text-7xl font-bold tracking-tight text-white mb-8 font-sans'>
                    {item.title}
                  </h1>
                  <button 
                    onClick={() => navigate('/products')}
                    className='bg-white text-black px-8 py-3 text-sm tracking-widest uppercase font-bold hover:bg-gray-200 transition-colors'
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            )
          })
        }
      </Slider>
      <div className="py-12 bg-white">
        <Category />
      </div>
    </div>
  )
}

export default Carousel

