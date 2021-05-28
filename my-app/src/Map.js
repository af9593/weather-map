import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";


export default function Map(props){
    //props.cities

    function getMap(){
        return (
            <GoogleMap 
            defaultZoom={2}
            defaultCenter={{lat:0, lng:0}} >
                { 
                props.cities.map(city => (
                    <Marker 
                        key= {city.id}
                        position={{
                            lat:city.coord.lat,
                            lng:city.coord.lon
                            }}
                        
                        //city.temp visa väder 
                           

                    />
                ))
                }
    
            </GoogleMap>
        );
    }

    const WrappedMap =  withScriptjs(withGoogleMap(getMap));

    return (

        <div className="Map" style={{width: "75vw", height:"75vh", margin: "0 auto"}}>
            <h3 style={{textAlign:"center"}}>View you favorite cities with Google maps</h3>
            <WrappedMap 
            googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyC0az1RERDN03J42otSaB9J0JrEcdfU5Ps&callback=initMap&libraries=&v=weekly'}
            loadingElement={<div style={{height: "100%"}} />}
            containerElement={<div style={{height: "100%"}}/>}
            mapElement={<div style={{height: "100%"}}/>}
            />
          
        </div>
    );
}