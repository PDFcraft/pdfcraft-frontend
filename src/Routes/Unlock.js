import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { buttonTextState, filesState, proccesedFileState, targetUrlState, pdfMessageState } from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"

const Unlock = () => {
    const [files, setFiles] = useRecoilState(filesState);
    const processedFile = useRecoilValue(proccesedFileState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState);
    const setDragzoneMsg = useSetRecoilState(pdfMessageState);
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_UNLOCK_API_LINK)
        setButtonText("Unlock")
        setDragzoneMsg("Drag'n'drop pdf, or click to select pdf")
    })
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Unlock</h1>
            {
                files.length < 1 &&
                <DropzoneComponent allowMultiple={false} handleDrop={handleDrop}></DropzoneComponent>
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

export default Unlock;