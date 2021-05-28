
import CityWeather from './CityWeather'
export default function Cities(props) {
    return (
        <div>
            <ul>
                {
                    props.cities.map(city => 
                    <CityWeather key = {city.id} city = {city} deleteCity ={props.deleteCity}
                    />)
                }    
            </ul>
        </div>
      );
}