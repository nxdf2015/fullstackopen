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


const useNotification = () => {
  const  [notification,setNotification] = useState({message:"",type:""})
  const resetNotification = () => setNotification({message:"",type:""})
  const errorNotification = message  => setNotification({message, type:"error"})
  const successNotification = message => setNotification({message ,type:"success"})
  return {notification, resetNotification ,errorNotification,successNotification}
}

export { usePerson ,useNotification};
