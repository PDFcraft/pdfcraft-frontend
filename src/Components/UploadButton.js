import React from "react";
import Axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { acceptedFormatState, angleState, buttonTextState, filesState,flagProcessedState, passwordState, processedFileState, retypePasswordState, targetUrlState, userDefinedOrderState } from '../state';

const UploadButton = () => {
    const files = useRecoilValue(filesState)
    const userDefinedOrder = useRecoilValue(userDefinedOrderState)
    const setProcessedFile = useSetRecoilState(processedFileState)
    const targetUrl = useRecoilValue(targetUrlState)
    const buttonText = useRecoilValue(buttonTextState)
    const acceptedFormat = useRecoilValue(acceptedFormatState)
    const password = useRecoilValue(passwordState)
    const angle = useRecoilValue(angleState)
    const retypePassword = useRecoilValue(retypePasswordState)
    const setFlagProcessed = useSetRecoilState(flagProcessedState)
    const postFiles = () => {
        const formData = new FormData();
        
        if(buttonText==="Protect"||buttonText==="Unlock"){
            formData.append("options",password)
        }
        if(buttonText==="Rotate"){
            formData.append("options",angle)
        }
        if (userDefinedOrder.length>1){
            for (var i in userDefinedOrder) {
                for (var j in files) {
                    if (files[j].name === Object.values(userDefinedOrder[i])[1]) {
                        formData.append(acceptedFormat==="application/pdf"?'files':'imgs', files[j]);
                    }
                }
            }
        }else{
            formData.append(acceptedFormat==="application/pdf"?'files':'imgs', files[0]);
        }
        Axios.post(targetUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((resp) => {
            if (resp.status === 200) {
                if(buttonText!=="Split"){
                    setProcessedFile(Object.entries(resp.data.FileName)[0])
                }else{
                    console.log(resp.data)
                    setProcessedFile(Object.entries(resp.data.ProcessedName)[0])
                }
                
            }
        });
        setFlagProcessed(true)
    }
    return (
        <div className="features-btn">
            {
                buttonText==="Protect" &&
                <div className="features-btn__upload">
                    <button onClick={postFiles} disabled={(password!==retypePassword)||(password==="")||!files.length>0}>
                        {buttonText}
                    </button>
                </div>
            }
             {
                buttonText==="Unlock" &&
                <div className="features-btn__upload">
                    <button onClick={postFiles} disabled={password===""||!files.length>0}>
                        {buttonText}
                    </button>
                </div>
            }
            {
                ((buttonText!=="Protect")&&(buttonText!=="Unlock"))&&
                <div className="features-btn__upload">
                    <button onClick={postFiles} disabled={!files.length>0}>
                        {buttonText}
                    </button>
                </div>
            }
           
        </div>
        
    );
};
export default UploadButton;
