import React, { useState } from "react";
import DropzoneComponent from "../Components/DropzoneComponent";
import * as utils from "../utils";

const Esign = () => {
    const dragzoneMsg = "Drag'n'drop pdf, or click to select pdf";
    const [file, setFile] = useState([]);
    const [processedFile, setProcessedFile] = useState([]);
    const handleDrop = acceptedFiles => {
        setFile(acceptedFiles);
    }
    return (
        <div>
            <h1>Esign</h1>
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

export default Esign;