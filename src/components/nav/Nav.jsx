import React from "react";
import Logo from "../../images/logo.png"
import "./nav.css";
import { useNavigate } from "react-router";

const Nav = () => {
  const navigate = useNavigate()
  return (
    <main className="nav-main">
      <section className="nav-logo-section">
        <img 
        onClick={()=> {navigate("/")}}
        src={Logo} alt="Logo" />
      </section>

      <section className="nav-profil-section">
          <div className="nav-profil-cont">
            prf
          </div>
          <div className="nav-profil-dark-cont">
            dark
          </div>
      </section>
    </main>
  );
};

export default Nav;
