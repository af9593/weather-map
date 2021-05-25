import React, {useRef} from 'react';
//import weather from './weather.template';
import axios from 'axios';
export default function CitySearch(props) {
  
  const input_city = useRef()

  async function getCurrentWeather(){
    let input_value = input_city.current.value

    if(input_value.length > 2){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input_value}&appid=df83d303c678952ca385f7c6b8e68720`)
      .then((response) => {
        console.log(response)
        if( response.status === 200){
          if(window.confirm(`Did you mean ${input_city.current.value}`)){ //TODO: Visa förslag på städer under search bar
            console.log('Success')
            input_city.current.value = ""
            props.addCity(response.data) 
          }else{
            console.log('Try again')
          }
        }
      }).catch((err) => console.log(err))

    }
  }

    return (
      <div>
        <input type="text" className="form-control"  placeholder="Enter City Name ..." 
        ref={input_city} onKeyUp={getCurrentWeather}
        />
      </div>
    );
  }
