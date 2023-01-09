import Button from '../../UI/Button';
import './courseInput.css'
import React , { useState } from 'react';
const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);
  
const goalInputChangeHandler = event => {
 
    if(event.target.value.trim().length > 0){
        setIsValid(true);
    }
    setEnteredValue(event.target.value);
  
};

const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
        setIsValid(false);
        return;
    }
    props.onAddGoal(enteredValue);


};

    return (
   <form onSubmit={formSubmitHandler}>
     <div className={`form-control ${!isValid ? "invalid" : ""}`}>
     <label>Course Goal</label>
     <input type="text" onChange={goalInputChangeHandler} />
     </div>
     <Button type="sumbit">AddGoal</Button>
   </form>
   );
};

export default CourseInput ;