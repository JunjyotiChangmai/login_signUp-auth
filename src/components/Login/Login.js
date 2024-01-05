import React, { useState } from 'react';
import styles from './Login.module.css';
import InputControl from '../InputControl/InputControl';
import { Link , useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const navigate = useNavigate();

  const [errorMs, setErrorMs] = useState("");

  const handelSubmit = () => {
    if (!values.email || !values.pass) {
      setErrorMs("Fill all details");
    }
    setErrorMs("");
    console.log(values);

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerbox}>
          <h1 className={styles.heading}>Login</h1>
          <InputControl label="Email" placeholder="Enter email address" onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))} />
          <InputControl label="Password" placeholder="Enter Password" type="password" onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))} />



          <div className={styles.footer}>
            <b>{errorMs}</b>
            <button onClick={handelSubmit}>Login</button>
            <p>
              Don't have an account?{" "}
              <span>
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
