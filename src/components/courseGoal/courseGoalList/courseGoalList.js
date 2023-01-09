import React from 'react';
import './courseGoalList.css'
import  CourseGoaLitem  from '../courseGoaLitem/courseGoaLitem'
const CourseGoalist = (props) => {
    

    
    return (
<ul  className="goal-list" >
    {props.items.map((goal) => (
     <CourseGoaLitem
     key = {goal.id}
     id = {goal.id}
     onDelete = {props.onDeleteItem}
   
     >
 {goal.text}
</CourseGoaLitem>

    )) }
        
    
        </ul> );
};
export default CourseGoalist ;