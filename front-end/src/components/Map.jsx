import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';


const Mapbox = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    //mapboxgl.accessToken = import.meta.env.MAP_API_TOKEN;
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlZndoaXBwaW4iLCJhIjoiY202bmRmZ2w2MGZ3eDJpcTgxYWRxNWc5YiJ9.WIUKRMDQANOKOY21NYElnA';

    const bounds = [
      [-80.445601, 37.213656], // Southwest coordinates
      [-80.396923, 37.243765] // Northeast coordinates
    ];

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/chefwhippin/cm6nil1xb00nr01ry4c0bgbor',
      center: [-122.433247, 37.742646],
      zoom: 12,
      maxBounds: bounds
    });

    mapRef.current.on('load', () => {
      mapRef.current.addSource('places', {
        // This GeoJSON contains features that include an "icon"
        // property. The value of the "icon" property corresponds
        // to an image in the Mapbox Streets style's sprite.
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>McBryde</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                icon: 'mapbox-circle'
              },
              geometry: {
                type: 'Point',
                coordinates: [-80.421787, 37.230589]
              }
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Burruss</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
                icon: 'mapbox-circle'
              },
              geometry: {
                type: 'Point',
                coordinates: [-80.423701, 37.229000]
              }
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Hitt Hall</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
                icon: 'mapbox-circle'
              },
              geometry: {
                type: 'Point',
                coordinates: [-80.426091, 37.229429]
              }
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Data & Decision Sciences</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
                icon: 'mapbox-circle'
              },
              geometry: {
                type: 'Point',
                coordinates: [-80.427457, 37.231553]
              }
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Goodwin</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
                icon: 'mapbox-circle'
              },
              geometry: {
                type: 'Point',
                coordinates: [-80.425819, 37.232407]
              }
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Torgeson</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
                icon: 'mapbox-circle'
              },
              geometry: {
                type: 'Point',
                coordinates: [-80.420204, 37.229710]
              }
            },
            {
              type: 'Feature',
              properties: {
                description:
                  '<strong>Newman Library</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
                icon: 'mapbox-circle'
              },
              geometry: {
                type: 'Point',
                coordinates: [-80.419427, 37.228814]
              }
            }
          ]
        }
      });

      mapRef.current.addLayer({
        id: 'places',
        type: 'symbol',
        source: 'places',
        layout: {
          'icon-image': ['get', 'icon'],
          'icon-allow-overlap': true
        }
      });

      mapRef.current.on('click', 'places', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(mapRef.current);
      });

      mapRef.current.on('mouseenter', 'places', () => {
        mapRef.current.getCanvas().style.cursor = 'pointer';
      });

      mapRef.current.on('mouseleave', 'places', () => {
        mapRef.current.getCanvas().style.cursor = '';
      });
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: [-80.422224, 37.227612],
      zoom: 16
    })
  }


  return (
    <>
      <button className="reset-button" onClick={handleButtonClick}>Reset</button>
      <div id = 'map-container' ref={mapContainerRef} className= "mapboxgl-canvas"></div>
    </>
  );
};

export default Mapbox;