import Dropdown from "react-bootstrap/Dropdown";
import usericon from "./usericon.png";
import { Link } from "react-router-dom";

const NavbarDropdown = () => {
  return (
    <>
      <Dropdown className="dropdown">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          <img src={usericon} style={{ height: 25, width: 25 }} />
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" id="nav-dropdown">
          <Dropdown.Item>
            <Link to="/">Main</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/watchlist">Watchlist</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/addmovies">Add Movie</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/deletemovie">Delete Movies</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/login">Login</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/register">Register</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default NavbarDropdown;
