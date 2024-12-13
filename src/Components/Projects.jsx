import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const projectVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  }
};

const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.0
      }
    }
  };

const App = () => {
    const projects = [
        {
          name: "ROYAL REGALIYA",
          image: "/ProjectImage/vlcsnap-2024-11-09-00h54m36s161.jpg",
          description: "Starting At 76 Lacs, 3/4 BHK Flats, Plot No 16 To20 Sukhija Vihar Chopra Farm Mansarovar Jaipur",
          bedrooms: "3/4 BHK Flats",
          area: "Plot No 16 m Mansarovar Jaipur",
          possession: "Ready To Move",
          totalUnits: "48",
          totalTowers: "1",
          floors: "8"
        },
        {
            name: "ROYAL REGALIYA",
            image: "/ProjectImage/Copy of DJI_20241025190339_0390_D.jpg",
            description: "Starting At 76 Lacs, 3/4 BHK Flats, Plot No 16 To20 Sukhija Vihar Chopra Farm Mansarovar Jaipur",
            bedrooms: "3/4 BHK Flats",
            area: "Plot No 16 m Mansarovar Jaipur",
            possession: "Ready To Move",
            totalUnits: "48",
            totalTowers: "1",
            floors: "8"
          },
          {
            name: "ROYAL REGALIYA",
            image: "/ProjectImage/DJI_20241025132153_0240_D.jpg",
            description: "Starting At 76 Lacs, 3/4 BHK Flats, Plot No 16 To20 Sukhija Vihar Chopra Farm Mansarovar Jaipur",
            bedrooms: "3/4 BHK Flats",
            area: "Plot No 16  Mansarovar Jaipur",
            possession: "Ready To Move",
            totalUnits: "48",
            totalTowers: "1",
            floors: "8"
          },
          {
            name: "ROYAL REGALIYA",
            image: "/ProjectImage/Copy of vlcsnap-2024-11-09-00h48m45s416.jpg",
            description: "Starting At 76 Lacs, 3/4 BHK Flats, Plot No 16 To20 Sukhija Vihar Chopra Farm Mansarovar Jaipur",
            bedrooms: "3/4 BHK Flats",
            area: "Plot No 16  Mansarovar Jaipur",
            possession: "Ready To Move",
            totalUnits: "48",
            totalTowers: "1",
            floors: "8"
          }
        // Add more project objects here
      ];

      return (
        <div className="container mx-auto px-4 m-3">
          <motion.h1 
        className="text-4xl md:text-5xl font-extrabold text-center my-12 text-gray-800 leading-tight"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600">
          Your Vision, Our Expertise:
        </span>
        <br />
        <span className="text-3xl md:text-4xl font-bold">
          Let's Build Remarkable Projects Together.
        </span>
      </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className='space-y-12 '
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={projectVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* New "All Projects" button */}
         <div className="flex justify-center mt-12">
           <motion.button
            className="flex items-center justify-center bg-yellow-500 text-white pr-8 pl-8  px-6 py-3 rounded-lg hover:bg-white hover:text-black hover:border-black border border-transparent transition duration-300 ease-in-out text-lg font-semibold border-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          All Projects
        </motion.button>
      </div>
        </div>
      );
    };

export default App;