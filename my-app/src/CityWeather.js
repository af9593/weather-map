import React from 'react';
import CityForecast from './CityForecast';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 275,
    float: 'left',
    marginRight:'20px',
    marginBottom:'20px',
    background: 'linear-gradient(45deg,#28427B 90%, #FCA311  90%)',
    color: 'white'

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
  function deleteCity(){
    props.deleteCity(props.city.id)
  }
  return (
    <div>
      <Card className={classes.root}> 
        <CardContent>
          <Typography variant="h4" component="h2">
            {props.city.name} {bull}
          </Typography>
          <Typography className={classes.pos} >
              {props.city.temp} °C
              <img src={`http://openweathermap.org/img/wn/${props.city.weather[0].icon}.png`} alt = "..."></img>
          </Typography>
          <Typography component="p">
            {props.city.weather[0].main} 
            <br />
            {props.city.weather[0].description}
          </Typography>
        </CardContent>
        <CardActions>
          <CityForecast deleteCity = {deleteCity} city = {props.city} /> 
        </CardActions>
      </Card>
      
    </div>
  );
}
