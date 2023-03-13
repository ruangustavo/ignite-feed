import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

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
