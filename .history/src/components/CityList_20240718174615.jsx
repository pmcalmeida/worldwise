import Spinner from "./Spinner";
import CityItem from "./Spinner";

import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem />
      ))}
    </ul>
  );
}

export default CityList;
