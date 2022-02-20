import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useResetRecoilState} from "recoil";
import { acceptedFormatState, allowMultipleState,filesState, pdfMessageState,passwordState } from "../state";
import folderOpen from "../folder_open.svg";
import folder from "../folder.svg";

const Home = () => {
    const resetFiles = useResetRecoilState(filesState);
    const resetAllowMultiple = useResetRecoilState(allowMultipleState)
    const resetPdfMessage = useResetRecoilState(pdfMessageState)
    const resetAcceptedFormat = useResetRecoilState(acceptedFormatState)
    const resetPassword = useResetRecoilState(passwordState)
    useEffect(() => {
        resetFiles()
        resetAllowMultiple()
        resetPdfMessage()
        resetAcceptedFormat()
        resetPassword()

    })
    return (
        <div className="wrap">
            <h1>HOME</h1>
            <section className="grid">
            <Link to="/merge">
                <div className="box merge-box">
                    <img src={folder} width="50" alt="pdf-file" />
                    <button className="box-btn">
                        MERGE
                    </button>
                </div>
            </Link>
            <Link to="/split">
                <div className="box split-box">
                    <img src={folder} width="50" alt="pdf-file" />
                    <button className="box-btn">
                        SPLIT
                    </button>
                </div>
            </Link>
            <Link to="/unlock">
                <div className="box unlock-box">
                    <img src={folder} width="50" alt="pdf-file" />
                    <button className="box-btn">
                        UNLOCK
                    </button>
                </div>
            </Link>
            <Link to="/watermark">
                <div className="box watermark-box">
                    <img src={folder} width="50" alt="pdf-file" />
                    <button className="box-btn">
                        WATERMARK
                    </button>
                </div>
            </Link>
            <Link to="/topdf">
                <div className="box topdf-box">
                    <img src={folder} width="50" alt="pdf-file" />
                    <button className="box-btn">
                        TOPDF
                    </button>
                </div>
            </Link>
            <Link to="/tojpg">
                <div className="box tojpg-box">
                    <img src={folder} width="50" alt="pdf-file" />
                    <button className="box-btn">
                        TOJPG
                    </button>
                </div>
            </Link>
            <Link to="/rotate">
                <div className="box rotate-box">
                    <img src={folder} width="50" alt="pdf-file" />
                    <button className="box-btn">
                        ROTATE
                    </button>
                </div>
            </Link>
            <Link to="/protect">
                <div className="box protect-box">
                    <img src={folder} width="50" alt="pdf-file" />
                    <button className="box-btn">
                        PROTECT
                    </button>
                </div>
            </Link>
            </section>
        </div>
    );
};

export default Home;