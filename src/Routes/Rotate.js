import React, { useEffect } from "react";
import {useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { angleState, buttonTextState, filesState, flagProcessedState, targetUrlState} from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"
import ProcessedComponent from "../Components/ProcessedFile";
import UploadedComponent from "../Components/UploadedFile";

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
            <h1>Rotate</h1>
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
            <UploadButton />
            <DownloadButton />

        </div>
    );

};

export default Rotate;