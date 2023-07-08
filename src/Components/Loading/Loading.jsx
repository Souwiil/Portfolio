import React from "react";
import Load from "../../assets/Logo/loading.gif"

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-900 h-screen">
      <div>
        <img className="h-24" src={Load} alt="" />
      </div>
      <div className="flex text-center items-center text-zinc-200 font-space absolute bottom-0 w-full text-xl font-semibold">
        <p className="w-full inline-block p-4">
          Coded by 
          <a className="ml-2 border-b-2 border-green-500 " href="https://github.com/Souwiil" target="blank">
             Gakki.Dev.
          </a>
          &copy; • All rights reserved • 2023 - {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Loading;