import React, { useEffect } from "react";
import Homemain from "../Components/Homemain";
import { useResetRecoilState} from "recoil";
import { acceptedFormatState, allowMultipleState,filesState, pdfMessageState,passwordState, processedFileState, flagProcessedState } from "../state";

const Homebackground = () => {
    const resetFiles = useResetRecoilState(filesState);
    const resetAllowMultiple = useResetRecoilState(allowMultipleState)
    const resetPdfMessage = useResetRecoilState(pdfMessageState)
    const resetAcceptedFormat = useResetRecoilState(acceptedFormatState)
    const resetPassword = useResetRecoilState(passwordState)
    const resetProcessedFile = useResetRecoilState(processedFileState)
    const resetFlagProcessed = useResetRecoilState(flagProcessedState)
    useEffect(() => {
        resetFiles()
        resetAllowMultiple()
        resetPdfMessage()
        resetAcceptedFormat()
        resetPassword()
        resetProcessedFile()
        resetFlagProcessed()
    })
    return (
            <section className="home-body">
            <section className="home-top">
            <div className="home-top-title">PDFcraft</div>
            <div className="home-top-dotss">
                <div className="home-top-dots">
                    <div className="home-top-dot"></div>
                    <div className="home-top-dot"></div>
                </div>
            </div>
            </section>
            <Homemain />
            </section>
    );
};

export default Homebackground;