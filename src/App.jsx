// import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import HeroSection from './Components/HeroSection';
// import ProjectsOverView from './Components/ProjectsOverView';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Testimonials from './Components/Testimonials';
import CompanyPortfolio from './Components/CompanyPortfolio';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="hidden sm:flex justify-center w-full my-2 p-3">
           <div className="w-1/2 h-0.5 bg-yellow-500 rounded-full mx-4 p-1"></div>
        </div>
        <HeroSection />

        <div className="hidden sm:flex justify-center w-full my-2 p-3">
           <div className="w-1/2 h-0.5 bg-yellow-500 rounded-full mx-4 p-1"></div>
        </div>

        <Projects/>
        <div className="hidden sm:flex justify-center w-full my-2 p-3">
           <div className="w-1/2 h-0.5 bg-yellow-500 rounded-full mx-4 p-1"></div>
        </div>
        <CompanyPortfolio/>
        <div className="hidden sm:flex justify-center w-full my-2 p-3">
           <div className="w-1/2 h-0.5 bg-yellow-500 rounded-full mx-4 p-1"></div>
        </div>
        <Testimonials/>
        <div className="hidden sm:flex justify-center w-full my-2 p-3">
           <div className="w-1/2 h-0.5 bg-yellow-500 rounded-full mx-4 p-1"></div>
        </div>
         <Blog/>


         <Footer/>

        {/* <ProjectsOverView /> */}
        {/* Other components will go here */}
      </div>
    </Router>
  );
}