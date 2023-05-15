import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">TODO</Link>
        </li>
        <li>
          <Link to="/pomodore">POMODORE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;