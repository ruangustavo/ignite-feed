import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img src="https://github.com/ruangustavo.png" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.author}>
              <strong>
                Ruan Gustavo <span>(você)</span>
              </strong>
              <time>Cerca de 2h</time>
            </div>
            <button>
              <Trash size={24} />
            </button>
          </div>
          <div className={styles.comment}>
            <p>Muito bom, parabéns pelo conteúdo!</p>
          </div>
        </div>
        <div className={styles.commentActions}>
          <button>
            <ThumbsUp size={20} />
            <span>Aplaudir</span>
            <span className={styles.totalOfLikes}>3</span>
          </button>
        </div>
      </div>
    </div>
  );
}
