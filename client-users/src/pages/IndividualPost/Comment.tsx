import { commentsProps } from "../../models/interface";
import { FC } from "react";
import styles from "./Comment.module.css";
import he from "he";
import { formatDate } from "../../utils/formatDate";

interface CommentProps {
  comment: commentsProps;
}

const CommentComponent: FC<CommentProps> = ({ comment }) => {
  const formattedDate = formatDate(comment.timestamp);
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
