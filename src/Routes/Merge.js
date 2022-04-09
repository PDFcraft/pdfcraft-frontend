import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DragItem from "../Components/DragItem";
import DropzoneComponent from "../Components/DropzoneComponent";
import {useRecoilValue, useSetRecoilState } from 'recoil';
import { filesState, targetUrlState, buttonTextState, pdfMessageState, allowMultipleState, flagProcessedState} from "../state";
import DownloadButton from "../Components/DownloadButton";
import UploadButton from "../Components/UploadButton";
import ProcessedComponent from "../Components/ProcessedFile";
import Featbackground from "../Components/Featbackground";
import Featshortcuts from "../Components/Featshortcuts";
import logoSvg from "../svg/logo.svg";

const Merge = () => {
    const files = useRecoilValue(filesState);
    const flagProcessed = useRecoilValue(flagProcessedState);
    const setButtonText = useSetRecoilState(buttonTextState)
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setDragzoneMsg = useSetRecoilState(pdfMessageState);
    const setAllowMultiple = useSetRecoilState(allowMultipleState);
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_MERGE_API_LINK)
        setButtonText("Merge")
        setDragzoneMsg("Drag'n'drop pdfs, or click to select pdfs")
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
                <div className="box-selected-1"></div>
            </section>
        </div>
    );

};

export default Merge;