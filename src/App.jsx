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
          <Post
            author="Ruan Gustavo"
            content="Fala galeraa 👋!"
            role="Full-stack developer"
          />
        </main>
      </div>
    </div>
  );
}
