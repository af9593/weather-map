import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      display: 'flex',
      'justify-content': 'space-around',
    },
    content: {
        width: '130px',
    }
    
  });
export default function DayForecast(props) {
    const classes = useStyles();

    return (
        <div>
            <ListItem button className= {classes.root}>
                <Typography className={classes.content} variant="h5" component="h2">
                 In  {props.index} {props.index === 1 ? "Day" : "Days"}
                </Typography>

                <Typography className={classes.content} variant="subtitle1" component="p">
                 Day {props.day.temp.day} °C <br/>
                 ≈ {props.day.feels_like.day} °C 
                 </Typography>

                 <Typography className={classes.content} variant="subtitle1" component="p">
                 Night {props.day.temp.night} °C <br/>
                 ≈ {props.day.feels_like.night} °C
                </Typography>
                <Typography className={classes.content} variant="subtitle1" component="p">
                <img src = {`http://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`} alt ="nfokho"></img><br/>
                <strong>{props.day.weather[0].main}</strong><br/>
                {props.day.weather[0].description}
                </Typography>
            </ListItem>

            <Divider />
        </div>
      );
}