import React from "react";
import Homemenu from "../Components/Homemenu";
import { Link } from "react-router-dom";
import logoSvg from "../svg/logo.svg";

const Homemain = () => {
  return (
    <section className="home-main">
        <Link to="/">
        <div className="home-main-top">
            <img src={logoSvg} alt="pdf-file" />
        </div>
        </Link>
        <Homemenu />
    </section>
  );
}

export default Homemain;