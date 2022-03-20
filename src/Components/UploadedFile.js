import React from "react";
import { useRecoilValue} from 'recoil';
import { filesState } from '../state';
import pdfMark from "../pdf_mark.svg";

const UploadedComponent = () => {
    const files = useRecoilValue(filesState);
    let uploadedFile ="";
    if (files.length>0 ){
        uploadedFile=files[0].name
    }
    return (
        <div>
            <div className="processed-icon">
                <img src={pdfMark} alt="pdf-file" /> 
                <span className="drag-box-text">{uploadedFile}</span>
            </div>
        </div>
    );
};
export default UploadedComponent;
