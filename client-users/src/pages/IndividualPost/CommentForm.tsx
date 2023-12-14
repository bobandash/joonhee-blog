import { useParams } from "react-router-dom";
import styles from "./CommentForm.module.css";
import { useState, FC } from "react";

interface CommentFormProps {
  getLatestComments: () => Promise<void>;
}

const CommentForm: FC<CommentFormProps> = ({ getLatestComments }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const { postId } = useParams();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function postComment() {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_PORT}/posts/${postId}/comments/create`,
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          username: username,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      setError(true);
    } else {
      await getLatestComments();
      setSuccess(true);
      setMessage("");
      setUsername("");
    }
  }

  function handleChangeUsername(e: React.FormEvent<HTMLInputElement>) {
    setUsername(e.currentTarget.value);
    setSuccess(false);
    setError(false);
  }

  function handleMessage(e: React.FormEvent<HTMLTextAreaElement>) {
    setMessage(e.currentTarget.value);
    setSuccess(false);
    setError(false);
  }

  return (
    <>
      <form className={styles["comment-form"]}>
        {success && (
          <p className="success">Success: Your comment was posted.</p>
        )}
        {error && <p className="error">Error: Message cannot be empty.</p>}
        <h2>Write a comment</h2>
        <input
          className="border-[1px] border-black"
          type="text"
          name="username"
          placeholder="Username (optional)"
          autoComplete="off"
          onChange={handleChangeUsername}
          value={username}
        />
        <textarea
          className="border-[1px] border-black resize-none"
          name="message"
          placeholder="Message"
          rows={3}
          onChange={handleMessage}
          value={message}
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            await postComment();
          }}
          type="submit"
        >
          Post Comment
        </button>
      </form>
    </>
  );
};

export default CommentForm;
