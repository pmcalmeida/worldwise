import styles from "./";

function Button({ children, onClick, type }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default Button;
