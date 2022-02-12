import React from "react";
import Axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filesState, proccesedFileState, targetUrlState, userDefinedOrderState } from '../state';

const UploadButton = () => {
    const files = useRecoilValue(filesState)
    const userDefinedOrder = useRecoilValue(userDefinedOrderState)
    const setProcessedFile = useSetRecoilState(proccesedFileState)
    const targetUrl = useRecoilValue(targetUrlState)
    const postFiles = () => {
        const formData = new FormData();
        for (var i in userDefinedOrder) {
            for (var j in files) {
                if (files[j].name === Object.values(userDefinedOrder[i])[1]) {
                    console.log(files[j])
                    formData.append('files', files[j]);
                }
            }
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
    const postFile = () => {
        const formData = new FormData();
        console.log(files[0])
        formData.append('file', files[0])
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
        <button onClick={files.length > 1 ? postFiles : postFile}>
            Post
        </button>
    );
};
export default UploadButton;
