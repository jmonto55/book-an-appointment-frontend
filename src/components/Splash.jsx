import { useEffect } from 'react';
import { BiChevronRightCircle } from 'react-icons/bi';
import houseImage from '../assets/house.png';

const Splash = () => {
  useEffect(() => {
    const menu = document.querySelector('#menu');
    menu.style.display = 'none';
    const nav = document.querySelector('nav');
    nav.style.display = 'none';

    const mediaQuery1 = window.matchMedia('(min-width: 1340px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        const nav = document.querySelector('nav');
        nav.style.display = 'none';
      }
    };

    mediaQuery1.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery1.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-mustard">
      <div
        style={{ backgroundImage: `url(${houseImage})` }}
        className="w-full h-full flex items-center justify-center bg-center bg-no-repeat"
      >
        <div className="flex flex-col">
          <button type="button" className="border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md hover:bg-opacity-100 bg-lime rounded-full px-4 py-2 mt-6 color text-white flex justify-evenly items-center">
            Log In
            <BiChevronRightCircle size={20} className="ml-4" />
          </button>
          <button type="button" className="border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md hover:bg-opacity-100 bg-lime rounded-full px-5 py-2 mt-6 color text-white flex justify-evenly items-center">
            Sign Up
            <BiChevronRightCircle size={20} className="ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Splash;
