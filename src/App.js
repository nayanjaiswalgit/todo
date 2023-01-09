import CourseInput from './components/courseGoal/courseInput/courseInput';
import CourseGoalList from './components/courseGoal/courseGoalList/courseGoalList';
import React,{useState}  from 'react'; 
import './App.css'
function App() {
  let [courseGoals, setCourseGoals] = useState([
    {text:'Do yoy home work' , id :'g1'},
    {text:'Make a phone call to friend' , id :'g2'},
  ])

  const addGoalHandler = (enteredText) => {
    setCourseGoals (prevGoals=> {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({text: enteredText , id: Math.random()},)
      return updatedGoals ;

    })
  }
  const deleteItemHandler = goalId => {
    console.log("hello");
    setCourseGoals(prevGoals =>{
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
     return updatedGoals ;
    });
    
  };
  let content =  (<p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>);
  
  if(courseGoals.length > 0 ){
    content = (<CourseGoalList items = {courseGoals} onDeleteItem = {deleteItemHandler}/> );
  }
  
  return (
    <div>
      <section id="goal-form">
      <CourseInput onAddGoal={addGoalHandler}/>
      </section>

      <section id="goals">
      {content}
        </section>
    
    </div>
  
  );

  };
export default App;
