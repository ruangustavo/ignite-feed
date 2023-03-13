import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment() {
  return (
    <div className={styles.wrapper}>
      <Avatar src={"https://github.com/ruangustavo.png"} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.author}>
              <strong>Ruan Gustavo</strong>
              <time>Cerca de 2h</time>
            </div>
            <button>
              <Trash size={24} weight={"bold"} />
            </button>
          </div>
          <div className={styles.comment}>
            <p>Muito bom, parabéns pelo conteúdo!</p>
          </div>
        </div>
        <div className={styles.commentActions}>
          <button>
            <ThumbsUp size={20} weight={"bold"} />
            <span>Aplaudir</span>
            <span className={styles.totalOfLikes}>3</span>
          </button>
        </div>
      </div>
    </div>
  );
}
