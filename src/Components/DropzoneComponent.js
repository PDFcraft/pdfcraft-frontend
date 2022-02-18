import React from "react";
import Dropzone from 'react-dropzone';
import folderOpen from "../folder_open.svg";
import folder from "../folder.svg";
import { useRecoilValue } from "recoil";
import { acceptedFormatState, pdfMessageState, allowMultipleState } from "../state";

const DropzoneComponent = ({ handleDrop }) => {
    const acceptedFormat = useRecoilValue(acceptedFormatState);
    const setDragzoneMsg = useRecoilValue(pdfMessageState);
    let setAllowMultiple = useRecoilValue(allowMultipleState);
    console.log(setAllowMultiple);
    return (
        <div>
            <Dropzone
                multiple={setAllowMultiple}
                dragzoneMsg={setDragzoneMsg}
                onDrop={handleDrop}
                accept={acceptedFormat}
                minSize={1024}
                maxSize={3072000}
            >
                {({
                    getRootProps,
                    getInputProps,
                    isDragActive,
                    isDragAccept,
                    isDragReject,
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
                            <p>{setDragzoneMsg}</p>
                        </div>
                    );
                }}
            </Dropzone>
        </div>
    );
};
export default DropzoneComponent;
