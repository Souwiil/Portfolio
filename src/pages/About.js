/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Photo from "../assets/Logo/photo.jpg"
import { motion } from 'framer-motion';
import { fadeIn } from "../motion";

import Cv from "../assets/Cv/Souwiil.pdf"
import { FiArrowDown, FiArrowUpRight} from "react-icons/fi";

const About = () => {
  return (
    <div className="section flex h-full bg-zinc-200 dark:bg-neutral-800 items-center justify-center">
      <div className="container mx-auto lg:mt-32">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-x-5 lg:gap-y-0 gap-y-10">
          {/* img */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex items-center justify-center'>
            <img className="lg:h-[440px] lg:rounded-2xl h-80 rounded-3xl" src={Photo} alt="moi" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView={"show"}
            className='flex-1'>
            <div className="text-center lg:text-left mx-4 md:mx-0 ">
              <h2 className="text-[55px] font-bold uppercase text-green-700 mt-2 font-space">About me.</h2>
              <h3 className="font-bold mb-4 text-lg font-space">I'm a Freelance Front-end Developer React with over 1 years of experience.</h3>
              <p className="mb-2 text-ellipsis font-space font-regular">I am a front-end developer. After a career change in 2022-2023, I completed a 6-month training program in web development. Passionate, curious, and always motivated to learn, I enjoy working in a team and I am constantly inspired to improve as a developer.</p>
              <div className="mb-2">
                <p className="text-xl font-space font-semibold uppercase">LANGUAGES:</p>
                <ul className=" ml-6 list-none">
                <li className="text-lg font-mono font-bold"> French: <span className="text-gray-500 italic ml-2"> Native</span></li>
                  <li className="text-lg font-mono font-bold"> Italian:<span className="text-gray-500 italic ml-2">Basic</span></li>
                  <li className="text-lg font-mono font-bold">English:<span className="text-gray-500 italic ml-2">Basic</span></li>
                </ul>
              </div>
              <div className="flex gap-x-3 mt-4 items-center justify-center lg:justify-start mb-24">
                <a href={Cv} download className="flex items-center">
                  <button className="relative  text-zinc-900 font-bold font-mono dark:text-zinc-200 uppercase p-2 overflow-hidden group">
                    <span className="button-wrapper relative inline-flex items-center hover:text-green-500">
                      <span className="mr-2 text-xl font-space ">
                        <FiArrowDown />
                      </span>
                      <span  className="font-space">Download Resume</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 dark:bg-zinc-200 bg-zinc-900 group-hover:w-full"></span>
                    </span>
                  </button>
                </a>
                
              
              <Link to="/skills" className="flex items-center">
              <button className="relative  text-zinc-900 font-bold font-mono dark:text-zinc-200 uppercase p-2 overflow-hidden group">
                    <span className="button-wrapper relative inline-flex items-center hover:text-green-500">
                      <span className="mr-2 text-xl ">
                        <FiArrowUpRight />
                      </span>
                      <span  className="font-space">Skills</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 dark:bg-zinc-200 bg-zinc-900 group-hover:w-full"></span>
                    </span>
                  </button>
              </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    //TODO responive, lien , skills
  )
}

export default About;