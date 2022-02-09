import React from "react";
import Dropzone from 'react-dropzone';
import GlobalStyle from "./GloblaStyles";

const DropzoneComponent = ({ fileNames, handleDrop }) => {
    return (
        <>
            <GlobalStyle />
            <div>
                <Dropzone
                    onDrop={handleDrop}
                    accept="application/pdf"
                    minSize={1024}
                    maxSize={3072000}
                >
                    {({
                        getRootProps,
                        getInputProps,
                        isDragActive,
                        isDragAccept,
                        isDragReject
                    }) => {
                        const additionalClass = isDragAccept
                            ? "accept"
                            : isDragReject
                                ? "reject"
                                : "";

                        return (
                            <div
                                {...getRootProps({
                                    className: `dropzone ${additionalClass}`
                                })}
                            >
                                <input {...getInputProps()} />
                                <span>{isDragActive ? "📂" : "📁"}</span>
                                <p>Drag'n'drop pdfs, or click to select pdfs</p>
                            </div>
                        );
                    }}
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
