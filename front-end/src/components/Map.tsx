import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const Mapbox: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //mapboxgl.accessToken = import.meta.env.MAP_API_TOKEN;
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlZndoaXBwaW4iLCJhIjoiY202bmRmZ2w2MGZ3eDJpcTgxYWRxNWc5YiJ9.WIUKRMDQANOKOY21NYElnA';


    const bounds = new mapboxgl.LngLatBounds (
      [-80.445601, 37.213656], // Southwest coordinates
      [-80.396923, 37.243765] // Northeast coordinates
    );

    if (mapRef.current){
      const map = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-80.422224, 37.227612],
        zoom: 16,
        maxBounds: bounds
      });

      map.addControl(new mapboxgl.NavigationControl(), "top-left");

      return () => map.remove();
    }
  }, []);

  return <div ref={mapRef} className= "mapboxgl-canvas"></div>;
};

export default Mapbox;