import React, { useState, useEffect } from "react";
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
    useEffect(() => {
        console.log(files)
        console.log(sortedFiles)
        if (typeof sortedFiles[0] !== 'undefined') {
            console.log(Object.values(sortedFiles[0])[1])
        }
    }, [sortedFiles])
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