import React from "react";
import { Link } from "react-router-dom";
import { IlustrationLogin } from "../../Assets";
import { Colors } from "../../Utils";
import { Button } from "../../components";
import "./index.css";

const Login = () => {
  return (
    <div className="wrapperLogin">
      <div className="loginRight">
        <form>
          <p style={{ color: Colors.dark }} className="textOpen">
            Welcome Back, Please login into your account
          </p>
          <p className="textEmail">Username / Email</p>
          <input
            type="text"
            className="inputEmail"
            placeholder="Input Your Email or Username"
          />
          <p className="textEmail">Password</p>
          <div className="wrapperFormPassword">
            <input type="password" className="inputPassword" placeholder="Input Your Password" />
            <p className="textForgot">Forgot?</p>
          </div>
          <Link to="/home">
            <Button titlle="sign in" />
          </Link>
        </form>
      </div>
      <div
        className="wrapperIlusLogin"
        style={{
          backgroundColor: Colors.primary,
        }}
      >
        <img
          src={IlustrationLogin}
          alt="Imagenotfound"
          className="ilusImage"
        />
      </div>
    </div>
  );
};

export default Login;
