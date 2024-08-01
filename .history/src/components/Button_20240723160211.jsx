import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <Button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Button;
