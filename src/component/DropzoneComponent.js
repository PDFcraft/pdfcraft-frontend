import React from "react";
import Dropzone from 'react-dropzone';
import GlobalStyle from "./GloblaStyles";

const DropzoneComponent = ({ fileNames, handleDrop }) => {
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
