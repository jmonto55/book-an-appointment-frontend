import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Houses' },
    { path: '/reserve', text: 'Reserve' },
    { path: '/myReservations', text: 'My Reservations' },
    { path: '/addHouse', text: 'Add House' },
    { path: '/deleteHouse', text: 'Delete House' },
  ];

  return (
    <nav>
      <div>
        <h1>Alpha Reservation</h1>
      </div>
      <ul>
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
};
export default Navbar;
