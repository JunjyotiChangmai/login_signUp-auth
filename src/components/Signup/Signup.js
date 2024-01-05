import React, { useState } from 'react';
import styles from './Signup.module.css';
import InputControl from '../InputControl/InputControl';
import { Link, useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../../Firebase";



const Signup = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitDissable, setSubmitDissabe] = useState(false);

  const handelSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all details");
      return;
    }
    setErrorMsg("");
    console.log(values);

    setSubmitDissabe(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(userCredential) => {
        setSubmitDissabe(false);
        const user = userCredential.user;
        await updateProfile(user, {displayName: values.name,});
        navigate("/");
      })
      .catch((error) => {
        setSubmitDissabe(false);
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });

  };


  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerbox}>
          <h1 className={styles.heading}>Sign up</h1>
          <InputControl label="Name" placeholder="Enter your name" onChange={(event) =>
            setValues( (prev) => ({...prev, name: event.target.value }))} />
          <InputControl label="Email" placeholder="Enter email address" onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))} />
          <InputControl label="Password" placeholder="Enter Password" type="password" onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))} />


          <div className={styles.footer}>
            <p className={styles.error}>{errorMsg}</p>
            <button onClick={handelSubmission}
            disabled ={submitDissable} >Sign up</button>
            <p>
              Already have an account?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
