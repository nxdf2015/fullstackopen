import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from "./componants/Header"
import Content from "./componants/Content"
import Total from "./componants/Total"

const App = () => {
  const course  = {
  name : 'Half Stack application development',
  parts : [{ name : 'Fundamentals of React', exercises: 10 },
           { name : 'Using props to pass data',exercises : 7},
           { name : 'State of a component',exercises: 14 }]
  }
  
 
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      
    
      <Total total= {course.parts.reduce((acc,obj)=> acc + obj.exercises,0) } />
    
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
 
