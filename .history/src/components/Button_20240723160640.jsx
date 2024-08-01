import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <Button className={`${styles.btn} ${styles.primary}`} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Button;
