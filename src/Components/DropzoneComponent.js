import React from "react";
import Dropzone from 'react-dropzone';
import folderopen from "../svg/folderopen.svg";
import folderclose from "../svg/folderclose.svg";
import { useRecoilValue,useSetRecoilState } from "recoil";
import { acceptedFormatState, pdfMessageState, allowMultipleState,filesState } from "../state";

const DropzoneComponent = () => {
    const acceptedFormat = useRecoilValue(acceptedFormatState);
    const setDragzoneMsg = useRecoilValue(pdfMessageState);
    const AllowMultiple = useRecoilValue(allowMultipleState);
    const setFiles = useSetRecoilState(filesState);
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div className="dropzone-box">
            <Dropzone
                multiple={AllowMultiple}
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
                            <div className="dropzone-img">
                                {isDragActive ? <img src={folderopen} width="20" alt="pdf-file" /> : <img src={folderclose} width="20" alt="pdf-file" />}
                            </div>
                            <p className="dropzone-text">{setDragzoneMsg}</p>
                        </div>
                    );
                }}
            </Dropzone>
        </div>
    );
};
export default DropzoneComponent;
