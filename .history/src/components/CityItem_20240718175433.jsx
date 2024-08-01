import styles from "./CityItem.module.css";

function CityItem({ city }) {
  return <li className={styles.cityItem}>{city.name}</li>;
}

export default CityItem;
