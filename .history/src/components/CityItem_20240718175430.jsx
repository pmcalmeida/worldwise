import styles from "./CityItem.module.css";

function CityItem({ city }) {
  return <li styles={styles.cityItem}>{city.name}</li>;
}

export default CityItem;
