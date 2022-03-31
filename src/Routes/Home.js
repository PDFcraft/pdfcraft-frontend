import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useResetRecoilState} from "recoil";
import { acceptedFormatState, allowMultipleState,filesState, pdfMessageState,passwordState, processedFileState, flagProcessedState } from "../state";
import folderSvg from "../svg/folderclose.svg";
import logoSvg from "../svg/logo.svg";
import mergeSvg from "../svg/merge.svg";
import splitSvg from "../svg/split.svg";
import rotateSvg from "../svg/rotate.svg";
import topdfSvg from "../svg/topdf.svg";
import unlockSvg from "../svg/unlock.svg";
import protectSvg from "../svg/protect.svg";

const Home = () => {
    const resetFiles = useResetRecoilState(filesState);
    const resetAllowMultiple = useResetRecoilState(allowMultipleState)
    const resetPdfMessage = useResetRecoilState(pdfMessageState)
    const resetAcceptedFormat = useResetRecoilState(acceptedFormatState)
    const resetPassword = useResetRecoilState(passwordState)
    const resetProcessedFile = useResetRecoilState(processedFileState)
    const resetFlagProcessed = useResetRecoilState(flagProcessedState)
    useEffect(() => {
        resetFiles()
        resetAllowMultiple()
        resetPdfMessage()
        resetAcceptedFormat()
        resetPassword()
        resetProcessedFile()
        resetFlagProcessed()
    })
    return (
            <section className="home-body">
            <section className="home-top">
            <div className="home-top-title">PDFcraft</div>
            <div className="home-top-dotss">
                <div className="home-top-dots">
                    <div className="home-top-dot"></div>
                    <div className="home-top-dot"></div>
                </div>
            </div>
            </section>
            <section className="home-main">
                <Link to="/">
                <div className="home-main-top">
                    <img src={logoSvg} alt="pdf-file" />
                </div>
                </Link>
                <section className="home-main-contents">
                <Link to="/merge">
                <div className="box">
                    <img src={mergeSvg} alt="pdf-file" />
                    <span className="svg-text">MERGE</span>
                </div>
                </Link>
                <Link to="/split">
                    <div className="box">
                        <img src={splitSvg} alt="pdf-file" />
                        <span className="svg-text">SPLIT</span>
                    </div>
                </Link>
                <Link to="/rotate">
                    <div className="box">
                        <img src={rotateSvg} alt="pdf-file" />
                        <span className="svg-text">ROTATE</span>
                    </div>
                </Link>
                <Link to="/topdf">
                    <div className="box">
                        <img src={topdfSvg} alt="pdf-file" />
                        <span className="svg-text">TOPDF</span>
                    </div>
                </Link>
                <Link to="/unlock">
                    <div className="box">
                        <img src={unlockSvg} alt="pdf-file" />
                        <span className="svg-text">UNLOCK</span>
                    </div>
                </Link>
                <Link to="/protect">
                    <div className="box">
                        <img src={protectSvg} alt="pdf-file" />
                        <span className="svg-text">PROTECT</span>
                    </div>
                </Link>
                <Link to="/tojpg">
                    <div className="box">
                        <img src={folderSvg} alt="pdf-file" />
                        <span className="svg-text">TOJPG</span>
                    </div>
                </Link>
                <Link to="/watermark">
                    <div className="box">
                        <img src={folderSvg} alt="pdf-file" />
                        <span className="svg-text">WATERMARK</span>
                    </div>
                </Link>
                </section>
            </section>
            </section>
    );
};

export default Home;