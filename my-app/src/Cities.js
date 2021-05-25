
import CityTemp from './CityTemp'
export default function Cities(props) {
    return (
        <div>
            <ul>
                {
                    props.cities.map(city => 
                    <CityTemp  key = {city.id} movie = {city} deleteMovie ={props.deleteMovie}
                    />)
                }    
            </ul>
        </div>
      );
}