import React from "react";
import Logo from "../../images/logo.png";
import "./nav.css";
import { useNavigate } from "react-router";
import { AccountCircle as AvatarIcon } from "@mui/icons-material";
import MaterialUISwitch from "../../style/switch/MuiSwitch";

const Nav = () => {
  const navigate = useNavigate();
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
        <div className="nav-profil-dropdown">
          <div className="nav-profil-cont">
            <AvatarIcon fontSize="large" />
            <p>Filip</p>
          </div>
          <div className="nav-profil-menu">
            <p>My profil</p>
            <p>Logout</p>
          </div>
        </div>
        <div className="nav-profil-dark-cont">
          <MaterialUISwitch/>
        </div>
      </section>
    </main>
  );
};

export default Nav;
