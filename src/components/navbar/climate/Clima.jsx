import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { getData } from '../../../store/getData';
import UserContext from '../../../contexts/userContext';
import clima from '../../../assets/img/clima.svg'

function Weather() {
    const [dados] = useState(getData("dados_tasks"))
    const [temperatura, setTemperatura] = useState(null);
    const {logado} = useContext(UserContext);
    
    useEffect(() => {
      async function fetchWeather() {

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Oriximiná&appid=e34a6c2f024a17700b6fe0e223ef6c5c&units=metric`
        );
        setTemperatura(response.data.main.temp);
      }
      fetchWeather();
      
    }, []);
  
    if (!temperatura) {
      return <div>Carregando...</div>;
    }
  
    return (
      <div className='clima'>
        <p>{"Oriximiná"} - {"Brasil"}</p>
        <div className="temperatura">
          <img src={clima} alt="Nuvem com" />
          <h1>{Math.round(temperatura)}°</h1>
        </div>
        
      </div>
    );
  }

export default Weather;
