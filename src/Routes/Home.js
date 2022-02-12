import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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