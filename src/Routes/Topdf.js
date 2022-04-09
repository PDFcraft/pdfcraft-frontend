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
import Featbackground from "../Components/Featbackground";
import Featshortcuts from "../Components/Featshortcuts";

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
        <Featshortcuts />
            <div className="box-selected-4"></div>
        </section>
    </div>
    );

};

export default Topdf;