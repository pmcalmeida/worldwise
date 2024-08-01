import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message='Add your first city' />;

  return (
    <ul className={styles.CountriesList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CountryList;
