import React, { useState } from "react";
import { LogoOca, HomeIcon, ChatIcon, UnionIcon } from "../../../Assets";
import { NavLink } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="wrapperSideBar">
      {/* <div className="fixed"> */}
        <img src={LogoOca} className="SideBarLogo" alt="Logo" />
        <div className="wrapperNavlink">
          <NavLink
            to="/"
            activeStyle={{ borderBottom: "3px solid white" }}
            className="Navlink"
          >
            <img src={HomeIcon} alt="HomeIcon" />
            <p className="textNavlink">Home</p>
          </NavLink>
          <div className="Navlink dropdown" onClick={() => setToggle(!toggle)}>
            <div style={{ display: "flex" }}>
              <img src={ChatIcon} alt="HomeIcon" />
              <p className="textNavlink">SMS</p>
            </div>
            <img src={UnionIcon} alt="HomeIcon" />
          </div>
          {toggle ? (
            <NavLink
              to="/smsscheduller"
              activeStyle={{ borderBottom: "3px solid white" }}
              className="Navlink"
            >
              <img src={HomeIcon} alt="HomeIcon" />
              <p className="textNavlink">Home</p>
            </NavLink>
          ) : null}
        </div>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
