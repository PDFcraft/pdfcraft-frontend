import React, { useState } from "react";
import DropzoneComponent from "./DropzoneComponent";
import * as func from "./func";

<<<<<<< HEAD
const Split = () => {
    const dragzoneMsg = "Drag'n'drop pdfs, or click to select pdfs";
    const [file, setFile] = useState([]);
    const [processedFile, setProcessedFile] = useState([]);
    const handleDrop = acceptedFiles => {
        setFile(acceptedFiles);
    }
    return (
        <div>
            <h1>Split</h1>
            <DropzoneComponent dragzoneMsg={dragzoneMsg} allowMultiple={false} handleDrop={handleDrop}></DropzoneComponent>
            {
                file.length > 0 &&
                <button onClick={(e) => { func.postFileHandler(file, setProcessedFile, e) }}>
                    Post
                </button>
            }
            {
                processedFile.length > 0 &&
                <button onClick={(e) => { func.getFileHandler(processedFile[1], processedFile[0], e) }}>
                    DOWNLOAD
                </button>

            }
=======
const Merge = () => {
    const dragzoneMsg = "Drag'n'drop pdf, or click to select pdf";
    const [files, setFiles] = useState([]);
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
        console.log(acceptedFiles)
    }
    return (
        <div>
            <h1>Merge</h1>
            <DropzoneComponent files={files} dragzoneMsg={dragzoneMsg} allowMultiple={false} handleDrop={handleDrop}></DropzoneComponent>
>>>>>>> 9b4f98bfc3e7bec8c65eba9ee09e7b5fecebb652
        </div>
    );

};

<<<<<<< HEAD
export default Split;
=======
export default Merge;
>>>>>>> 9b4f98bfc3e7bec8c65eba9ee09e7b5fecebb652
