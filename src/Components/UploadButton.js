import React from "react";
import Axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { acceptedFormatState, buttonTextState, filesState, passwordState, proccesedFileState, retypePasswordState, targetUrlState, userDefinedOrderState } from '../state';

const UploadButton = () => {
    const files = useRecoilValue(filesState)
    const userDefinedOrder = useRecoilValue(userDefinedOrderState)
    const setProcessedFile = useSetRecoilState(proccesedFileState)
    const targetUrl = useRecoilValue(targetUrlState)
    const buttonText = useRecoilValue(buttonTextState)
    const acceptedFormat = useRecoilValue(acceptedFormatState)
    const password = useRecoilValue(passwordState)
    const retypePassword = useRecoilValue(retypePasswordState)
    const postFiles = () => {
        console.log(files)
        const formData = new FormData();
        // 추가하는 코드는 이 아래부터
        if(buttonText==="Protect"){
            formData.append("options",password)
        }
        if (userDefinedOrder.length>1){
            for (var i in userDefinedOrder) {
                for (var j in files) {
                    if (files[j].name === Object.values(userDefinedOrder[i])[1]) {
                        console.log(files[j])
                        formData.append(acceptedFormat==="application/pdf"?'files':'imgs', files[j]);
                    }
                }
            }
        }else{
            console.log(acceptedFormat)
            formData.append(acceptedFormat==="application/pdf"?'files':'imgs', files[0]);
        }
        Axios.post(targetUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((resp) => {
            if (resp.status === 200) {
                setProcessedFile(Object.entries(resp.data.FileName)[0])
                console.log(Object.entries(resp.data.FileName)[0])
            }
        });
    }
    return (
        <div>
            {
                buttonText==="Protect" &&
                <div>
                    <button onClick={postFiles} disabled={(password!==retypePassword)||(password==="")}>
                        {buttonText}
                    </button>
                </div>
            }
             {
                buttonText==="Unlock" &&
                <div>
                    <button onClick={postFiles} disabled={password===""}>
                        {buttonText}
                    </button>
                </div>
            }
            {
                ((buttonText!=="Protect")&&(buttonText!=="Unlock"))&&
                <div>
                    <button onClick={postFiles}>
                        {buttonText}
                    </button>
                </div>
            }
           
        </div>
        
    );
};
export default UploadButton;
