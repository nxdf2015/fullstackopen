import { useState } from "react";
const usePerson = (init) => {
  const [newName, setNewName] = useState(init.name);

  const [newNumber, setNewNumber] = useState(init.number);

  const person = { name: newName, number: newNumber , isValid(){return /\w{4,}/.test(this.name) && /\d+/.test(this.number)}}
  const setPerson = { name: setNewName, number: setNewNumber };
  const reset = () => {
    setNewName("");
    setNewNumber("");
  };

  return [person, setPerson, reset];
};

const useNotification = () => {
  
  const waitReset = notification => {
    return  (message)=> {
      notification(message)
      setTimeout(() => resetNotification() , 2000)
    }
  }
  
  const  [notification,setNotification] = useState({message:"",type:""})
  const resetNotification = waitReset( () =>  setNotification({message:"",type:""}))
  const errorNotification = waitReset(message  => setNotification({message, type:"error"}))
  const successNotification = waitReset(message => setNotification({message ,type:"success"}))
  return {notification, resetNotification ,errorNotification,successNotification}
}

export { usePerson ,useNotification};
