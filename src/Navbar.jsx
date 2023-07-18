import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="font-semibold text-lg">The Quiz App</h1>
            <div className="links">
                <Link to="/" className="focus:font-semibold focus:text-[#f1356d]">Home</Link>
                <Link to="/takequiz" className="focus:font-semibold focus:text-[#f1356d]">Take Quiz</Link>
                <Link to="/create" className="focus:font-semibold focus:text-[#f1356d]">Create Quiz</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;