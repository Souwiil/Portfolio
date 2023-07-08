import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { GiCrossedSabres, GiHamburger} from "react-icons/gi";

const Nav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleNavMenu = () => {
    setOpen(!open);
  };

  const closeNavMenu = () => {
    setOpen(false);
  };

  return (
    <div className='lg:bg-pink-900 h-full flex justify-center'>
      <nav className="nav font-mono fixed z-[50] lg:bottom-10 bottom-0 transition-all duration-250 ease-in-out">
      <ul
          className={`bg-zinc-900 dark:bg-zinc-200 lg:flex lg:items-center lg:justify-center lg:gap-0.25 lg:p-1 lg:rounded-2xl 
          ${open ? 'flex flex-col justify-center items-center h-screen w-screen z-[50]' : 'hidden'
            }`}
        >
          <li>
            <NavLink
              className={`dark:text-neutral-900 block px-2 py-1 text-center font-bold rounded-full 
              ${open ? 'text-3xl py-4' : ''}
              ${location.pathname === '/' ? 'bg-white text-black dark:text-zinc-200 dark:bg-zinc-900' : 'text-white'
              } ${open && location.pathname === '/' ? 'text-mobile' : ''}`}
              exact={true}
              to="/"
              onClick={closeNavMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`dark:text-neutral-900 block px-2 py-1 text-center  font-bold rounded-full ${open ? 'text-3xl py-4' : ''} ${location.pathname === '/about' ? 'bg-white text-black dark:text-zinc-200 dark:bg-zinc-900' : 'text-white'} ${
                open && location.pathname === '/about' ? 'text-mobile' : ''
              }`}
              to="/about"
              onClick={closeNavMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`dark:text-neutral-900 block px-2 py-1 text-center  font-bold rounded-full ${
                open ? 'text-3xl py-4' : ''
              } ${location.pathname === '/skills' ? 'bg-white text-black dark:text-zinc-200 dark:bg-zinc-900' : 'text-white'} ${
                open && location.pathname === '/skills' ? 'text-mobile' : ''
              }`}
              to="/skills"
              onClick={closeNavMenu}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`dark:text-neutral-900 block px-2 py-1 text-center  font-bold rounded-full ${
                open ? 'text-3xl py-4' : ''
              } ${location.pathname === '/projects' ? 'bg-white text-black dark:text-zinc-200 dark:bg-zinc-900' : 'text-white'} ${
                open && location.pathname === '/projects' ? 'text-mobile' : ''
              }`}
              to="/projects"
              onClick={closeNavMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`dark:text-neutral-900 block px-2 py-1 text-center  font-bold rounded-full ${
                open ? 'text-3xl py-4' : ''
              } ${location.pathname === '/contact' ? 'bg-white text-black dark:text-zinc-200 dark:bg-zinc-900' : 'text-white'} ${
                open && location.pathname === '/contact' ? 'text-mobile' : ''
              }`}
              to="/contact"
              onClick={closeNavMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          className={`nav-burger text-green-700 sm:hidden text-[44px] cursor-pointer ${open ? 'absolute top-5 right-6' : ''}`}
          onClick={toggleNavMenu}
        >
          {open ? <GiCrossedSabres /> : <GiHamburger />}
        </div>
      </nav>
    </div>
  );
};

export default Nav;