import React,{  useState} from "react";

import Filter   from "./components/Filter"
import PersonForm from "./components/PersonForm";

const debug = true 
const App = () => {
    const [ persons, setPersons ] = useState(() => debug ? [
      { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ] : [] ) 
   
    const [ filterName , setFilterName] = useState("")
    
    
    
    const handlerFilter = event => {
      const value = event.target.value
      setFilterName(value)
    }



     

    const handlerNewPerson = person => {
     
       
      if (persons.map(person=>person.name.toLowerCase()).includes(person.name.toLowerCase())){
        alert(`${person.name} is already added to phonebook`)
      }
      else {
        setPersons(persons.concat(person))
      } 
      
    }
    

    const personsToShow = filterName !== "" ? persons.filter(person=>RegExp(filterName,'i').exec(person.name)) : persons
    
    return (

      <div>
        <h2>Phonebook</h2>
       <Filter />
        <h3>add a new</h3>
        <PersonForm addNewPerson={handlerNewPerson} />
        <h3>Numbers</h3>
      <ul>
          {personsToShow.map(person => <li key={person.name}>{person.name}{person.number}</li>)}
      </ul>
      </div>
    )
  }

  export default App