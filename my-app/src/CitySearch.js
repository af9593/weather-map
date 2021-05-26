import React, {useState, useRef} from 'react';
//import weather from './weather.template';
import axios from 'axios';
import CityTemp from './CityTemp'
export default function CitySearch(props) {
  
  const input_city = useRef()
  const [suggestion,setSuggestion] = useState('Suggestion');
  let input_value;
  async function getCurrentWeather(){
    input_value = input_city.current.value
    setSuggestion(suggestion => suggestion = 'Suggestion');
    if(input_value.length > 2){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input_value}&units=metric&appid=df83d303c678952ca385f7c6b8e68720`)
      .then((response) => {
        console.log(response)
        setSuggestion(suggestion => suggestion = "");
        if( response.status === 200){
          setSuggestion(suggestion => suggestion = <CityTemp response = {response.data} addCity={props.addCity} />);
          console.log('Success')
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
