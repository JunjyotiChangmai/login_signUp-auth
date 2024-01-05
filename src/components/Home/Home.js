import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    function userActive()
    {
        if (props) {
            return <h2>Welcome - {props.name}</h2>
        }
        else
        return <h2>login please</h2>
    }

    return (
        <>
            <div>
                <div>
                    <h1>
                        <Link to="/login">Login</Link>
                    </h1>
                    <br />
                    <h1>
                        <Link to="/signup">Sign up</Link>
                    </h1>
                </div>

                <br />
                <br />
                <br />
                
                <div>{userActive()}</div>
            </div>
        </>
    );
}

export default Home;
