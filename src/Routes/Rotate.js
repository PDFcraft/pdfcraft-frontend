import React, { useEffect } from "react";
import {useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { buttonTextState, filesState, flagProcessedState, targetUrlState} from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"
import ProcessedComponent from "../Components/ProcessedFile";
import UploadedComponent from "../Components/UploadedFile";

const Rotate = () => {
    const files = useRecoilValue(filesState);
    const flagProcessed = useRecoilValue(flagProcessedState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState)
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_ROTATE_API_LINK)
        setButtonText("Rotate")
    })
    return (
        <div>
            <h1>Rotate</h1>
            {
                files.length < 1 &&
                <DropzoneComponent/>
            }
            {
                flagProcessed==true&&
                <ProcessedComponent/>
            }
            {
                files.length>0 &&
                <div>
                    <UploadedComponent/>
                </div> 
               
            }
            <UploadButton />
            <DownloadButton />

        </div>
    );

};

export default Rotate;