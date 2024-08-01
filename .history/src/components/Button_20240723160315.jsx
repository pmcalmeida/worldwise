import styles from "./Button.module.css";

function Button({ children, onClick, type = "primary" }) {
  return (
    <Button className={`${styles.btn}`} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Button;
