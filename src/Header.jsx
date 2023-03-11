import logo from "./assets/logo-ignite.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Ignite" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
