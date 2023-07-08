

import Converter from "../assets/Works/Converter.png";
import github from "../assets/Works/github.png";
import ChatApp from "../assets/Works/ChatApp.png";




   const projects = [
    {
      name: "Converter",
      description:
        "A web application that allows users to convert an amount in euros to any currency from different countries available in the database. It also features a country search system with the number of available currencies.",
      tags: [
        {
          name: "React",
          color: "#61dafb",
        },
        {
          name: "Vite",
          color: "#764abc",
        },
        {
          name: "Tailwind",
          color: "#38bdf8",
        },
        {
          name: "tsParticles",
          color: "#9c9ea3",
        },
       
      ],
      image: Converter,
      source_code_link: "https://souwiil.github.io/Converter/",
    },


    {
      name: "Github",
      description:
        "Web application that allows users to search for different GitHub repositories based on technology or repository name. There is a FAQ page for additional information. Clicking on the button generates more results using the API.",
      tags: [
        {
          name: "React",
          color: "#61dafb",
        },
        {
          name: "Motion",
          color: "#f24dc9",
        },
        {
          name: "Javascript",
          color: "#f1e05a",
        },
        {
          name: "Css",
          color: "#2154c4",
        },
      ],
      image: github,
      source_code_link: "https://souwiil.github.io/Api-Github/",
    },
    {
      name: "Chat App",
      description:
        "Web application that allows users to chat using an instant messaging system. There is a login system after completing the registration form. This application is designed for desktop use only.",
      tags: [
        {
          name: "Node.js",
          color: "#1dc441",
        },
        {
          name: "React",
          color: "#61dafb",
        },
        
        {
          name: "Tailwind",
          color: "#38bdf8",
        },
        {
          name: "Mongodb",
          color: "#0c6d12",
        },
        {
          name: "Motion",
          color: "#f24dc9",
        },
        {
          name: "Vercel",
          color: "#9c9ea3",
        },
      ],
      image: ChatApp,
      source_code_link: "https://react-chat-app-pink-ten.vercel.app/",
    },
  ];
  
  export { projects };