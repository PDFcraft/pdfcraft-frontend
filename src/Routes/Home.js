import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { proccesedFileState, targetUrlState } from "../state";

const Home = () => {
    const [processedFile, setProcessededFile] = useRecoilState(proccesedFileState);
    const [targetUrl, setTargetUrl] = useRecoilState(targetUrlState);
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
        </div>
    );
};

export default Home;