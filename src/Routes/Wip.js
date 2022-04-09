import React from "react";
import Homebackground from "../Components/Homebackground";
import { Link } from "react-router-dom";
import wipSvg from "../svg/wip.svg";

const Wip = () => {
    return (
        <div>
            <section className="wip-back">
            <div className="wip-wrap">
            <img src={wipSvg} alt="pdf-file" />
            <h1>W.I.P</h1>
            <Link to="/home">
            <button>back</button>
            </Link>
            </div>  
            </section>
            <Homebackground />
        </div>
    );
};

export default Wip;