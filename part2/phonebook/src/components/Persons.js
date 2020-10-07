import React from "react";

const Persons = ({ persons, filter, remove }) => {
  const dataSelected =
    filter !== ""
      ? persons.filter((person) => RegExp(filter, "i").exec(person.name))
      : persons;

  return (
    <ul>
      {dataSelected.map((person) => (
        <li key={person.name}>
          {`${person.name} ${person.number}`}
          <button onClick={() => remove(person.id)} className="button-remove">delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
