/* eslint-disable react/no-unescaped-entities */
import React,{ useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import config from "../config";
import Three from "../Components/ThreeModel/Three.js";
import StarsCanvas from "../Components/ThreeModel/Stars";

import { motion } from "framer-motion";
import { fadeIn } from "../motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = e.target.user_name.value;
    const userEmail = e.target.user_email.value;

    if (!userName || !userEmail) {
      toast.error("Veuillez remplir tous les champs", toastOptions);
      return;
    }

    if (userName.length < 4) {
      toast.error(
        "Le nom d'utilisateur doit contenir au moins 4 caractères",
        toastOptions
      );
      return;
    }

    emailjs
      .sendForm(config.SERVICE_ID, config.TEMPLATE_ID, form.current, config.KEY)
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toastSuccess();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const toastSuccess = () => {
    toast.success("Le message a été envoyé avec succès", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className=" relative section h-full flex bg-zinc-200 dark:bg-neutral-800 justify-center items-center">
      <StarsCanvas/>
      <div className="container">
        <div className="text-zinc-900 rounded-xl text-2xl font-space mt-12 mx-4 md:mx-0">
          <h1 className="text-3xl  mb-2 font-bold flex text-center justify-center text-green-700 uppercase">
            Contact Me !
          </h1>
          <p className="text-lg dark:text-zinc-200 text-center mb-4">
          If you have enjoyed my work and would like to contact me, please fill in the fields below.<br/> I will respond to you as soon as possible. <br/>Thank you for taking the time to browse through my portfolio!
          </p>
          <p className="dark:text-neutral-800 text-green-700 text-center text-lg italic mb-2">Search in the dark corners , where the light doesn't shine ?</p>
        </div>
        <div className="flex flex-col gap-y-12 lg:justify-around lg:flex-row-reverse lg:items-center lg:gap-x-8 lg:mt-4">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-[540px]  lg:h-[510px] h-[300px] cursor-grab">
            <Three />
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:flex lg:items-center lg:gap-x-12 mx-4 md:mx-0 mb-24 lg:mb-0 z-[1]"
          >
            <form
              className=" lg:w-[400px] lg:h-[500px] w-full h-[500px] rounded-lg p-6 text-xl bg-zinc-900 text-zinc-200  dark:bg-zinc-200 dark:text-zinc-900"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className=" text-3xl font-mono font-bold uppercase mt-2 text-center mb-4">
                <h1>Contact.</h1>
              </div>
              <label className="mb-2 dark:text-zinc-900 rounded-lg ">
                Name
              </label>
              <input
                className="w-full h-9 p-2 dark:bg-zinc-900 dark:text-zinc-200 text-zinc-900 outline-none rounded-md border-2 border-gray-300 focus:border-green-500"
                type="text"
                name="user_name"
              />

              <label className="mb-2 dark:text-zinc-900">Email</label>
              <input
                className="w-full dark:text-zinc-200 dark:bg-zinc-800 text-zinc-900 h-9 p-2 outline-none rounded-md border-2 border-gray-300 focus:border-green-500"
                type="email"
                name="user_email"
              />

              <label className="mb-2 dark:text-zinc-900">Message</label>
              <textarea
                className="w-full h-2/6 dark:text-zinc-200 dark:bg-zinc-800 text-zinc-900 p-2 outline-none rounded-md border-2 border-gray-300 focus:border-green-500"
                name="message"
              />

              <div className="flex justify-center">
                <input
                  className="w-24 h-9 mt-4 mb-4 text-white bg-green-500 rounded-md cursor-pointer"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </motion.div>
        </div>
        <ToastContainer />
      </div>
     
    </div>
  );
};

export default Contact;