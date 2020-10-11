import axios from "axios";

const base_url = "http://localhost:3001/api/persons";

const getAll = () =>
  axios
    .get(base_url)
    .then((response) => response.data)
    .catch((error) => console.log(error));

const create = (person) =>{

  return axios
    .post(base_url, person)
    .then((response) => {console.log(response)
      return response.data})
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
