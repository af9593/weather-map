import CitySearch from './CitySearch'

function App() {
  function addCity(city){
    console.log(city)
  }
  return (
    <div className="App">
      <h1> Weather map</h1>
      <CitySearch addCity = {addCity}/>
    </div>
  );
}

export default App;
