import React from "react";
import { useRecoilValue} from 'recoil';
import { processedFileState } from '../state';
import pdfMark from "../pdf_mark.svg";

const ProcessedComponent = () => {
    const processedFile = useRecoilValue(processedFileState);
    return (
        <div>
            <div className="processed-icon">
                <img src={pdfMark} alt="pdf-file" /> 
                <span className="drag-box-text">{processedFile[0]}</span>
            </div>
        </div>
    );
};
export default ProcessedComponent;
