import React from "react";

import { usePerson } from "../hooks";

const PersonForm = ({ addNewPerson }) => {
  const [person, setPerson, reset] = usePerson({ name: "", number: "" });
  const handlerChange = (event) => {
    const { name, value } = event.target;
    const updateValue = name === "name" ? setPerson.name : setPerson.number;
    updateValue(value);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addNewPerson(person);
        reset();
      }}
    >
      <div>
        name: <input name="name" value={person.name} onChange={handlerChange} />
      </div>
      <div>
        number: <input name="number" value={person.number} onChange={handlerChange} />
      </div>
      <div>
        <button type="submit" disabled={ !person.isValid()}>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
