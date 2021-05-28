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
                        position={{
                            lat:city.coord.lat,
                            lng:city.coord.lon
                            }} 
                    />
                ))
                }
    
            </GoogleMap>
        );
    }

    const WrappedMap =  withScriptjs(withGoogleMap(getMap));

    return (
        <div style={{width: "75vw", height:"75vh", margin: "0 auto"}}>
            <WrappedMap 
            googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyC0az1RERDN03J42otSaB9J0JrEcdfU5Ps&callback=initMap&libraries=&v=weekly'}
            loadingElement={<div style={{height: "100%"}} />}
            containerElement={<div style={{height: "100%"}}/>}
            mapElement={<div style={{height: "100%"}}/>}
            />
        </div>
    );
}