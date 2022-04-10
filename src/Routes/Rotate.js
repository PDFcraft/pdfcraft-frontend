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
import Featbackground from "../Components/Featbackground";
import Featshortcuts from "../Components/Featshortcuts";
import rotateSvg from "../svg/rotate.svg";

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
        <Featbackground />
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
                    <div className="rotate-wrap">
                        <button className="rotate-btn"
                        onClick={() => {
                            rotateAngle("90");
                            }}><img src={rotateSvg} alt="pdf-file" />90</button>
                        <button className="rotate-btn"
                        onClick={() => {
                            rotateAngle("180");
                            }}><img src={rotateSvg} alt="pdf-file" />180</button>
                        <button className="rotate-btn"
                        onClick={() => {
                            rotateAngle("270");
                            }}><img src={rotateSvg} alt="pdf-file" />270</button>
                    </div>
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
        <Featshortcuts />
            <div className="box-selected-3"></div>
        </section>
    </div>
    );

};

export default Rotate;