import React, { useEffect } from "react";
import {useRecoilValue, useSetRecoilState } from "recoil";
import DropzoneComponent from "../Components/DropzoneComponent";
import { buttonTextState, filesState, proccesedFileState, targetUrlState} from "../state";
import UploadButton from "../Components/UploadButton"
import DownloadButton from "../Components/DownloadButton"

const Rotate = () => {
    const files = useRecoilValue(filesState);
    const processedFile = useRecoilValue(proccesedFileState);
    const setTargetUrl = useSetRecoilState(targetUrlState);
    const setButtonText = useSetRecoilState(buttonTextState)
    useEffect(() => {
        setTargetUrl(process.env.REACT_APP_ROTATE_API_LINK)
        setButtonText("Rotate")
    })
    return (
        <div>
            <h1>Rotate</h1>
            {
                files.length < 1 &&
                <DropzoneComponent/>
            }
            <UploadButton />

            {
                processedFile.length > 0 &&
                <DownloadButton />
            }

        </div>
    );

};

export default Rotate;