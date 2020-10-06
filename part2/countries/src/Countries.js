import React, { useEffect, useState } from "react";
import axios from "axios"

const urlCountry =( value )=>  `https://restcountries.eu/rest/v2/name/${value}?fields=name;capital;languages;flag;population`

const urlWeather = (nameCountry) => {
   
  const API_WEATHER=process.env.REACT_APP_WEATHERSTACK_API
  return `http://api.weatherstack.com/current?access_key=${API_WEATHER}&query=${nameCountry}`
}

const  Country = ({name,population,flag,languages,capital,visibility = false}) => {
const [visibilityCountry,setvisibilityCountry] = useState(visibility )
const [weatherIcons,setWeatherIcons] = useState("")
  useEffect( () => {
    if (visibilityCountry ){
      
       
        axios.get(urlWeather(name))
          .then(({data})=>{  
           console.log(data)
           const {temperature,weather_icons,wind_speed } =  data.current  
            setWeatherIcons(weather_icons)
  
      })
    }
        
    } ,[visibilityCountry]


  )

return  ( <div className="country">
    <h1>{ name}<button onClick={()=> setvisibilityCountry(visiblityCountry => !visiblityCountry)}>show</button></h1>
    
    {visibilityCountry && <><br></br>
    <div>capital { capital}</div>
    <div>population { population}</div>
    <br></br>
    <h2>languages</h2>
    <ul className="country-languages">
      {languages.map(language=> <li key={language.name}>{language.name}</li>)}

    </ul>
     
    <img className="flag" src={flag} alt={`flag of ${name}`}/>
    <img src={weatherIcons}/>
    </>}
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
