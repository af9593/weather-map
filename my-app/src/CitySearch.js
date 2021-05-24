import React, {useRef} from 'react';

export default function CitySearch() {
  
  const input_city = useRef()

  async function getCurrentWeather(){
    let input_value = input_city.current.value
    if(input_value.length > 2){
      console.log(input_value)
      if(input_value.toLowerCase() === 'malmö' || input_value.toLowerCase() === 'london'){
        alert(`Did you mean ${input_city.current.value}`)
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
  