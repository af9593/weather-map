import React, {useState} from 'react'
import CitySearch from './CitySearch'
import Cities from './Cities'
import CityForecast from './CityForecast'
function App() {
  const [cities, setCities] = useState([{id:0, name:"Malmö"}, {id:1, name:"London"}])

  function addCity(city){
    const newId = cities.length > 0 ? cities[cities.length - 1].id + 1 : 1;
    setCities([...cities, {id: newId, name: city['name']}])
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
    </div>
  );
}

export default App;
