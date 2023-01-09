import React from 'react';
import './courseGoaLitem.css'



const CourseGoaLitem = (props) => {


    const deleteHandler = () => {
     
    props.onDelete(props.id); 
   
};

    return(
       <li id ="goal-item" onClick={deleteHandler}>
       
        {props.children}
       
       </li>
    )
}
export default CourseGoaLitem ;