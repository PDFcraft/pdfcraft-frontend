import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DragItem from "../Components/DragItem";
import DropzoneComponent from "../Components/DropzoneComponent";
import {useRecoilValue, useSetRecoilState } from 'recoil';
import { filesState, targetUrlState, buttonTextState, pdfMessageState, allowMultipleState, flagProcessedState} from "../state";
import DownloadButton from "../Components/DownloadButton";
import UploadButton from "../Components/UploadButton";
import ProcessedComponent from "../Components/ProcessedFile";
import folderSvg from "../svg/folderclose.svg";
import logoSvg from "../svg/logo.svg";
import mergeSvg from "../svg/merge.svg";
import splitSvg from "../svg/split.svg";
import rotateSvg from "../svg/rotate.svg";
import topdfSvg from "../svg/topdf.svg";
import unlockSvg from "../svg/unlock.svg";
import protectSvg from "../svg/protect.svg";

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
                        <UploadButton className="features-btn" />
                        <DownloadButton className="features-btn" />
                    </div>
                </div>
            </section>
            </section>


        </div>
    );

};

export default Merge;