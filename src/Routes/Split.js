import React, { useState } from "react";
import DropzoneComponent from "../Components/DropzoneComponent";
import * as utils from "../utils";

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
            {
                file.length < 1 &&
                <DropzoneComponent dragzoneMsg={dragzoneMsg} allowMultiple={false} handleDrop={handleDrop}></DropzoneComponent>
            }

            {
                file.length > 0 &&
                <button onClick={(e) => { utils.postFileHandler(file, setProcessedFile, e) }}>
                    Post
                </button>
            }
            {
                processedFile.length > 0 &&
                <button onClick={(e) => { utils.getFileHandler(processedFile[1], processedFile[0], e) }}>
                    DOWNLOAD
                </button>

            }
        </div>
    );

};

export default Split;
