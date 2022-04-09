import React from "react";
import { Link } from "react-router-dom";
import mergeSvg from "../svg/merge.svg";
import splitSvg from "../svg/split.svg";
import rotateSvg from "../svg/rotate.svg";
import topdfSvg from "../svg/topdf.svg";
import unlockSvg from "../svg/unlock.svg";
import protectSvg from "../svg/protect.svg";

const Featshortcuts = () => {
  return (
    <section className="home-main-shortcuts">
            <Link to="/merge">
            <div className="shortcuts-box">
                <img src={mergeSvg} alt="pdf-file" />
            </div>
            </Link>
            <Link to="/split">
            <div className="shortcuts-box">
                <img src={splitSvg} alt="pdf-file" />
            </div>
            </Link>
            <Link to="/rotate">
            <div className="shortcuts-box">
                <img src={rotateSvg} alt="pdf-file" />
            </div>
            </Link>
            <Link to="/topdf">
            <div className="shortcuts-box">
                <img src={topdfSvg} alt="pdf-file" />
            </div>
            </Link>
            <Link to="/unlock">
            <div className="shortcuts-box">
                <img src={unlockSvg} alt="pdf-file" />
            </div>
            </Link>
            <Link to="/protect">
            <div className="shortcuts-box">
                <img src={protectSvg} alt="pdf-file" />
            </div>
            </Link>
        </section>
  );
}

export default Featshortcuts;