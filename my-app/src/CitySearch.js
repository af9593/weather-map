import React, {useRef} from 'react';
import weather from './weather.template'
export default function CitySearch(props) {
  
  const input_city = useRef()

  async function getCurrentWeather(){
    let input_value = input_city.current.value

    if(input_value.length > 2){
      if(weather.cod === 200 && input_value.toLowerCase() === 'malmö'){
        if(window.confirm(`Did you mean ${input_city.current.value}`)){
          console.log('Success')
          input_city.current.value = ""
          props.addCity(weather) //TODO: ändra till det riktiga API response
        }else{
          console.log('Try again')
          input_city.current.value = ""
        }
      }
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
  