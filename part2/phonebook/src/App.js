import React, { useEffect, useState } from "react";

//hooks
import {useNotification} from "./hooks"
//components
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";


import { getAll, create, remove, update } from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const {notification, errorNotification,successNotification,resetNotification } = useNotification();

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
        const id = persons.find((p) => p.name === person.name).id;
        update(id, person).then((data) => {
          setPersons(persons.map((p) => (p.id === data.id ? data : p)));
        });
      }
    } else {
      person = { ...person, id: persons.length + 1 };

      create(person)
        .then((data) => {
         successNotification(`append ${data.name} to phone book`)
          setTimeout(() => resetNotification(), 3000);
          setPersons(persons.concat(data));
        })
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
        
      )
      .catch(() => {
        errorNotification(`information of ${person.name} has already been removed from server `)
        setTimeout(()=> resetNotification(),3000)
        setPersons(persons.filter(p=> p.id !== id))
      })
    }
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification {...notification} />
      <Filter filter={filter} handlerFilter={handlerFilter} />
      <h3>add a new</h3>
      <PersonForm addNewPerson={handlerNewPerson} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} remove={handlerRemove} />
    </div>
  );
};

export default App;
