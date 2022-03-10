import React, { useEffect } from "react";
import DragItem from "../Components/DragItem";
import DropzoneComponent from "../Components/DropzoneComponent";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filesState, flagProcessedState, targetUrlState, buttonTextState, acceptedFormatState, pdfMessageState, allowMultipleState } from "../state";
import DownloadButton from "../Components/DownloadButton";
import UploadButton from "../Components/UploadButton";
import ProcessedComponent from "../Components/ProcessedFile";


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
            <h1>Topdf</h1>
            {
                files.length < 1 &&
                <DropzoneComponent/>
            }
            {
                (files.length > 0 && flagProcessed==false)&&
                <DragItem />

            }
            {
                flagProcessed==true&&
                <ProcessedComponent/>
            }
            <UploadButton />
            <DownloadButton />

        </div>
    );

};

export default Topdf;