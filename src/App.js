// import {Components} from 'react'
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import CreateQuiz from './CreateQuiz';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import Todo from './Apps/TodoApp';

function App() {
  return (
    <Todo/>
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <div className='content'>
    //       <Routes>
    //         <Route exact path="/" element={<Home />}>
    //         </Route>
    //         <Route path="/create" element={<CreateQuiz />} >
    //         </Route>
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;