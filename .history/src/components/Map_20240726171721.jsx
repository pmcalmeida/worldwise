import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../context/CityContext";
import { useSearchParams } from "react-router-dom";

function Map() {
  const { cities } = useCities();
  const [mapPosition] = useState([0, 0]);
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat") || 0;
  const lng = searchParams.get("lng") || 0;

  /*useEffect(() => {
    if (cities[0]?.position) {
      const { lng, lat } = cities[0]?.position || {};
      setMapPosition([lat, lng]);
    }
  }, [cities]);*/

  console.log(mapPosition);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={[lat, lng]}
        zoom={4}
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
      </MapContainer>
    </div>
  );
}

export default Map;
