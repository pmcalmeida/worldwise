import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <Button className={styles.button} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Button;
