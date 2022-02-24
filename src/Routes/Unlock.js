import React, { useEffect } from "react";
import {useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { buttonTextState, filesState, proccesedFileState, targetUrlState,passwordState} from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"

const Unlock = () => {
    const files = useRecoilValue(filesState);
    const processedFile = useRecoilValue(proccesedFileState);
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
                files.length>0 && 
                <div>
                    <input type="password" name="password" onChange={onPasswordChange} />
                </div>
            }
            <UploadButton />

            {
                processedFile.length > 0 &&
                <DownloadButton />
            }

        </div>
    );

};

export default Unlock;