import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { buttonTextState, filesState, proccesedFileState, targetUrlState, pdfMessageState, allowMultipleState } from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"

const Esign = () => {
    const [files, setFiles] = useRecoilState(filesState);
    const processedFile = useRecoilValue(proccesedFileState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState);
    const setDragzoneMsg = useSetRecoilState(pdfMessageState);
    const setAllowMultiple = useSetRecoilState(allowMultipleState);
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_ESIGN_API_LINK)
        setButtonText("Esign")
        setDragzoneMsg("Drag'n'drop pdf, or click to select pdf")
        setAllowMultiple(false)
    })
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Esign</h1>
            {
                files.length < 1 &&
                <DropzoneComponent handleDrop={handleDrop}></DropzoneComponent>
            }
            {
                files.length > 0 &&
                <UploadButton />
            }

            {
                processedFile.length > 0 &&
                <DownloadButton />
            }

        </div>
    );

};

export default Esign;