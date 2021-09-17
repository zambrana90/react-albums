import React, { useContext } from "react";
import { MoonOutline, SunnyOutline } from "react-ionicons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { toggleTheme, lightMode } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar mb-3 ${
        lightMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid container">
        <Link className="navbar-brand" to="/">
          ALBUMS REACT
        </Link>
        {lightMode ? (
          <MoonOutline color={"#fff"} onClick={toggleTheme} />
        ) : (
          <SunnyOutline color={"#000"} onClick={toggleTheme} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
