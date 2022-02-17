import React, { useEffect } from "react";
import DragItem from "../Components/DragItem";
import DropzoneComponent from "../Components/DropzoneComponent";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { filesState, proccesedFileState, targetUrlState, buttonTextState, pdfMessageState } from "../state";
import DownloadButton from "../Components/DownloadButton";
import UploadButton from "../Components/UploadButton";

const Merge = () => {
    const [files, setFiles] = useRecoilState(filesState);
    const processedFile = useRecoilValue(proccesedFileState);
    const setButtonText = useSetRecoilState(buttonTextState)
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setDragzoneMsg = useSetRecoilState(pdfMessageState);
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_MERGE_API_LINK)
        setButtonText("Merge")
        setDragzoneMsg("Drag'n'drop pdfs, or click to select pdfs")
    })
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Merge</h1>
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

export default Merge;