import React ,{useState} from 'react';
import axios from 'axios';
import DayForecast from './DayForecast';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

import Slide from '@material-ui/core/Slide';


import List from '@material-ui/core/List';
import Delete from '@material-ui/icons/Delete';

const useStylesDialog = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
      background:'#28427B'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    button: {
      background: '#FFFFFF',
      border: 10,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color:'#DE8A02',
      height: 48,
      padding: '0 30px',
    }
  }));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function CityForecast(props) {
    var index = 1;
    const {lat, lon} = props.city.coord  //TODO: props ska ha med lon och lat
    const classes = useStylesDialog();

    const [open, setOpen] = useState(false);
    const [daily_forecast , setDailyForecast] = useState([])

    const handleClickOpen = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=df83d303c678952ca385f7c6b8e68720`)
        .then((response) => {
            setDailyForecast(response.data.daily)
        }).catch(err => console.log(err))
        setOpen(true);
    
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
    <div>
      <Button className={classes.button} onClick={handleClickOpen}>
        Show Forecast For the next 8 days
      </Button>
      <DeleteIcon onClick={props.deleteCity}/>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
  
            <Typography variant="h6" className={classes.title}>
              8 days Forecast for {props.city.name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
                <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {daily_forecast.map(day => <DayForecast key = {index++} index = {index} day={day}/>)}
        </List>
      </Dialog>
    </div>
      );
}