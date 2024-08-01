import styles from "./Button.module.css";

function Button({ onClick }) {
  return <Button className={`${styles.btn}`} onClick={onClick}></Button>;
}

export default Button;
