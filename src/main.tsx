import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MapsApp } from './MapsApp.tsx'

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtaWxvZGV2OTciLCJhIjoiY20wM2FneWpoMDc3MDJscHg1NTU2OTBnaSJ9.AUks0qxEh3JMdvVx-GtPkA';

if(!navigator.geolocation){
  alert('Tu navegador no tiene opcion de Geolocalizacion')
  throw new Error('Tu navegador no tiene opcion de Geolocalizacion')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>,
)
