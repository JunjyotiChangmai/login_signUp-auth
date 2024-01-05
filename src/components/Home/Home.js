import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

const Home = (props) => {

const userActive = () => {
    const logOut = () => {
        signOut(auth).then(() => {
            console.log("Log-out successful.")
        }).catch((error) => {
            console.log(error)
        });
    }

    return<>
        <h2>Welcome - {props.name}</h2>
        <button onClick={logOut}>log out</button>
    </>
}

const userLogin = () => {
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

            <h2>{props.name ? userActive() : userLogin()}</h2>
        </div>
    </>
);
}

export default Home;
