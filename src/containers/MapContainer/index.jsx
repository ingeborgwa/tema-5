import React, { useEffect, useRef } from 'react';
import Mapbox, { mapboxgl } from 'mapbox-gl';

function MapContainer () {
    let map;
    const mapElement = useRef (null);
    Mapbox.accessToken = process.env.MAPBOX_API_KEY;

    useEffect (() => {
        
        map = new Mapbox.Map ({
            container: mapElement.current, 
            style: 'mapbox://style/mapbox/streets-v11',
            zoom: 1,
            center: [10.7522, 59.9139]
        });
       
    }, []);


    navigator.geolocation.getCurrentPosition(minpos => {
        map.flyTo(
          {
            center: [minpos.coords.longitude, minpos.coords.latitude],
            zoom: 10
          }
        )
    });

    return(
        <div> style={{height: '500px'}} ref={mapElement}</div>
    )
};

export default MapContainer;



// const marker = new Mapbox.Marker ();
// marker.setLngLat ([ 10.7522, 59.9139 ]);
// marker.addTo(map);

// map.addControl (
//     new MaoboxDirections ({
//         acsessToken: process.env.MAPBOX_API_KEY
//     }),
//     'top-left'
// );