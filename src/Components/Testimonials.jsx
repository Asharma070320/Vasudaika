import React, { useState } from 'react';

import { FaQuoteLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
const testimonials = [
  {
    quote: "When it comes to land investments, there's none better than Vasudaika Southfields. I had a land deal for an open plot in Vasudaika Southfields and the appreciation I got like they said I would is beyond words. They sure know what they are doing!",
    author: "Ramarao"
  },
  {
    quote: "Vasudaika Southfields proved to me that even land deals can be as smooth as butter. They are well organized with legal expertise on their side to help customers out if necessary. It is because of their legal expertise that I could quickly invest in an open plot in Vasudaika Southfields.",
    author: "Shiva"
  },
  {
    quote: "Highly recommend Vasudaika Cosmo Celesse. By far, they are the best in the real estate in Hyderabad. What pleased me the most was their on time project delivery. I didn't have to compromise on my requirements and the deal was closed in just 6 days. Now, I am the proud owner of an open plot in Vasudaika Cosmo Celesse.",
    author: "Rajesh"
  },
  {
    quote: "When it comes to land investments, there's none better than Vasudaika Southfields. I had a land deal for an open plot in Vasudaika Southfields and the appreciation I got like they said I would is beyond words. They sure know what they are doing!",
    author: "Harry Dsouza"
  },
  {
    quote: "Vasudaika Southfields proved to me that even land deals can be as smooth as butter. They are well organized with legal expertise on their side to help customers out if necessary. It is because of their legal expertise that I could quickly invest in an open plot in Vasudaika Southfields.",
    author: "Gopalan Ramkrishnana"
  },
  {
    quote: "Highly recommend Vasudaika Cosmo Celesse. By far, they are the best in the real estate in Hyderabad. What pleased me the most was their on time project delivery. I didn't have to compromise on my requirements and the deal was closed in just 6 days. Now, I am the proud owner of an open plot in Vasudaika Cosmo Celesse.",
    author: "Rajesh"
  },
  {
    quote: "When it comes to land investments, there's none better than Vasudaika Southfields. I had a land deal for an open plot in Vasudaika Southfields and the appreciation I got like they said I would is beyond words. They sure know what they are doing!",
    author: "Saryendra Das Kumar"
  },
  {
    quote: "Vasudaika Southfields proved to me that even land deals can be as smooth as butter. They are well organized with legal expertise on their side to help customers out if necessary. It is because of their legal expertise that I could quickly invest in an open plot in Vasudaika Southfields.",
    author: "Suresh Mhajari"
  },
  {
    quote: "Highly recommend Vasudaika Cosmo Celesse. By far, they are the best in the real estate in Hyderabad. What pleased me the most was their on time project delivery. I didn't have to compromise on my requirements and the deal was closed in just 6 days. Now, I am the proud owner of an open plot in Vasudaika Cosmo Celesse.",
    author: "Kamlesh Pujari dev"
  }
  
  // Add more testimonials if needed
];


const TestimonialCard = ({ quote, author }) => (
    <motion.div 
      className="bg-gray-100 p-6 rounded-lg shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FaQuoteLeft className="text-4xl text-yellow-500 mb-4" />
      <p className="text-gray-700 mb-4">{quote}</p>
      <div className="text-right">
        <span className="font-semibold text-gray-800">- {author}</span>
      </div>
    </motion.div>
  );
  
  const Testimonials = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const testimonialsPerSet = 3;
    const totalSets = Math.ceil(testimonials.length / testimonialsPerSet);
  
    const handleDotClick = (index) => {
      setCurrentSet(index);
    };
  
    return (
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">Testimonials</h2>
          <p className="text-center text-yellow-500 font-bold mb-12">WHAT OUR CLIENT SAYS</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSet}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials
                .slice(currentSet * testimonialsPerSet, (currentSet + 1) * testimonialsPerSet)
                .map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8">
            {[...Array(totalSets)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentSet ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black hover:border-yellow-500 border border-transparent transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US
            </motion.button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;