import Techno from '../assets/front'
import Back from "../assets/back"
import Other from "../assets/other"

import { motion } from "framer-motion";
import { fadeIn } from "../motion";

import {FiArrowUpRight} from "react-icons/fi";

const Skills = () => {
  return (
    <div className="section lg:h-full bg-zinc-200 font-space dark:bg-neutral-800 flex items-center justify-center text-center">
    <div className="container">
      <div className="mt-12 mb-12">
        <div>
          <h1 className="text-3xl lg:text-left pb-2 font-bold uppercase dark:border-zinc-200 border-zinc-900 border-b-2">Front-End</h1>
        </div>
        <div className="flex flex-wrap justify-center  lg:justify-start cursor-pointer  mt-4">
          {Techno.map((image, index) => (
            <motion.div
              key={index}
              className="w-24 h-24 lg:w-24 lg:h-24   p-2  overflow-hidden mx-2 mb-2"
              variants={fadeIn("up", index * 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <img
                src={image}
                alt={`Tech ${index}`}
                className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-95"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div>
          <h1 className="text-3xl lg:text-left pb-2 font-bold uppercase dark:border-zinc-200 border-zinc-900 border-b-2">Back-End</h1>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start cursor-pointer mt-4">
          {Back.map((image, index) => (
            <motion.div
              key={index}
              className="w-24 h-24 lg:w-24 lg:h-24  p-2  overflow-hidden mx-2 mb-2"
              variants={fadeIn("up", index * 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <img
                src={image}
                alt={`Tech ${index}`}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-95"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div>
          <h1 className="text-3xl lg:text-left pb-2 font-bold uppercase  dark:border-zinc-200 border-zinc-900 border-b-2">Other</h1>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start cursor-pointer mt-4">
          {Other.map((image, index) => (
            <motion.div
              key={index}
              className="w-24 h-24 lg:w-24 lg:h-24  p-2 overflow-hidden mx-2 mb-2"
              variants={fadeIn("up", index * 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <img
                src={image}
                alt={`Tech ${index}`}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-95"
              />
            </motion.div>
          ))}
        </div>
      </div>
            {/* //todo a faire  */}
            <div className="mt-12">
        <div>
          <h1 className="text-3xl lg:text-left pb-2 font-bold uppercase dark:border-zinc-200 border-zinc-900 border-b-2">CERTIFICATIONS</h1>
        </div>
        <motion.div 
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col lg:text-left text-3xl mb-24 justify-center lg:justify-start cursor-pointer mt-4">
            <a href="https://drive.google.com/file/d/1dNUfHfKtJKlZj2nqSftmXK00kLlqziqV/view?usp=sharing" target="blank">
            <button className="relative  text-zinc-900 font-bold  dark:text-zinc-200 uppercase p-2 overflow-hidden group">
                    <span className="button-wrapper relative inline-flex items-center hover:text-green-500">
                      <span className="mr-2 text-[40px] ">
                        <FiArrowUpRight />
                      </span>
                      <span className='font-space'>Certificate of Training Completion</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 dark:bg-zinc-200 bg-zinc-900 group-hover:w-full"></span>
                    </span>
                  </button>
            </a>
        </motion.div>
      </div>
      </div>
    </div>
  );
}

export default Skills