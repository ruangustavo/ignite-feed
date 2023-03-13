import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, role }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.user}>
          <Avatar src={"https://github.com/ruangustavo.png"} hasBorder />
          <div className={styles.info}>
            <strong>{author}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time>Publicado há 1 minuto</time>
      </header>

      <div className={styles.content}>
        <p>{content}</p>
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
