import React, { useState } from "react";
import Dropzone from 'react-dropzone';
import GlobalStyle from "./GloblaStyles";

const DropzoneComponent = () => {
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles => {
        setFileNames(acceptedFiles.map(file => file.name));
        console.log(acceptedFiles);
    }

    return (
        <>
            <GlobalStyle />
            <div>
                <Dropzone onDrop={handleDrop} accept="application/pdf">
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </section>
                    )}
                </Dropzone>

                <div>
                    <strong>Files:</strong>
                    {fileNames}
                </div>
            </div>
        </>
    );
};
export default DropzoneComponent;
