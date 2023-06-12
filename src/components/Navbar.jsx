import { NavLink } from 'react-router-dom';
import Logo from './images/house.jpg';
import './Navbar.css';

const visitPageAction = (e) => {
  const links = document.querySelectorAll('.outer .inner-2 ul li a');
  for (let i = 0; i < links.length; i += 1) {
    if (links[i] === e.target) {
      e.target.classList.add('active');
    } else {
      links[i].classList.remove('active');
    }
  }
};

const Navbar = () => (
  <div className="outer">
    <div className="inner-1">
      <NavLink to="/" className="logo">
        <img src={Logo} alt="logo" width="80" height="80" />
        <p>House Renting</p>
      </NavLink>
    </div>
    <div className="inner-2">
      <ul>
        <li><NavLink to="/" onClick={visitPageAction}>Houses</NavLink></li>
        <li><NavLink to="/reserve" onClick={visitPageAction}>Reservations</NavLink></li>
        <li><NavLink to="/myReservations" onClick={visitPageAction}>My Reservations</NavLink></li>
        <li><NavLink to="/addHouse" onClick={visitPageAction}>Add House</NavLink></li>
        <li><NavLink to="/deleteHouse" onClick={visitPageAction}>Delete House</NavLink></li>
        {/* <li className="vertical-line" />
        <li><NavLink to="/my-profile" onClick={visitPageAction}>My Profile</NavLink></li> */}
      </ul>
    </div>
  </div>
);
export default Navbar;
