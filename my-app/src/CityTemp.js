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

export default function CityTemp(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let src = `http://openweathermap.org/img/wn/${props.response.weather[0].icon}.png`
  function addCity(){
    props.addCity(props.response)
  }
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h2">
          {props.response.name} {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {props.response.main.temp} °C
            <img src={src} alt = "..."></img>
        </Typography>
        <Typography component="p">
          {props.response.weather[0].main} 
          <br />
          {props.response.weather[0].description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={addCity} size="small">Add to Favorites</Button>
      </CardActions>
    </Card>
  );
}