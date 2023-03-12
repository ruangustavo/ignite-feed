import { Header } from "./Header";
import styles from "./App.module.css";
import { Sidebar } from "./Sidebar";
import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}
