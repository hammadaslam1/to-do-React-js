import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Error from "./Error";
import { getAuth } from "firebase/auth";
import Todo from "..";
import { useEffect } from "react";

const Authentication = () => {
    // console.log('ashjasbjh');
    const auth = getAuth()
    // useEffect(()=>{

    // }, [auth])
  return (
    <Router>
        
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Todo />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup " element={<Signup />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Authentication;
