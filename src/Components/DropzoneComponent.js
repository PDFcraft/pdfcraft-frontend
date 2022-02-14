import React from "react";
import Dropzone from 'react-dropzone';
import GlobalStyle from "../GloblaStyles";
import folderOpen from "../folder_open.svg";
import folder from "../folder.svg";

const DropzoneComponent = ({ dragzoneMsg, allowMultiple, handleDrop }) => {
    return (
        <>
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
                                {isDragActive ? <img src={folderOpen} width="20" alt="pdf-file" /> : <img src={folder} width="20" alt="pdf-file" />}
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
