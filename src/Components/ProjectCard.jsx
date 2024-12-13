import React from 'react';

import PropTypes from 'prop-types';



const ProjectCard = ({ project }) => {
    return (

        <div className="flex flex-col md:flex-row  border rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/2 p-4">
  <div className="rounded-lg overflow-hidden shadow-md h-full">
    <img 
      src={project.image} 
      alt={project.name} 
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 ease-in-out" 
    />
  </div>
</div>
            <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold text-yellow-600 mb-2">{project.name}</h2>
                <p className="text-gray-800 mb-4">{project.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="border border-gray-200 rounded-lg p-3 text-center">
                        <h3 className="font-semibold text-yellow-600">BEDROOMS</h3>
                        <p>{project.bedrooms}</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 text-center">
                        <h3 className="font-semibold text-yellow-600">PROJECT AREA</h3>
                        <p>{project.area}</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 text-center">
                        <h3 className="font-semibold text-yellow-600">POSSESSION</h3>
                        <p>{project.possession}</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 text-center">
                        <h3 className="font-semibold text-yellow-600">TOTAL UNITS</h3>
                        <p>{project.totalUnits}</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 text-center">
                        <h3 className="font-semibold text-yellow-600">TOTAL TOWERS</h3>
                        <p>{project.totalTowers}</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 text-center">
                        <h3 className="font-semibold text-yellow-600">NO. OF FLOORS</h3>
                        <p>{project.floors}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">E-Brochure</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border-black border border-transparent transition duration-300 ease-in-out">Book Now</button>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">View Details</button>
                </div>
            </div>
        </div>

    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        bedrooms: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        area: PropTypes.string.isRequired,
        possession: PropTypes.string.isRequired,
        totalUnits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        totalTowers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        floors: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};
export default ProjectCard;