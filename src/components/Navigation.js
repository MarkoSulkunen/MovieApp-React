import "./Navigation.css";
import NavbarDropdown from "./NavbarDropdown";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { React } from "react";
import useWindowSize from "../utils/useWindowSize";
import { logOut } from "../auth/Firebase";

const MainNavigation = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <Link to="/">
          <h2>Movies App</h2>
        </Link>

        <Nav>
          <div>
            {width > 500 && (
              <>
                <ul>
                  <li>
                    <Link to="/watchlist">Watchlist</Link>
                  </li>
                  <li>
                    <Link to="/addmovies">Add Movies</Link>
                  </li>
                </ul>
              </>
            )}
            <div></div>
          </div>
        </Nav>
        <div>
          <NavbarDropdown />
        </div>
        <div>
          <>
            <ul>
              <li>
                <button onClick={() => logOut(navigate)} className="logout">
                  Log out
                </button>
              </li>
            </ul>
          </>
        </div>
      </header>
    </>
  );
};

export default MainNavigation;
