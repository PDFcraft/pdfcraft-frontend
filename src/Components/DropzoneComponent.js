import React from "react";
import Dropzone from 'react-dropzone';
import folderOpen from "../folder_open.svg";
import folder from "../folder.svg";
import { useRecoilValue } from "recoil";
import { acceptedFormatState } from "../state";

const DropzoneComponent = ({ dragzoneMsg, allowMultiple, handleDrop }) => {
    const acceptedFormat = useRecoilValue(acceptedFormatState);
    console.log(acceptedFormat)
    return (
        <div>
            <Dropzone
                multiple={allowMultiple ? true : false}
                onDrop={handleDrop}
                accept={acceptedFormat} // recoil 적용해주세요 image/* 인경우 있음
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
    );
};
export default DropzoneComponent;
