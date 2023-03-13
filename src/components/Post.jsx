import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  function getFormattedDateRelativeToNow(date) {
    const formattedDate = formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    });

    const capitalizedFormattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return capitalizedFormattedDate;
  }

  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleCommentChange(event) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function handleInvalidComment(event) {
    event.target.setCustomValidity("O comentário é obrigatório!");
  }

  function deleteComment(content) {
    const commentsWithoutDeletedComment = comments.filter(
      (comment) => comment !== content
    );

    return setComments(commentsWithoutDeletedComment);
  }

  const isNewCommentInvalid = newComment.length === 0;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.user}>
          <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedDate} dateTime={publishedAt.toISOString()}>
          {getFormattedDateRelativeToNow(publishedAt)}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href={item.content}>{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Escreva um comentário..."
          value={newComment}
          onChange={handleCommentChange}
          onInvalid={handleInvalidComment}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentInvalid}>
            Publicar
          </button>
        </footer>
      </form>

      {comments.map((comment) => (
        <Comment
          key={comment}
          content={comment}
          author={author}
          publishedAt={getFormattedDateRelativeToNow(new Date())}
          onCommentDelete={deleteComment}
        />
      ))}
    </div>
  );
}
