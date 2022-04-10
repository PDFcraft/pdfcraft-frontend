import React from "react";
import { useRecoilValue} from 'recoil';
import { processedFileState, acceptedFormatState } from '../state';
import pdfMark from "../svg/pdfmark.svg";
import imgMark from "../svg/imgmark.svg";

const ProcessedComponent = () => {
    const processedFile = useRecoilValue(processedFileState);
    const acceptedFormat = useRecoilValue(acceptedFormatState);
    return (
        <div className="processed-box">
            <div className="processed-wrap">
                <div className="processed-contents">
                    <div className="processed-icon">
                    {acceptedFormat === "application/pdf" 
                    ? <img src={pdfMark} alt="pdf-file" /> : <img src={imgMark} alt="img-file" />}
                    </div>
                    <span className="processed-text">{processedFile[0]}</span>
                </div>
            </div>
        </div>
    );
};
export default ProcessedComponent;
