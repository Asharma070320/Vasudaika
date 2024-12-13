import React from 'react';
import { motion } from 'framer-motion';
const BlogCard = ({ image, date, title, description }) => (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden p-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="mb-4 rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {date}
          </div>
          <motion.button 
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            READ MORE
          </motion.button>
        </div>
      </div>
    </motion.div>
  );


const Blog = () => {
  const blogs = [
    {
      image: "/images/image1.jpeg",
      date: "MAR 25",
      title: "What is the current availability of residential flats in Ajmer Road, Jaipur?",
      description: "Discover the latest availability of residential flats on Ajmer Road, Jaipur."
    },
    {
      image: "/images/image1.jpeg",
      date: "MAR 26",
      title: "How Do 3 BHK Flats in Mansarovar, Jaipur Compare to Other Localities?",
      description: "Discover how 3 BHK flats in Mansarovar, Jaipur, stack up against other localities."
    },
    {
      image: "/images/image1.jpeg",
      date: "MAR 26",
      title: "What Makes Property Dealers in Jaipur the Right Choice for You?",
      description: "Discover why property dealers in Jaipur are the perfect partners for your real estate journey."
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Vasuadaika Blogs</h2>
        <p className="text-center font-bold text-yellow-500 mb-8">Read our latest news & articles</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}

        </div>
        <div className="text-center mt-12">
          <motion.button
            className="bg-yellow-500 my-4 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black hover:border-yellow-500 hover:border-2 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Blogs
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Blog;