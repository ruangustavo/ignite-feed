import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const user = {
  avatarUrl: "https://github.com/ruangustavo.png",
  name: "Ruan Gustavo",
  role: "Full-stack developer",
};

const posts = [
  {
    id: 1,
    author: user,
    content: [
      {
        type: "paragraph",
        content:
          "Olá, isso é a primeira demonstração de um post para o meu Linkedin!",
      },
      { type: "link", content: "https://github.com" },
    ],
    publishedAt: new Date(),
  },
  {
    id: 2,
    author: user,
    content: [
      {
        type: "paragraph",
        content:
          "Olá, isso é a segunda demonstração de um post para o meu Linkedin!",
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
        <Sidebar user={user} />
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
