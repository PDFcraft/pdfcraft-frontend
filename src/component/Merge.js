import React, { useState } from "react";
import DragItem from "./DragItem";
import DropzoneComponent from "./DropzoneComponent";

const Merge = () => {
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles => {
        setFileNames(acceptedFiles.map(file => file.name));
        console.log(acceptedFiles);
    }
    return (
        <div>
            <h1>Merge</h1>
            <DropzoneComponent fileNames={fileNames} handleDrop={handleDrop}></DropzoneComponent>
            <DragItem fileNames={fileNames} />
        </div>
    );
};

export default Merge;