import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import '../Styles/Nav.css';

const Nav = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav>
      <div>
        <NavLink to="/">
          <img src={"./images/dispatch-logo.png"} alt="Home" />
        </NavLink>
      </div>
      <div className="clock">
        <span>{currentTime.toLocaleTimeString()}</span>
      </div>
      <div className="navname">
        <div>
          <NavLink to="/Top10">
            Top10
          </NavLink>
        </div>
        <div>
          <NavLink to="/News">
            News
          </NavLink>
        </div>
        <div>
          <NavLink to="/Photos">
            Photos
          </NavLink>
        </div>
        <div>
          <NavLink to="/Video">
            Video
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
