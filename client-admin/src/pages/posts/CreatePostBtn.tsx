import { useNavigate } from "react-router-dom";
import styles from "./CreatePostBtn.module.css";

const CreatePostBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className={`generic-btn ${styles["action-btn"]}`}
      onClick={() => {
        navigate("/post/create");
      }}
    >
      Create Post
    </button>
  );
};

export default CreatePostBtn;
