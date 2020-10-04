import React ,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Most = ({text,vote}) => (<div>
  <div> {text}  </div>
  <div>has {vote} votes</div>
</div>)

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points ,setPoints] = useState( new Array(anecdotes.length).fill(0))
  const [most,setMost] = useState(-1)
  const handlerNext = () => {
    const numberAnectodes = anecdotes.length
    const idAnectode = Math.floor(Math.random() * numberAnectodes)
    setSelected(idAnectode)
    console.log(points)
  }

  const handlerVote = () => {
     setPoints( () => {
      let  copy = [...points]
       copy[selected] += 1
       return copy
     })
  }



  useEffect(() => {
    if (most < 0){
      setMost(selected)
    }
    else{
      if(points[most] < points[selected]) {
        setMost(selected)
      } 
    }
  },[points])

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{ anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={handlerVote}>vote</button>
      <button onClick={handlerNext}>next anectode</button>
      <h1>Anectode with most votes</h1>
      
      {points[most] > 0 && <Most text={anecdotes[most]} vote={points[most]}/>}
      
      
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>,
  document.getElementById('root')
);


