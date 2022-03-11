import React, { useEffect } from "react";
import DragItem from "../Components/DragItem";
import DropzoneComponent from "../Components/DropzoneComponent";
import {useRecoilValue, useSetRecoilState } from 'recoil';
import { filesState, targetUrlState, buttonTextState, pdfMessageState, allowMultipleState, flagProcessedState} from "../state";
import DownloadButton from "../Components/DownloadButton";
import UploadButton from "../Components/UploadButton";
import ProcessedComponent from "../Components/ProcessedFile";

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
            <h1>Merge</h1>
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
            <UploadButton />
            <DownloadButton />
        </div>
    );

};

export default Merge;