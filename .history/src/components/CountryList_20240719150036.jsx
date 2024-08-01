import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message='Add your first city' />;

  const countries = cities.reduce((acc, cur) => {
    if (arr.map((el) => el.city).includes(city.country)) {
    }
  }, []);

  return (
    <ul className={styles.CountriesList}>
      {countries.map((city) => (
        <CountryItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CountryList;
