import React, { useState, useEffect } from "react";
import DragItem from "./DragItem";
import DropzoneComponent from "./DropzoneComponent";

const Merge = () => {
    const [sortedFiles, setSortedFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    useEffect(() => {
        console.log(files)
        console.log(sortedFiles)
    }, [sortedFiles])
    return (
        <div>
            <h1>Merge</h1>
            <DropzoneComponent files={files} handleDrop={handleDrop}></DropzoneComponent>
            <DragItem files={files} setSortedFiles={setSortedFiles} />
            <button>
                Post
            </button>
        </div>
    );

};

export default Merge;