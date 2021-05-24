import React from 'react';

//
async function getCurrentWeather(){
    var apiKey = '-';
    fetch("api.openweathermap.org/data/2.5/weather?q=London&appid="+ apiKey)
    .then((res) => console.log(res))
}
export default function CitySearch() {
    return (
      <div>
        <h1>City Search</h1>
        <input type ="text"></input>
        <button onClick ={getCurrentWeather}> Search </button>
      </div>
    );
  }
  