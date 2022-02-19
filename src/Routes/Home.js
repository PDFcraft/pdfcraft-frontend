import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useResetRecoilState} from "recoil";
import { acceptedFormatState, allowMultipleState,filesState, pdfMessageState } from "../state";

const Home = () => {
    const resetFiles = useResetRecoilState(filesState);
    const resetAllowMultiple = useResetRecoilState(allowMultipleState)
    const resetPdfMessage = useResetRecoilState(pdfMessageState)
    const resetAcceptedFormat = useResetRecoilState(acceptedFormatState)
    useEffect(() => {
        resetFiles()
        resetAllowMultiple()
        resetPdfMessage()
        resetAcceptedFormat()

    })
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