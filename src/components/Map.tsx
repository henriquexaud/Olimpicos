import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import IconMarker from '../assets/svgs/marker.svg';

const MapComponent: React.FC = () => {
  const position: LatLngExpression = [-23.216, -45.893]; // Posição inicial do mapa

  const icon = new L.Icon({
    iconUrl: IconMarker,
    iconSize: [32, 32], // Tamanho do ícone
    iconAnchor: [16, 32], // Ponto de ancoragem (centralizado na parte inferior)
    popupAnchor: [0, -32], // Alinha o popup diretamente acima do ícone e centralizado
    tooltipAnchor: [16, -32], // Alinha o tooltip diretamente acima do ícone e centralizado
  });

  return (
    <MapContainer center={position} zoom={15} style={{ height: '100vh', width: '100%' }} zoomControl={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={icon}>
        <Popup>
          Um ponto no mapa.<br />Personalize-me!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
