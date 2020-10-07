import React ,{useState,useEffect} from "react"
import axios from 'axios' 


const urlWeather = (nameCountry) => {
   
    const API_WEATHER=process.env.REACT_APP_WEATHERSTACK_API
    return `http://api.weatherstack.com/current?access_key=${API_WEATHER}&query=${nameCountry}`
  }
  
  const  Country = ({name,population,flag,languages,capital,visibility = false}) => {
  const [visibilityCountry,setvisibilityCountry] = useState(visibility )
  const [weatherIcons,setWeatherIcons] = useState("")
  
    useEffect( () => {
        console.log("----------------------",process.env.REACT_APP_DEBUG)
      if (visibilityCountry && !process.env.REACT_APP_DEBUG){
        
         
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


  export default Country