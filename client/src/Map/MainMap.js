import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'react-emotion';
import '../../node_modules/leaflet/dist/leaflet.css';

export default function MainMap() {
  const [position, setPosition] = useState([52.402512, 16.950136]);
  const [zoom, setZoom] = useState(13);

  const MapWrapper = styled('div')`
    .root {
      width: 100vh;
      height: 100vh;
    }
  `;

  return (
    <MapWrapper>
      <Map
        center={position}
        zoom={zoom}
        // style={{ width: '100vh', height: '100vh' }}
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </MapWrapper>
  );
}
