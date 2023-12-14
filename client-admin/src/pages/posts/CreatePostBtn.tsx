import { RedirectCreatePost } from "../../utils/redirect";
import styles from "./CreatePostBtn.module.css";

const CreatePostBtn = () => {
  return (
    <button
      className={`generic-btn ${styles["action-btn"]}`}
      onClick={RedirectCreatePost}
    >
      Create Post
    </button>
  );
};

export default CreatePostBtn;
