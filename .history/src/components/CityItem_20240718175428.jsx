import styles from "./CityItem.module.css";

function CityItem({ city }) {
  return <li styles={styles.CityItem}>{city.name}</li>;
}

export default CityItem;
