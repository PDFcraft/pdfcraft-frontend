import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { angleState, buttonTextState, filesState, flagProcessedState, targetUrlState} from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"
import ProcessedComponent from "../Components/ProcessedFile";
import UploadedComponent from "../Components/UploadedFile";
import logoSvg from "../svg/logo.svg";
import mergeSvg from "../svg/merge.svg";
import splitSvg from "../svg/split.svg";
import rotateSvg from "../svg/rotate.svg";
import topdfSvg from "../svg/topdf.svg";
import unlockSvg from "../svg/unlock.svg";
import protectSvg from "../svg/protect.svg";

const Rotate = () => {
    const files = useRecoilValue(filesState);
    const setAngle = useSetRecoilState(angleState);
    const flagProcessed = useRecoilValue(flagProcessedState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState)
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_ROTATE_API_LINK)
        setButtonText("Rotate")
    })

    const rotateAngle=optionAngle=>{
        setAngle(optionAngle)  
    }

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
        <section className="home-main-wrap">
        <section className="home-main-2">
            <Link to="/home">
            <div className="home-main-top">
                <img src={logoSvg} alt="pdf-file" />
            </div>
            </Link>
            <div className="home-main-features">
                <div className="features-zone">
                {
                files.length < 1 &&
                <DropzoneComponent/>
                }
                {
                (files.length>0 && flagProcessed===false)&&
                <div>
                    <UploadedComponent/>
                    <button
                    onClick={() => {
                        rotateAngle("90");
                        }}>90</button>
                    <button
                    onClick={() => {
                        rotateAngle("180");
                        }}>180</button>
                    <button
                    onClick={() => {
                        rotateAngle("270");
                        }}>270</button>
                </div> 
                }
                {
                flagProcessed===true&&
                <ProcessedComponent/>
                }
                </div>
                <div className="features-btns">
                    <UploadButton />
                    <DownloadButton />
                </div>
            </div>
        </section>
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
            <div className="shortcuts-box box-selected">
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
        </section>
        </section>
    </div>
    );

};

export default Rotate;