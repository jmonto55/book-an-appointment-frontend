import { NavLink } from 'react-router-dom';
import links from '../constants';

const Navbar = () => (
  <nav className="w-screen flex justify-between p-4">
    <div className="w-1/4">
      <h1>Alpha Reservations</h1>
    </div>
    <ul className="flex w-3/4 justify-evenly">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink
            to={link.path}
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : undefined,
            })}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
