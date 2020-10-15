import axios from "axios";
/**
 * change localhost:3001/api/persons to a relative url
 * use a proxy for  developement mode 
 */
const base_url = "/api/persons";

const getAll = () =>
  axios
    .get(base_url)
    .then((response) => response.data)
    .catch((error) => console.log(error));

const create = (person) =>{

  return axios
    .post(base_url, person)
    .then((response) => response.data)
    .catch(error => console.log(error))
  }

const remove = (id) =>
  axios
    .delete(`${base_url}/${id}`)
    .then((response) => response.data)
    

const update = (id, person) =>
  axios
    .put(`${base_url}/${id}`, person)
    .then((response) => response.data)
    .catch((error) => console.log(error));


export { getAll, create, remove , update};
