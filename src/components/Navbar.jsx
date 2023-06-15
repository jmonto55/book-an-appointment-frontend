import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import links from '../constants';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const changeStyles = (index) => {
    setActiveLink(index);
  };

  const openMenu = () => {
    setOpen(!open);
    const nav = document.querySelector('nav');
    nav.style.display = 'flex';
  };

  const closeMenu = () => {
    setOpen(!open);
    if (window.innerWidth < 1340) {
      const nav = document.querySelector('nav');
      nav.style.display = 'none';
    }
  };

  useEffect(() => {
    setActiveLink(-1);
    closeMenu();
    setOpen(true);
  }, [location]);

  useEffect(() => {
    const mediaQuery1 = window.matchMedia('(min-width: 1340px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        const nav = document.querySelector('nav');
        nav.style.display = 'flex';
        nav.style.position = 'static';
      }
    };

    mediaQuery1.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery1.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const mediaQuery1 = window.matchMedia('(max-width: 1340px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        const nav = document.querySelector('nav');
        nav.style.display = 'none';
        nav.style.position = 'absolute';
        setOpen(true);
      }
    };

    mediaQuery1.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery1.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {open ? (
        <HiOutlineMenuAlt4
          id="menu"
          size={30}
          className="absolute z-20 top-8 left-8 xl:hidden cursor-pointer"
          onClick={openMenu}
        />
      ) : (
        <IoMdClose
          id="close"
          size={30}
          className="xl:hidden z-20 absolute top-4 left-52 cursor-pointer"
          onClick={closeMenu}
        />
      )}
      <nav className={`${window.innerWidth < 1340 ? 'absolute' : 'static'} bg-white z-10 w-1/6 min-w-[250px] max-w-[280px] h-screen flex-col p-2 pl-6 pt-28 border-r-2 hidden xl:flex`}>
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
                onClick={() => {
                  changeStyles(index);
                  closeMenu();
                }}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? setActiveLink(index) : '#fff',
                  color: isActive ? setActiveLink(index) : '#000',
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
