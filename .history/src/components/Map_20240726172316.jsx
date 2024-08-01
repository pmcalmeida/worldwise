import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../context/CityContext";
import { useSearchParams } from "react-router-dom";

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
}

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([0, 0]);
  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat") || 0;
  const mapLng = searchParams.get("lng") || 0;

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    } else if (cities[0]?.position) {
      const { lng, lat } = cities[0]?.position || {};
      setMapPosition([lat, lng]);
    }
  }, [cities, mapLat, mapLng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={[mapLat, mapLng]}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={[mapLat, mapLng]} />
      </MapContainer>
    </div>
  );
}

export default Map;
