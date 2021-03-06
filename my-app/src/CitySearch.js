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
          setSuggestion(<CityTemp input_city={input_city} setSuggestion={setSuggestion} response = {response.data} addCity={props.addCity}/>);
        }
      }).catch(err => console.log(err))
    }
  }

    return (
      <div className="Search">
        <svg xmlns="http://www.w3.org/2000/svg"   width="100%" height="150" viewBox="0 0 482.654 236">
    <defs>
    <clipPath id="clip-path">
      <rect width="482.654" height="236" fill="none"/>
    </clipPath>
    <filter id="Path_2" x="0" y="30.614" width="482.654" height="155.201" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="WeatherMap" x="107.774" y="85.551" width="315" height="88" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    </defs>
    <g id="Repeat_Grid_1" data-name="Repeat Grid 1" clipPath="url(#clip-path)">
    <g transform="translate(96.274 -83)">
      <g transform="matrix(1, 0, 0, 1, -96.27, 83)" filter="url(#Path_2)">
        <path id="Path_2-2" data-name="Path 2" d="M158,146.824c50.808-25.706,68.78,0,68.78,0s42.557-12.16,79.136,5.4,40.543,24.024,40.543,24.024,65.64,68.333,4.06,76.442-143.868,0-143.868,0-187.457,5.514-199.549,0-125.964,13.229-85.045-48.762,72.559-19.442,72.559-19.442,6.958-34.317,40.669-51.315C73.125,114.1,139.238,113.763,158,146.824" transform="translate(96.27 -83)" fill="#f7f7f7" stroke="#a0a0a0" strokeLinejoin="bevel" strokeWidth="1"/>
      </g>
      <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="127.5" cy="118" rx="127.5" ry="118" transform="translate(112 83)" fill="#ffae15" styles={"mix-blend-mode:multiply ; isolation:isolate"} />
      <g transform="matrix(1, 0, 0, 1, -96.27, 83)" filter="url(#WeatherMap)">
        <text id="WeatherMap-2" data-name="WeatherMap" transform="translate(117.77 148.55)" fill="#fff" stroke="#fcae00" strokeWidth="1" fontSize="56" fontFamily="Impact"><tspan x="0" y="0">WeatherMap</tspan></text>
      </g>
    </g>
  </g>
      </svg>



        <input type="text" className="form-control"  placeholder="Enter City Name ..." 
        ref={input_city} onKeyUp={getCurrentWeather}
        />
        {suggestion}
      </div>
    );
  }
