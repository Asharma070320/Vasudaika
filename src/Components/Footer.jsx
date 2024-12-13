import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get in Touch */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <a href="mailto:sales@vasudaika.in" className="flex items-center mb-2 hover:text-yellow-500">
              <FaEnvelope className="mr-2" /> sales@vasudaika.in
            </a>
            <p className="flex items-start mb-2">
              <FaMapMarkerAlt className="mr-2 mt-1" />
              Flat no. 202, Kailash Meadows, Beside Medicover Hospital, Patrika Nagar, Madhapur, Hyderabad- 500081
            </p>
            <a href="tel:+919121223358" className="flex items-center mb-2 hover:text-yellow-500">
              <FaPhone className="mr-2" /> +91 91212 23358
            </a>
            <a href="tel:+919121224451" className="flex items-center mb-2 hover:text-yellow-500">
              <FaPhone className="mr-2" /> +91 91212 24451
            </a>
          </div>

          {/* Social Media and Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com/vasudaika" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/vasudaika" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/company/vasudaika" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaLinkedinIn />
              </a>
            </div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/disclaimer" className="hover:text-yellow-500">Disclaimer</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</Link></li>
              <li><Link to="/approvals" className="hover:text-yellow-500">Approvals</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Get latest news & update</p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg text-gray-800"
              />
              <button className="bg-yellow-500 px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>© 2021 – Vasudaika Realty. All rights reserved.</p>
          <p className="mt-2">Developed By Harsh(harsmaur) with 💗 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;