import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from "./componants/Header"
import Content from "./componants/Content"
import Total from "./componants/Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content parts={[{id :1 , part:part1,exercise : exercises1},
      {id :2 , part:part2,exercise : exercises2},
        {id :3 , part:part3,exercise : exercises3}]}/>
    
      <Total total= {exercises1 + exercises2 + exercises3} />
    
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
 
