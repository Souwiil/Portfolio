import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/index";
import { fadeIn } from "../motion";

const Works = () => {
  return (
    <>
      <div className="bg-zinc-200 dark:bg-neutral-800 h-full">
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center font-space font-bold text-green-700"
        >
          <p className="text-xl ">My work </p>
          <h2 className="text-[50px]">Projects.</h2>
        </motion.div>

        <div className="w-full flex text-center justify-center font-space ">
          <motion.p
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-2 text-[16px] max-w-3xl leading-[30px]"
          >
            Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-6 flex flex-wrap gap-7 lg:flex lg:justify-center mb-12 ">
          {projects && projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <motion.div
      variants={fadeIn('right', index * 0.4)}
      initial="hidden"
      whileInView={"show"}
      className="mb-16"
    >
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        className="bg-zinc-800 dark:bg-zinc-300 p-5 h-[500px] rounded-2xl lg:w-[360px]  lg:mx-0 w-full cursor-grab ">
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl "
          />

          <div className="absolute inset-0 flex justify-end m-3  ">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="dark:bg-zinc-900 bg-zinc-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer dark:hover:bg-green-500 hover:bg-green-500"
            >
              <FaGithub className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-zinc-200 dark:text-zinc-900 font-bold  text-3xl">{name}</h3>
          <p className="mt-2 text-secondary text-base font-mono text-zinc-200 dark:text-zinc-900">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] font-mono font-bold`}
              style={{ color: tag.color }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Works;