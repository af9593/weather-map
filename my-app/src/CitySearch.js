import React, {useState, useRef} from 'react';
import axios from 'axios';
import CityTemp from './CityTemp'
export default function CitySearch(props) {
  
  const input_city = useRef()
  const [suggestion,setSuggestion] = useState('');
  let input_value;
  async function getCurrentWeather(){
    input_value = input_city.current.value
    setSuggestion('');
    if(input_value.length > 2){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input_value}&units=metric&appid=df83d303c678952ca385f7c6b8e68720`)
      .then((response) => {
        if( response.status === 200){
          setSuggestion(<CityTemp response = {response.data} addCity={props.addCity}/>);
        }
      }).catch(err => console.log(err))
    }
  }

    return (
      <div>
        <input type="text" className="form-control"  placeholder="Enter City Name ..." 
        ref={input_city} onKeyUp={getCurrentWeather}
        />
        {suggestion}
      </div>
    );
  }
