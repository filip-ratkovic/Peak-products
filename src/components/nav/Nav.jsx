import React from "react";
import Logo from "../../images/logo.png";
import "./nav.css";
import { useNavigate } from "react-router";
import { AccountCircle as AvatarIcon } from "@mui/icons-material";
import MaterialUISwitch from "../../style/switch/MuiSwitch";
import { authSlice } from "../../store/authSlice";
import { store } from "../../store/store";
import { useSelector } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const accessToken = authState.token

  const handleLogout = () => {
    store.dispatch(
      authSlice.actions.logout({
        id: null,
        email: null,
        token: null,
        username:null,
        firstName:null,
        lastName:null,
      })
    );

    localStorage.setItem("userAuth", JSON.stringify({
      id: "",
      email: "",
      token: "",
      username:"",
      firstName:"",
      lastName:""
    }))
  }

  return (
    <main className="nav-main">
      <section className="nav-logo-section">
        <img
          onClick={() => {
            navigate("/");
          }}
          src={Logo}
          alt="Logo"
        />
      </section>

      <section className="nav-profil-section">
       {accessToken ? 
        <div className="nav-profil-dropdown">
        <div className="nav-profil-cont">
          <AvatarIcon fontSize="large" />
          <p>Filip</p>
        </div>
        <div className="nav-profil-menu">
          <p>My profil</p>
          <p onClick={handleLogout}>Logout</p>
        </div>
      </div> :
        <div className="nav-profil-login" onClick={()=> {navigate("/login")}}>
          <p>Login</p>
        </div>
      }
        <div className="nav-profil-dark-cont">
          <MaterialUISwitch/>
        </div>
      </section>
    </main>
  );
};

export default Nav;
