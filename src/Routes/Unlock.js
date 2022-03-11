import React, { useEffect } from "react";
import {useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { buttonTextState, filesState, flagProcessedState, targetUrlState,passwordState} from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"
import ProcessedComponent from "../Components/ProcessedFile";
import UploadedComponent from "../Components/UploadedFile";

const Unlock = () => {
    const files = useRecoilValue(filesState);
    const flagProcessed = useRecoilValue(flagProcessedState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState);
    const setPassword = useSetRecoilState(passwordState)
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_UNLOCK_API_LINK)
        setButtonText("Unlock")
    })
    const onPasswordChange = (e)=>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <h1>Unlock</h1>
            {
                files.length < 1 &&
                <DropzoneComponent/>
            }
            {
                (files.length>0 && flagProcessed===false)&& 
                <div>
                    <UploadedComponent/>
                    <input type="password" name="password" onChange={onPasswordChange} />
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

export default Unlock;