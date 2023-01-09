import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { location } = useHistory();

  const pathname = location.pathname;

  function toggleHandler() {
    setToggle(true);
  }

  function closeHandler() {
    setToggle(false);
  }

  const isCrew = () => {
    if(!pathname.startsWith('/crew')) return;

    const name = pathname.split("/");
    if (!name[2] === "douglas") return false;
    return true;
  };

  const isDestination = () => {
    if(!pathname.startsWith('/destination')) return;

    const name = pathname.split("/");
    if (!name[2] === "moon") return false;
    return true;
  };

  const isTechnology = () => {
    if(!pathname.startsWith('/technology')) return;

    const name = pathname.split("/");
    if (!name[2] === "launch") return false;
    return true;
  };

  return (
    <header className={classes.header}>
      <div className={classes.navDesktop}>
        <div className={classes.mobile}>
          <img className={classes.logo} src="/shared/logo.svg" alt="logo" />
          <div onClick={toggleHandler}>
            <img
              className={classes.hamburger}
              src="/shared/icon-hamburger.svg"
              alt="hamburger-icon"
            />
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                to="/home"
                className={pathname === "/home" ? classes.active : ''}
              >
                <span>00</span>Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination/moon"
                className={isDestination() ? classes.active : ''}
              >
                <span>01</span>Destination
              </Link>
            </li>
            <li>
              <Link
                to="/crew/douglas"
                className={isCrew() ? classes.active : ''}
              >
                <span>02</span>Crew
              </Link>
            </li>
            <li>
              <Link
                to="/technology/launch"
                className={isTechnology() ? classes.active : ''}
              >
                <span>03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {toggle && (
        <div className={classes.navmobile}>
          <img
            onClick={closeHandler}
            className={classes.close}
            src="/shared/icon-close.svg"
            alt="close-icon"
          />
          <ul>
            <li>
              <Link to="/home">
                <span>00</span>Home
              </Link>
            </li>
            <li>
              <Link to="/destination/moon">
                <span>01</span>Destination
              </Link>
            </li>
            <li>
              <Link to="/crew/douglas">
                <span>02</span>Crew
              </Link>
            </li>
            <li>
              <Link to="/technology/launch">
                <span>03</span>Technology
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
