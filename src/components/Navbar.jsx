import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import links from '../constants';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  const toggleMenu = (displayValue, positionValue, closeIconDisplayValue) => {
    const nav = document.querySelector('nav');
    const closeIcon = document.querySelector('#close');
    nav.style.display = displayValue;
    nav.style.position = positionValue;
    closeIcon.style.display = closeIconDisplayValue;
  };

  const changeStyles = (index) => {
    setActiveLink(index);
  };

  const openMenu = () => {
    toggleMenu('flex', 'absolute', 'block');
  };

  const closeMenu = (event) => {
    toggleMenu('none', 'relative', 'none');
    const clickedElement = event.target;
    clickedElement.style.display = 'none';
  };

  useEffect(() => {
    setActiveLink(null);
  }, [location]);

  return (
    <>
      <HiOutlineMenuAlt4
        size={30}
        className="absolute top-8 left-8 xl:hidden cursor-pointer"
        onClick={openMenu}
      />
      <IoMdClose
        id="close"
        size={30}
        className="hidden z-20 absolute top-4 left-52 cursor-pointer"
        onClick={closeMenu}
      />
      <nav className="bg-white z-10 relative w-1/6 min-w-[250px] max-w-[280px] h-screen flex flex-col p-2 pl-6 pt-28 border-r-2 hidden xl:block">
        <div className="w-1/4">
          <h1 className="font-kaushan text-3xl font-bold -rotate-12 mb-20 pl-4 underline decoration-4 underline-offset-4">Alpha Reservations</h1>
        </div>
        <ul className="flex flex-col w-full justify-evenly gap-5">
          {links.map((link, index) => (
            <li
              className="duration-300 w-[210px] text-xl uppercase font-black py-2 pl-2"
              key={link.text}
              style={{
                backgroundColor: activeLink === index ? '#97bf0f' : '#fff',
                color: activeLink === index ? '#f5f5f5' : '#101010',
              }}
            >
              <NavLink
                to={link.path}
                onClick={() => changeStyles(index)}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? changeStyles(index) : '#fff',
                  color: isActive ? changeStyles(index) : '#000',
                })}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
