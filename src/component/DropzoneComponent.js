import React from "react";
import Dropzone from 'react-dropzone';
import GlobalStyle from "./GloblaStyles";

const DropzoneComponent = ({ dragzoneMsg, allowMultiple, handleDrop }) => {
    return (
        <>
            <GlobalStyle />
            <div>
                <Dropzone
                    multiple={allowMultiple ? true : false}
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
                                <p>{dragzoneMsg}</p>
                            </div>
                        );
                    }}
                </Dropzone>
            </div>
        </>
    );
};
export default DropzoneComponent;
