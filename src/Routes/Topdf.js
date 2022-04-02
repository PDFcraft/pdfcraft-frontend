import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DragItem from "../Components/DragItem";
import DropzoneComponent from "../Components/DropzoneComponent";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filesState, flagProcessedState, targetUrlState, buttonTextState, acceptedFormatState, pdfMessageState, allowMultipleState } from "../state";
import DownloadButton from "../Components/DownloadButton";
import UploadButton from "../Components/UploadButton";
import ProcessedComponent from "../Components/ProcessedFile";
import logoSvg from "../svg/logo.svg";
import mergeSvg from "../svg/merge.svg";
import splitSvg from "../svg/split.svg";
import rotateSvg from "../svg/rotate.svg";
import topdfSvg from "../svg/topdf.svg";
import unlockSvg from "../svg/unlock.svg";
import protectSvg from "../svg/protect.svg";


const Topdf = () => {
    const files = useRecoilValue(filesState);
    const flagProcessed = useRecoilValue(flagProcessedState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState);
    const setAcceptedFormat = useSetRecoilState(acceptedFormatState);
    const setDragzoneMsg = useSetRecoilState(pdfMessageState);
    const setAllowMultiple = useSetRecoilState(allowMultipleState);
    useEffect(() => {
        setAcceptedFormat("image/png, image/jpeg")
        setTargetUrl(process.env.REACT_APP_TOPDF_API_LINK)
        setButtonText("Topdf")
        setDragzoneMsg("Drag'n'drop imgs, or click to select imgs")
        setAllowMultiple(true)
    })
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
                (files.length > 0 && flagProcessed===false)&&
                <DragItem />
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
            <div className="shortcuts-box">
                <img src={rotateSvg} alt="pdf-file" />
            </div>
            </Link>
            <Link to="/topdf">
            <div className="shortcuts-box box-selected">
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

export default Topdf;