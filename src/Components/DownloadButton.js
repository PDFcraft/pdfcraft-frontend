import React from "react";
import Axios from 'axios';
import { useRecoilValue } from "recoil";
import { processedFileState,buttonTextState } from "../state";

const DownloadButton = () => {
    const buttonText = useRecoilValue(buttonTextState)
    const processedFile = useRecoilValue(processedFileState);
    let file_url="";
    if(processedFile.length>0){
        file_url = "http://localhost:8080/api/download=" + processedFile[1].replace(/\.[^/.]+$/, "");
    }
    const processedFileName = processedFile[0]
    const downloadFile = () => {
        Axios({
            url: file_url, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            if(buttonText==="Split"){
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', processedFileName+".zip");
                document.body.appendChild(link);
                link.click();
                
            }else{
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', processedFileName);
                document.body.appendChild(link);
                link.click();
            } 
        });
    }
    return (
        <div className="features-btn">
           <button onClick={downloadFile} disabled={!processedFile.length>0}>
            DOWNLOAD
            </button> 
        </div>
        
    )
}
export default DownloadButton;