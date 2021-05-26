import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CityWeather(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let src = `http://openweathermap.org/img/wn/${props.city.weather[0].icon}.png`
  function showForecast(){
      console.log('Forecast')
  }
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h2">
          {props.city.name} {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {props.city.temp} °C
            <img src={src} alt = "..."></img>
        </Typography>
        <Typography component="p">
          {props.city.weather[0].main} 
          <br />
          {props.city.weather[0].description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={showForecast} size="Large">More details ...</Button> 
      </CardActions>
    </Card>
  );
}
/**
 * coord: {lon: 89.6022, lat: 24.2034}
id: 1
name: "Narnia"
temp: 28.91
weather: Array(1)
0:
description: "overcast clouds"
icon: "04d"
id: 804
main: "Clouds"
 */