import React, { useState } from "react";
import DragItem from "./DragItem";
import DropzoneComponent from "./DropzoneComponent";
import * as UploadFiles from "./UploadFiles";

const Merge = () => {
    const clickHandler = (files, sortedFiles, e) => {
        UploadFiles.UploadFiles(files, sortedFiles)
        e.preventDefault();
        // do someting...
    }
    const [sortedFiles, setSortedFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Merge</h1>
            <DropzoneComponent files={files} handleDrop={handleDrop}></DropzoneComponent>
            <DragItem files={files} setSortedFiles={setSortedFiles} />
            <button onClick={(e) => { clickHandler(files, sortedFiles, e) }}>
                Post
            </button>
        </div>
    );

};

export default Merge;