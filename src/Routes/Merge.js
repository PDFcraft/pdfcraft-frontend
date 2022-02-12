import React from "react";
import DragItem from "../Components/DragItem";
import DropzoneComponent from "../Components/DropzoneComponent";
import { useRecoilState } from "recoil";
import * as utils from "../utils";

const Merge = () => {
    const dragzoneMsg = "Drag'n'drop pdfs, or click to select pdfs";
    const [sortedFiles, setSortedFiles] = useRecoilState([]);
    const [files, setFiles] = useRecoilState([]);
    const [mergedFile, setMergedFile] = useRecoilState([]);
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }
    return (
        <div>
            <h1>Merge</h1>
            {
                files.length < 1 &&
                <DropzoneComponent dragzoneMsg={dragzoneMsg} allowMultiple={true} handleDrop={handleDrop}></DropzoneComponent>

            }

            {
                files.length > 0 &&
                <DragItem files={files} setSortedFiles={setSortedFiles} />

            }
            {
                files.length > 0 &&
                <button onClick={(e) => { utils.postFilesHandler(files, sortedFiles, setMergedFile, e) }}>
                    Post
                </button>
            }


            {
                mergedFile.length > 0 &&
                <button onClick={(e) => { utils.getFileHandler(mergedFile[1], mergedFile[0], e) }}>
                    DOWNLOAD
                </button>
            }
        </div>
    );

};

export default Merge;