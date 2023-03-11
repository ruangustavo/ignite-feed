import { Header } from "./Header";
import styles from "./App.module.css";
import { Sidebar } from "./Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>Hello, it's working</p>
        </main>
      </div>
    </div>
  );
}
