import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import links from '../constants';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const changeStyles = (index) => {
    setActiveLink(index);
  };

  useEffect(() => {
    setActiveLink(0);
  }, []);

  return (
    <nav className="w-1/6 min-w-[250px] max-w-[280px] h-screen flex flex-col p-2 pl-6 pt-20 border-r-2 hidden xl:block">
      <div className="w-1/4">
        <h1 className="font-kaushan text-3xl font-bold -rotate-12 mb-20 pl-4">Alpha Reservations</h1>
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
  );
};

export default Navbar;
