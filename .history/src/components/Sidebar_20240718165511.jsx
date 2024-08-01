import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>
        <p className={styles.copyright}></p>
      </p>
      <footer className=''></footer>
    </div>
  );
}

export default Sidebar;
