import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Statistics = ({good,neutral,bad}) => (<>
<Statistic label="average"  value={ (good- bad )/ (good+neutral+bad)} format=""/>
<Statistic label="positive" value={100 * good / (good + neutral + bad) } format="%"/>
</>)

const Statistic = ({label,value,format}) => <tr><td>{label}{value}{format}</td></tr>

const Button = ({label,updateFeedback}) => <button onClick={() => updateFeedback(label)}>{label}</button>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handlerButton = (label) => {
    switch (label) {
      case "good":
        setGood(good + 1 )
        break;
      case "neutral":
        setNeutral(neutral + 1 )
        break;
      case "bad":
        setBad(bad + 1 )
        break;
      
      default:
        break;
    }
  }
  return (
    <div>
      <h1>give feedback</h1>
     
      <Button label="good" updateFeedback={handlerButton}/>
      <Button label="neutral" updateFeedback={handlerButton}/>
      <Button label="bad" updateFeedback={handlerButton}/>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
            </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>{good === 0 && neutral === 0 && bad === 0 ?<tr><td>No feedback given</td></tr>:<Statistics {...{good,bad,neutral}}/>
      }</tbody>
      </table>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
