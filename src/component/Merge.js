import React, { useState } from "react";
import DragItem from "./DragItem";
import DropzoneComponent from "./DropzoneComponent";

const Merge = () => {

    const [files, setFiles] = useState([]);
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Merge</h1>
            <DropzoneComponent files={files} handleDrop={handleDrop}></DropzoneComponent>
            <DragItem files={files} />
        </div>
    );
};

export default Merge;