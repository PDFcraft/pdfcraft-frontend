import React from "react";
import { Link } from "react-router-dom";

const Featbackground = () => {
    return (
        <div>
            <section className="home-body">
            <section className="home-top">
            <div className="home-top-title">
            <Link to="/home">
                PDFcraft
            </Link>
            </div>
            <div className="home-top-dotss">
                <div className="home-top-dots">
                    <div className="home-top-dot"></div>
                    <div className="home-top-dot"></div>
                </div>
            </div>
            </section>
            </section>
        </div>
    );

};

export default Featbackground;