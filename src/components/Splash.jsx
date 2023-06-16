import { useEffect } from 'react';
import { BiChevronRightCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import houseImage from '../assets/house.png';

const Splash = () => {
  const navigate = useNavigate();
  const loginNavagtion = () => {
    navigate('/login');
  };
  const signupNavagtion = () => {
    navigate('/signup');
  };
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
    <div className="w-screen h-screen bg-center bg-no-repeat" style={{ backgroundImage: `url(${houseImage})` }}>
      <div
        className="w-full h-full bg-mustard bg-opacity-80 flex flex-col items-center justify-center"
      >
        <h2 className="mb-12 uppercase text-4xl sm:text-5xl font-black text-white-100 tracking-widest font-ubuntu text-center">alpha  reservations</h2>
        <div className="flex flex-col sm:flex-row gap-8">
          <button type="button" onClick={loginNavagtion} className="text-lg border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md hover:bg-opacity-100 bg-lime rounded-full px-4 py-2 color text-white flex justify-evenly items-center">
            Log In
            <BiChevronRightCircle size={20} className="ml-4" />
          </button>
          <button type="button" onClick={signupNavagtion} className="text-lg border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md hover:bg-opacity-100 bg-lime rounded-full px-5 py-2 color text-white flex justify-evenly items-center">
            Sign Up
            <BiChevronRightCircle size={20} className="ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Splash;
