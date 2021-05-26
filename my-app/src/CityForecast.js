import axios from 'axios';

export default function CityForecast(props) {

    function getForecastWeather(){
        var lon, lat //TODO: props ska ha med lon och lat

        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=37.39&lon=-122.08&appid=df83d303c678952ca385f7c6b8e68720`)
        .then((response) => {
            console.log(response)
        }).catch(err => console.log(err))
    }
    return (
        <div>

        </div>
      );
}