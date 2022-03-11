import React, { useEffect } from "react";
import {useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { buttonTextState, filesState, flagProcessedState, targetUrlState} from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"
import ProcessedComponent from "../Components/ProcessedFile";
import UploadedComponent from "../Components/UploadedFile";

const Split = () => {
    const files = useRecoilValue(filesState);
    const flagProcessed = useRecoilValue(flagProcessedState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState);
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_SPLIT_API_LINK)
        setButtonText("Split")
    })
    return (
        <div>
            <h1>Split</h1>
            {
                files.length < 1 &&
                <DropzoneComponent/>
            }
            {
                (files.length>0 && flagProcessed===false)&& 
                <UploadedComponent/>
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

export default Split;
