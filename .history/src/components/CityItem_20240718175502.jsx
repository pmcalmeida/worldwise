import styles from "./CityItem.module.css";

function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emojy}></span>
    </li>
  );
}

export default CityItem;
