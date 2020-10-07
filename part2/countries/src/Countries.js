import React, { useEffect, useState } from "react";
import axios from "axios"


import Country from "./components/Country"


const urlCountry =( value )=>  `https://restcountries.eu/rest/v2/name/${value}?fields=name;capital;languages;flag;population`



const Countries = () => {
  const [textSearch , setTextSearch ] = useState("")
  const [tooManySearch,setTooManySearch] = useState(false)
  const [countryFind,setCountryFind] = useState([])
 
  const handleSearch = event => {
    const value = event.target.value
    setTooManySearch(false)
    setTextSearch(value)
    setCountryFind([])
  }


  const requestCountry = () => {
   
      if (textSearch !== ""){}
      axios.get(urlCountry(textSearch))
      .then(({data})=> {
        if (data.length > 10){
          setTooManySearch(true)
        }
        else {
          setTooManySearch(false)
          setCountryFind(data)
        }
      } )
      .catch(error => console.log( error))

       
  }
  useEffect(requestCountry, [textSearch])
   
  return (
    <div>
      <label>
        find countries:
        <input type="text" value={textSearch} onChange={handleSearch} />
      </label>
      
      { tooManySearch && <span>too many matches, specify another filter</span>}

     <ul>
        {countryFind.map(country => <li key={country.name} ><Country {... country} visibility={countryFind.length==1}/></li>)}
      </ul>
     
    </div>
  );
};


export default Countries
