import Image from "../assets/Logo/moi.jpg";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../motion";

const Home = () => {
  return (
    <div className="h-full bg-zinc-200 dark:bg-neutral-800 mt-16 flex items-center justify-center">
      <div className="conatiner mx-auto px-4">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* {text} */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold font-space leading-[0.8] lg:text-[110px] mb-2"
            >
              Souhail <span>Barktou</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[30px] lg:text-[60px] font-bold font-mono  uppercase leading-[1]"
            >
              <span className="mr-4 ">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000, "Video editor", 2000]}
                speed={50}
                className="text-green-700 "
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 font-space font-regular text-xl"
            >
              Hello! My name is Souhail Barktou.<br/>I am a front-end developer.<br/>I was born in Lyon and i currently reside in France.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex max-w-max gap-x-6 items-center mb-5 mx-auto lg:mx-0"
            >
              <Link to="/contact" className="flex items-center">
              <button className="relative  text-zinc-900 font-bold font-mono dark:text-zinc-200 uppercase p-2 overflow-hidden group">
                    <span className="button-wrapper relative inline-flex items-center hover:text-green-500">
                      <span className="mr-2 text-xl ">
                        <FiArrowUpRight />
                      </span>
                      <span className="text-[20px] font-space">Contact</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 dark:bg-zinc-200 bg-zinc-900 group-hover:w-full"></span>
                    </span>
                  </button>
              </Link>
              <Link to="/about" className="flex items-center">
              <button className="relative  text-zinc-900 font-bold font-mono dark:text-zinc-200 uppercase p-2 overflow-hidden group">
                    <span className="button-wrapper relative inline-flex items-center hover:text-green-500">
                      <span className="mr-2 text-xl ">
                        <FiArrowUpRight />
                      </span>
                      <span className="text-[20px] font-space">About</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 dark:bg-zinc-200 bg-zinc-900 group-hover:w-full"></span>
                    </span>
                  </button>
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[25px] gap-x-3 max-w-max mx-auto lg:mx-0"
            >
              <a className="hover:text-green-600  " href="https://www.linkedin.com/in/souwil-barktou-58b875183/" target="blank">
                <FaLinkedin />
              </a>
              <a  className="hover:text-green-600" href="https://github.com/Souwiil" target="blank">
                <FaGithub />
              </a>
              
            </motion.div>
          </div>
          {/* {img} */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="justify-center flex flex-1 lg:flex mb-14"
          >
            <img
              className=" h-80 rounded-full mx-auto "
              src={Image}
              alt="moi"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
