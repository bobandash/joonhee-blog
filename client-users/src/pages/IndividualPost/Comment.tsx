import { commentsProps } from "../../models/interface";
import { FC } from "react";
import styles from "./Comment.module.css";
import he from "he";

interface CommentProps {
  comment: commentsProps;
}

const CommentComponent: FC<CommentProps> = ({ comment }) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const commentDate = new Date(comment.timestamp);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    timeZone: userTimeZone || "UTC",
  }).format(commentDate);

  return (
    <div className={styles["comment-wrapper"]}>
      <div className={styles["comment"]}>
        <div className={styles["same-line"]}>
          <p className={styles.username}>{he.decode(comment.username)}</p>
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <p className={styles.message}>{he.decode(comment.message)}</p>
      </div>
    </div>
  );
};

export default CommentComponent;
