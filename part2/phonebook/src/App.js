import React, { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import { getAll, create, remove, update } from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [filter, setFilter] = useState("");
  useEffect(() => {
    getAll().then((data) => setPersons(data));
  }, []);

  const handlerNewPerson = (person) => {
    if (
      persons
        .map((person) => person.name.toLowerCase())
        .includes(person.name.toLowerCase())
    ) {
      if (
        window.confirm(
          `${person.name} is already added to phonebook, replace the old number by the new one ?`
        )
      ) {
        const id   = persons.find(p => p.name === person.name).id
        console.log(person)
        update( id, person).then((data) =>{
          
          setPersons(persons.map((p) => (p.id === data.id ? data : p)))}
        );
      }
    } else {
      person = { ...person, id: persons.length + 1 };

      create(person)
        .then((data) => setPersons(persons.concat(data)))
        .catch((error) => console.log(error));
    }
  };

  const handlerFilter = (event) => {
    const filterName = event.target.value;
    setFilter(filterName);
  };

  const handlerRemove = (id) => {
    const person = persons.find((p) => p.id === id);

    if (window.confirm(`delete ${person.name} ?`)) {
      remove(id).then(() =>
        setPersons(persons.filter((person) => person.id !== id))
      );
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handlerFilter={handlerFilter} />
      <h3>add a new</h3>
      <PersonForm addNewPerson={handlerNewPerson} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} remove={handlerRemove} />
    </div>
  );
};

export default App;
