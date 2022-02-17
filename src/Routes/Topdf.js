import React, { useEffect } from "react";
import DragItem from "../Components/DragItem";
import DropzoneComponent from "../Components/DropzoneComponent";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { filesState, proccesedFileState, targetUrlState, buttonTextState, acceptedFormatState, pdfMessageState } from "../state";
import DownloadButton from "../Components/DownloadButton";
import UploadButton from "../Components/UploadButton";


const Topdf = () => {
    const [files, setFiles] = useRecoilState(filesState);
    const processedFile = useRecoilValue(proccesedFileState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState);
    const setAcceptedFormat = useSetRecoilState(acceptedFormatState);
    const setDragzoneMsg = useSetRecoilState(pdfMessageState);
    useEffect(() => {
        setAcceptedFormat("image/*")
        setTargetUrl(process.env.REACT_APP_TOPDF_API_LINK)
        setButtonText("Topdf")
        setDragzoneMsg("Drag'n'drop imgs, or click to select imgs")
    })
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Topdf</h1>
            {
                files.length < 1 &&
                <DropzoneComponent allowMultiple={true} handleDrop={handleDrop}></DropzoneComponent>
            }
            {
                files.length > 0 &&
                <DragItem />

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

export default Topdf;