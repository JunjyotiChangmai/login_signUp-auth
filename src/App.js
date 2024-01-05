import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useEffect, useState } from 'react';
import { auth } from './Firebase';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setUserName(user.displayName);
      }
      else setUserName("");
      // console.log(user);
    });
  },[]);

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home name = {userName} />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
