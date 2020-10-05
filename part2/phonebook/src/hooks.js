import { useState } from "react";
const usePerson = (init) => {
  const [newName, setNewName] = useState(init.name);

  const [newNumber, setNewNumber] = useState(init.number);

  const person = { name: newName, number: newNumber };
  const setPerson = { name: setNewName, number: setNewNumber };
  const reset = () => {
    setNewName("");
    setNewNumber("");
  };

  return [person, setPerson, reset];
};

export { usePerson };
