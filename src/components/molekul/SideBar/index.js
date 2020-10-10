import React, { useState } from "react";
import {
  LogoOca,
  HomeIcon,
  ChatIcon,
  UnionIcon,
  NavLinkIcon,
  UnionActive,
} from "../../../Assets";
import { NavLink } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  return (
    <div>
      <div className="menu-toogle">
        <input
          type="checkbox"
          checked={checkBox}
          onClick={() => setCheckBox(!checkBox)}
        />
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`wrapperSideBar ${checkBox ? "show" : ""}`}>  
        {/* <div className="fixed"> */}
        <img src={LogoOca} className="SideBarLogo" alt="Logo" />
        <div className="wrapperNavlink">
          <NavLink to="/" activeClassName="active" className="Navlink" exact>
            <img src={HomeIcon} alt="HomeIcon" />
            <p className="textNavlink">Home</p>
          </NavLink>
          <div className="Navlink dropdown" onClick={() => setToggle(!toggle)}>
            <div style={{ display: "flex" }}>
              <img src={ChatIcon} alt="HomeIcon" />
              <p className="textNavlink">SMS</p>
            </div>
            <img src={!toggle ? UnionIcon : UnionActive} alt="HomeIcon" />
          </div>
          {toggle ? (
            <div>
              <div className="SmsDropdown">
                <img src={NavLinkIcon} alt="HomeIcon" />
                <NavLink
                  to="/broadcast"
                  className="Navlink"
                  activeClassName="active"
                >
                  <p className="textNavlink">Broadcast</p>
                </NavLink>
              </div>
              <div className="SmsDropdown">
                <img src={NavLinkIcon} alt="HomeIcon" />
                <NavLink
                  to="/smsscheduller"
                  className="Navlink"
                  activeClassName="active"
                >
                  <p className="textNavlink">SMS Scheduller</p>
                </NavLink>
              </div>
            </div>
          ) : null}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
