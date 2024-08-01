import styles from "./Button.module.css";

function Button({ children, onClick, type = "primary" }) {
  return (
    <Button className={`${styles.btn} ${ type === 'primary' ? styles.primary}`} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Button;
