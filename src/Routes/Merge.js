import React, { useEffect } from "react";
import DragItem from "../Components/DragItem";
import DropzoneComponent from "../Components/DropzoneComponent";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { filesState, proccesedFileState, userDefinedOrderState, targetUrlState, buttonTextState } from "../state";
import DownloadButton from "../Components/DownloadButton";
import UploadButton from "../Components/UploadButton";

const Merge = () => {
    const dragzoneMsg = "Drag'n'drop pdfs, or click to select pdfs";
    const [userDefinedOrder, setUserDefinedOrder] = useRecoilState(userDefinedOrderState);
    const [files, setFiles] = useRecoilState(filesState);
    const processedFile = useRecoilValue(proccesedFileState);
    const setButtonText = useSetRecoilState(buttonTextState)
    const setTargetUrl = useSetRecoilState(targetUrlState);
    useEffect(() => {
        setTargetUrl("http://localhost:8080/api/merge")
        setButtonText("Merge")
    })
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Merge</h1>
            {
                files.length < 1 &&
                <DropzoneComponent dragzoneMsg={dragzoneMsg} allowMultiple={true} handleDrop={handleDrop}></DropzoneComponent>

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