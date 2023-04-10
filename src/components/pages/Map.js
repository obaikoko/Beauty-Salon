import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoib2JhaWtva28iLCJhIjoiY2xmc2p3MHgxMDZ4bTNqbDJ4OTU0dHRrOCJ9.oP4O1MDHQKIaRyPhg0lt_w';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [9.04062, 7.412977],
      zoom: 4.5,
    });

    // Add any necessary layers and markers here

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className='map-container' />;
};

export default Map;
