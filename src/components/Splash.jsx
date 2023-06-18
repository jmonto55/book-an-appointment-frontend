import { BiChevronRightCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import houseImage from '../assets/house.png';

const Splash = (props) => {
  const navigate = useNavigate();
  const { authorized } = props;
  useEffect(
    () => {
      if (authorized) {
        navigate('/home');
      }
    },
  );
  const loginNavagtion = () => {
    navigate('/login');
  };

  const signupNavagtion = () => {
    navigate('/signup');
  };

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
Splash.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
export default Splash;
