import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) {
  }

  return <ul className={styles.cityList}></ul>;
}

export default CityList;
