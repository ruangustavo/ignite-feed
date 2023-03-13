import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.user}>
          <Avatar src={"https://github.com/ruangustavo.png"} hasBorder />
          <div className={styles.info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time>Publicado há 1 minuto</time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p>
                <a href={item.content}>{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.comments}>
        <Comment />
      </div>
    </div>
  );
}
