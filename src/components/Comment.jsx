import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { useState } from "react";

export function Comment({ content, onCommentDelete }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onCommentDelete(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

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
            <button onClick={handleDeleteComment}>
              <Trash size={24} weight={"bold"} />
            </button>
          </div>
          <div className={styles.comment}>
            <p>{content}</p>
          </div>
        </div>
        <div className={styles.commentActions}>
          <button className={styles.likeCount} onClick={handleLikeComment}>
            <ThumbsUp size={20} weight={"bold"} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
