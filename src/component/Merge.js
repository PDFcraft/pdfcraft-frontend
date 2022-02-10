import React, { useState } from "react";
import DragItem from "./DragItem";
import DropzoneComponent from "./DropzoneComponent";
import * as func from "./func";

const Merge = () => {
    const dragzoneMsg = "Drag'n'drop pdfs, or click to select pdfs";
    const [sortedFiles, setSortedFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const [mergedFile, setMergedFile] = useState([]);
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Merge</h1>
            <DropzoneComponent files={files} dragzoneMsg={dragzoneMsg} allowMultiple={true} handleDrop={handleDrop}></DropzoneComponent>
            {
                files.length > 0 &&
                <DragItem files={files} setSortedFiles={setSortedFiles} />

            }
            {
                files.length > 0 &&
                <button onClick={(e) => { func.postHandler(files, sortedFiles, setMergedFile, e) }}>
                    Post
                </button>
            }


            {
                mergedFile.length > 0 &&
                <button onClick={(e) => { func.getHandler(mergedFile[1], mergedFile[0], e) }}>
                    DOWNLOAD
                </button>

            }


            {/* <a href='' download>Click to download</a> */}
        </div>
    );

};

export default Merge;