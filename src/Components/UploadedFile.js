import React from "react";
import { useRecoilValue} from 'recoil';
import { filesState } from '../state';
import pdfMark from "../svg/pdfmark.svg";

const UploadedComponent = () => {
    const files = useRecoilValue(filesState);
    let uploadedFile ="";
    if (files.length>0 ){
        uploadedFile=files[0].name
    }
    return (
        <div className="uploaded-box">
        <div className="uploaded-wrap">
            <div className="uploaded-contents">
                <img className="uploaded-icon" src={pdfMark} alt="pdf-file" /> 
                <span className="uploaded-text">{uploadedFile}</span>
            </div>
        </div>
        </div>
    );
};
export default UploadedComponent;
