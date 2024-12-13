import React from 'react';
import { motion } from 'framer-motion';

const CompanyPortfolio = () => {

  const portfolioItems = [
    { title: 'PREMIUM PLOTS', subtitle: 'Prime Locations', image: '/images/Southfieldsg1.jpg' },
    { title: 'LUXURY VILLAS', subtitle: 'Exquisite Living', image: '/images/Southfieldsg1.jpg' },
    { title: 'TIMELY DELIVERY', subtitle: 'Committed Timelines', image: '/images/Southfieldsg1.jpg' },
    { title: 'TRANSPARENT BUSINESS', subtitle: 'Trust & Integrity', image: '/images/Southfieldsg1.jpg' }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ABOUT VASUDAIKA REALTY
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 text-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Why choose us
        </motion.p>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <motion.p 
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Vasudaika Realty is Hyderabad's premier real estate developer that helps you find what you seek when it comes to plots and villas. Our relentless efforts and the faith of our clients encourage us to push our boundaries and exceed expectations with our exceptional results. It is their faith in us that helped us become Hyderabad's one of the fastest emerging real-estate developers.
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed mt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We believe in shared success and growth and transparent business. We respect our clients invest in us and make sure that we meet their expectations by providing them secured investments with assured growth.
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed mt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Our mission has been to reach new heights and become the standard bearer of the real estate industry by creating the best living spaces. Our strength lies in our experience, skill and dedication to deliver the best. We keep showering your love and trust on us and we shall pursue our dreams, while we carry out yours!
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="grid grid-cols-2 gap-4">

              {portfolioItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}

              
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CompanyPortfolio;