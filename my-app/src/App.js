import {addCityToLocalStorage, loadCitiesFromLocalStorage, removeCityFromLocalStorage} from './StoredData'
import React, {useState,useEffect} from 'react'
import CitySearch from './CitySearch'
import Cities from './Cities'
import Map from './Map'
import './App.css'

function App() {


  const [cities, setCities] = useState([])
  console.log(cities)
  

   useEffect(() => {
    var cc = loadCitiesFromLocalStorage();
    console.log(cc)
    setCities(cc)
   },[])

  function addCity(city){
    const newId = cities.length > 0 ? cities[cities.length - 1].id + 1 : 1;
    const newCity = {
      id:newId, 
      name: city.name,
      coord: city.coord,
      weather: city.weather,
      temp : city.main.temp
    }

    setCities([...cities, newCity])
    addCityToLocalStorage(newCity);
    


    console.log(cities)
  }
  function deleteCity(id){
    setCities(cities.filter((city) => city.id !== id)) //Filtera bort alla cities som ej har samma id.
    removeCityFromLocalStorage(id);
    console.log("deleted movie with id" + id);

    console.log(cities)
  }

  return (
    <div className="App">
      <CitySearch addCity = {addCity} />
      <Cities cities = {cities} deleteCity={deleteCity}/>
      <Map cities = {cities}/>
      <div class="Footer bg-light py-4">
        <div class="container text-center">
          <p class="text-muted mb-0 py-2"> WeatherMap designed by <a href="https://github.com/af9593" target="_blank" > Moustafa</a> , <a href="https://github.com/Basir98" target="_blank"> Basir</a> and <a href="https://github.com/chungpaella" target="_blank">chungpaella</a>  - 2021</p>
        </div>
      </div>
    </div>
  );
}

export default App;
