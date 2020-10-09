import React from "react";
import { ShearchIcon, UserIcon } from "../../../Assets";
import "./index.css";

const NavBar = () => {
  return (
    <div className="wrapperNavbar">
      <div className="navBarLeft">
        <img src={ShearchIcon} alt="ShearchIcon" width={18} height={18} />
        <input type="text" placeholder="Any help?" />
      </div>
      <div className="navBarRight">
        <div style={{textAlign: "right"}}>
          <span className="navbarRightName">Hi, Adjie!</span>
          <span className="navbarRightEmail">Adjie_g4ant3ng@banget.com</span>
        </div>
        <img src={UserIcon} alt="UserIcon" width={36} height={36} />
      </div>
    </div>
  );
};

export default NavBar;
