import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { buttonTextState, proccesedFileState, targetUrlState,acceptedFormatState } from "../state";

const Home = () => {
    const [processedFile, setProcessededFile] = useRecoilState(proccesedFileState);
    const [targetUrl, setTargetUrl] = useRecoilState(targetUrlState);
    const [buttonText, setButtonText] = useRecoilState(buttonTextState)
    const [acceptedFormat,setAcceptedFormat] = useRecoilState(acceptedFormatState)
    return (
        <div>
            <h1>HOME</h1>
            <Link to="/merge">
                <button>
                    MERGE
                </button>
            </Link>
            <Link to="/split">
                <button>
                    SPLIT
                </button>
            </Link>
            <Link to="/unlock">
                <button>
                    UNLOCK
                </button>
            </Link>
            <Link to="/esign">
                <button>
                    ESIGN
                </button>
            </Link>
            <Link to="/topdf">
                <button>
                    TOPDF
                </button>
            </Link>
            <Link to="/tojpg">
                <button>
                    TOJPG
                </button>
            </Link>
            <Link to="/rotate">
                <button>
                    ROTATE
                </button>
            </Link>
            <Link to="/protect">
                <button>
                    PROTECT
                </button>
            </Link>
        </div>
    );
};

export default Home;