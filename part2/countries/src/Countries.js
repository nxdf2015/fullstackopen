import React, { useEffect, useState } from "react";
import axios from "axios"

const  Country = ({name,population,flag,languages,capital,visibility = false}) => {
const [visiblityCountry,setvisiblityCountry] = useState(visibility )
return  ( <div className="country">
    <h1>{ name}<button onClick={()=> setvisiblityCountry(visiblityCountry => !visiblityCountry)}>show</button></h1>
    
    {visiblityCountry && <><br></br>
    <div>capital { capital}</div>
    <div>population { population}</div>
    <br></br>
    <h2>languages</h2>
    <ul className="country-languages">
      {languages.map(language=> <li key={language.name}>{language.name}</li>)}

    </ul>
     
    <img className="flag" src={flag} alt={`flag of ${name}`}/></>}
  </div>)
}

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
  const url =( value )=>  `https://restcountries.eu/rest/v2/name/${value}?fields=name;capital;languages;flag;population`
  const requestCountry = () => {
      if (textSearch !== ""){}
      axios.get(url(textSearch))
      .then(({data})=> {
        if (data.length > 10){
          setTooManySearch(true)
        }
        else {
          setTooManySearch(false)
          setCountryFind(data)
        }
      })
      .catch(error => console.log("-------------------",error))
  }
  useEffect(requestCountry, [textSearch])
   
  return (
    <div>
      <label>
        find countries:
        <input type="text" value={textSearch} onChange={handleSearch} />
      </label>
      
      { tooManySearch && <span>too many matches, specify another filter</span>}

     {/* { countryFind.length == 1 ?
         <Country {...countryFind[0]}/>: */}
     <ul>
        {countryFind.map(country => <li key={country.name} ><Country {... country} visibility={countryFind.length==1}/></li>)}
      </ul>
     
    </div>
  );
};


export default Countries
