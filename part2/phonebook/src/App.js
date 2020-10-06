import React, { useEffect, useState } from "react";
import axios from "axios"
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

 

const App = () => {
  const [persons, setPersons] = useState([]);

  const [filter, setFilter] = useState("");
  useEffect(()=>{
    axios.get("http://localhost:3001/persons")
    .then(({data})=> setPersons(data))
    
  },[] )

  const handlerNewPerson = (person) => {
    if (
      persons
        .map((person) => person.name.toLowerCase())
        .includes(person.name.toLowerCase())
    ) {
      alert(`${person.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(person));
    }
  };

  const handleFilter = (event) => {
    const filterName = event.target.value;
    setFilter(filterName);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handlerFilter={handleFilter} />
      <h3>add a new</h3>
      <PersonForm addNewPerson={handlerNewPerson} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App
