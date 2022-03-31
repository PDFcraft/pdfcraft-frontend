import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../svg/logo.svg";

const Explain = () => {
  return (
    <section className="explain-back">
      <div className="explain-wrap">
        <img src={logoSvg} alt="pdf-logo" />
        <p>PDF Craft is a web-based pdf tool that allows you to perform simple tasks such as merge, split in a sec</p>
        <p>Bernie & Mizzu</p>
        <Link to="/home">
        <button>enter</button>
        </Link>
      </div>
    </section>
    );
  };
  
  export default Explain;