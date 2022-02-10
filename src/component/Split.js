import React, { useState } from "react";
import DropzoneComponent from "./DropzoneComponent";
import * as func from "./func";

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
        </div>
    );

};

export default Merge;