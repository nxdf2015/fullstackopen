import React from "react";

const Persons = ({ persons, filter }) => {
  const dataSelected =
    filter !== ""
      ? persons.filter((person) => RegExp(filter, "i").exec(person.name))
      : persons;

  return (
    <ul>
      {dataSelected.map((person) => (
        <li key={person.name}>{`${person.name} ${person.number}`}</li>
      ))}
    </ul>
  );
};

export default Persons;
