import React from "react";
import Axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { acceptedFormatState, buttonTextState, filesState, proccesedFileState, targetUrlState, userDefinedOrderState } from '../state';

const UploadButton = () => {
    const files = useRecoilValue(filesState)
    const userDefinedOrder = useRecoilValue(userDefinedOrderState)
    const setProcessedFile = useSetRecoilState(proccesedFileState)
    const targetUrl = useRecoilValue(targetUrlState)
    const buttonText = useRecoilValue(buttonTextState)
    const acceptedFormat = useRecoilValue(acceptedFormatState)
    // 여깁니다~~
    const postFiles = () => {
        console.log(files)
        const formData = new FormData();
        // 추가하는 코드는 이 아래부터
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
        <button onClick={postFiles}>
            {buttonText}
        </button>
    );
};
export default UploadButton;
