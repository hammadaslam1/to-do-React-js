import { useState } from "react";
import SubmitButton from "./components/SubmitButton";

const CreateQuiz = () => {
    const [quest, setQuest] = useState('')
    const [opt, setOptions] = useState([''])
    const [answer, setAnswer] = useState('')
console.log(quest);
console.log(answer);

    const addOption = (e) => {
        const newOption = e.target.value;
        setOptions([...opt, newOption]);
        console.log(opt);

    }

    

    const handleOption = (e) => {
        const element = `
        <input type="text" value='${opt}' onChange='${addOption}' required/>
        `
        document.getElementById('options').innerHTML += element
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const question = {quest, opt, answer}
    }

    return (
        <div className="quiz">
            <div className="create-quiz">
                <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="text-[#f1356d] font-semibold">Create Quiz</legend>
                    <label htmlFor="question" className="question"></label>
                    <textarea name="" id="question" className="" type="text" rows="5" onChange={(e) => setQuest(e.target.value)} required/>
                    {/* <label htmlFor="question" className="option"></label> */}
                    <label htmlFor="" className="option"></label>
                    <div className="options flex justify-evenly" id="options">
                        <input name="" id="" className="" type="text" onChange={addOption} required/>
                    <button className="bg-[#f1356d] text-white w-[fit-content] self-center">Submit</button>
                    
                    </div>
                    <SubmitButton handleOption={handleOption}/>
                    <label htmlFor="ans" className="ans"></label>
                    <div className="answer">
                        <input name="" id="ans" className="" type="text" value={answer} required onChange={(e) => setAnswer(e.target.value)} />
                    </div>
                    <button className="bg-[#f1356d] text-white w-[fit-content] self-center">Submit Question</button>
                    
                </fieldset>
                </form>
            </div>
        </div>
    );
}
 
export default CreateQuiz;