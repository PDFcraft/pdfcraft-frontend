import React, { useEffect } from "react";
import {useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { buttonTextState, filesState, flagProcessedState, retypePasswordState, targetUrlState,passwordState} from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"
import ProcessedComponent from "../Components/ProcessedFile";
import UploadedComponent from "../Components/UploadedFile";

const Protect = () => {
    const files = useRecoilValue(filesState);
    const flagProcessed = useRecoilValue(flagProcessedState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState);
    const setRetypePassword = useSetRecoilState(retypePasswordState)
    const setPassword = useSetRecoilState(passwordState)
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_PROTECT_API_LINK)
        setButtonText("Protect")
        setPassword("")
    })

    const onPasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const onRetypePasswordChange =(e)=>{
        setRetypePassword(e.target.value)
    }
    return (
        <div>
            <h1>Protect</h1>
            {
                files.length < 1 &&
                <DropzoneComponent/>
            }
            {
                (files.length>0 && flagProcessed===false)&& 
                <div>
                    <UploadedComponent/>
                    <input type="password" name="password" onChange={onPasswordChange} />
                    <input type="password" name="re-type-password" onChange={onRetypePasswordChange} />
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

export default Protect;