import {addCityToLocalStorage, loadCitiesFromLocalStorage} from './StoredData'
import React, {useState,useEffect} from 'react'
import CitySearch from './CitySearch'
import Cities from './Cities'
import CityForecast from './CityForecast'
import Map from './Map'

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
    console.log("deleted movie with id" + id);

    console.log(cities)
  }

  return (
    <div className="App">
      <h1> Weather map</h1>
      <CitySearch addCity = {addCity}/>
      <Cities cities = {cities} deleteCity={deleteCity}/>
      <CityForecast/>
      <Map cities = {cities}/>
    </div>
  );
}

export default App;
