import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Todo from "..";

const Authentication = () => {
    
  return (
    <Router>
        
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Todo />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Authentication;
