import React, { useState } from "react";
import DragItem from "./DragItem";
import DropzoneComponent from "./DropzoneComponent";
import * as func from "./func";

const Merge = () => {
    const clickHandler = (files, sortedFiles, setMergedFile, e) => {
        func.UploadFiles(files, sortedFiles, setMergedFile)
        e.preventDefault();
        // do someting...
    }
    const [sortedFiles, setSortedFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const [mergedFile, setMergedFile] = useState();
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Merge</h1>
            <DropzoneComponent files={files} handleDrop={handleDrop}></DropzoneComponent>
            <DragItem files={files} setSortedFiles={setSortedFiles} />
            <button onClick={(e) => { clickHandler(files, sortedFiles, setMergedFile, e) }}>
                Post
            </button>
            <button onClick={console.log(mergedFile)}>
                Download
            </button>
            {/* <a href='' download>Click to download</a> */}
        </div>
    );

};

export default Merge;