import { FC } from "react";
import he from "he";
import { MessageProps } from "./interface/messageProps";
import styles from "./Message.module.css";

interface MessageComponentProps {
  message: MessageProps;
}

const MessageComponent: FC<MessageComponentProps> = ({ message }) => {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles["content-container"]}>
          <p className={styles["note"]}></p>
          <p className={styles["note"]}>Received on {message.dateFormatted}</p>
          <h2>Email:</h2>
          <p className={styles.title}>{he.decode(message.email)}</p>
          <h2>Subject Line:</h2>
          <p>{he.decode(message.subjectLine)}</p>
          <h2>Message:</h2>
          <p className={styles.title}>{he.decode(message.message)}</p>
        </div>
      </div>
    </>
  );
};

export default MessageComponent;
