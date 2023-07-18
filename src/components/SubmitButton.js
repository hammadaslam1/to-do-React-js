import React from 'react';

const SubmitButton = ({handleOption}) => {
    return (
        <div className="submitbtn">
            <button type="button" className='bg-[#f1356d] text-white w-32' onClick={handleOption}>Add option</button>
        </div>
    );
}
 
export default SubmitButton;