import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={StyleSheet.app}>
      <AppNav />
      <Sidebar />
    </div>
  );
}

export default AppLayout;
