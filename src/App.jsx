import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ruangustavo.png",
      name: "Ruan Gustavo",
      role: "Full-stack developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Olá, isso é um post de demonstração para o meu Linkedin!",
      },
      { type: "link", content: "https://github.com" },
    ],
    publishedAt: new Date(),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
