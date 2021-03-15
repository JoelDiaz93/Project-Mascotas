import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation } from "react-router-dom";
import data from "../assets/data.json";
import { usePosition } from "use-position";
// import Markers from "./VenueMarkers";

const MapView = () => {
  const [state, setState] = useState({
    currentLocation: { lat: -0.18271729056166636, lng: -78.48395615544348 },
    zoom: 13,
    data,
  });
  const watch = true;
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch, { enableHighAccuracy: true });

  useEffect(() => {
    if (latitude && longitude) {
      const currentLocation = {
        lat: latitude,
        lng: longitude,
      };
      console.log(state);
      setState({
        ...state,
        data: {
          venues: state.data.venues.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        },
        currentLocation,
      });
    //   history.replace({
    //     pathname: "/map",
    //     state: {},
    //   });
    }
  }, [latitude]);

  return (

      <Map
        style={{ maxWidth: '400px', maxHeight: '200px' }}
        center={state.currentLocation}
        zoom={state.zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    
  );
};

export default MapView;
