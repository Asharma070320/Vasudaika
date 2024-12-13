import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image1.jpeg',
    // Add more image paths as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* Sticky Social Sidebar */}
      <div className="fixed left-0 top-[45%] transform -translate-y-1/2 bg-yellow-500 p-2 rounded-r-lg z-50 ">
        <a href="#" className="block text-white hover:text-gray-200 mb-4"><FaFacebookF size={20} /></a>
        <a href="#" className="block text-white hover:text-gray-200 mb-4"><FaInstagram size={20} /></a>
        <a href="#" className="block text-white hover:text-gray-200 mb-4"><FaTwitter size={20} /></a>
        <a href="#" className="block text-white hover:text-gray-200"><FaLinkedinIn size={20} /></a>
      </div>

     {/* Desktop Carousel */}
     <div className="hidden sm:block relative w-screen overflow-hidden">
    <div 
      className="flex h-[60vh] md:h-[85vh] transition-transform duration-1000 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="w-screen flex-shrink-0">
          <img 
            src={slide} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  </div>

 {/* Mobile Carousel */}
 <div className="sm:hidden relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img 
                src={slide} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
      >
        <FaChevronLeft size={16} className="sm:text-2xl filter drop-shadow-md" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
      >
        <FaChevronRight size={16} className="sm:text-2xl filter drop-shadow-md" />
      </button>
    </div>
  );
};

export default HeroSection;



{/* <div className="relative w-full max-w-7xl mx-auto h-auto sm:h-[60vh] md:h-[85vh] overflow-hidden">
  <div 
    className="flex transition-transform duration-1000 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div key={index} className="w-full flex-shrink-0">
        <img 
          src={slide} 
          alt={`Slide ${index + 1}`} 
          className="w-full h-auto object-contain sm:object-cover sm:h-full"
        />
      </div>
    ))}
  </div>
</div> */}