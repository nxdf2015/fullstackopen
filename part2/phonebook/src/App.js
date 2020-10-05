import React, { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState(() => [
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [filter, setFilter] = useState("");

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

export default App;
