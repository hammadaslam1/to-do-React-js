import CreateQuiz from "./CreateQuiz";
import { Link } from "react-router-dom"
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom'
import Dashboard from "./Dashboard";
import MyScores from "./MyScores";

const Home = () => {

    const dashboard = () => {
        <Dashboard />
    }
    
    const myscores = () => {
        <MyScores />
    }

    return (
        <div className="home p-10 w-[600px] mx-auto" id="main-div">
        <div>
            <div className="px-10 py-24 bg-[#f1356d] rounded-xl text-white text-2xl font-semibold">Welcome to The Quiz App</div>
        </div>
        <div className="home-links flex justify-around m-5 border-b">
        <button className="w-44 focus:font-semibold focus:text-[#f1356d] focus:border-2 focus:border-[#f1356d]" onClick={dashboard}>Dashboard</button>
        <button className="w-44 focus:font-semibold focus:text-[#f1356d] focus:border-2 focus:border-[#f1356d]">My Scores</button>
        {/* <button className="w-44 focus:font-semibold focus:text-[#f1356d] focus:border-2 focus:border-[#f1356d]">Create Quiz</button> */}
        </div>
        </div>
    );
}

 
export default Home;