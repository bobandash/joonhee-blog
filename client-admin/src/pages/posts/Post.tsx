import { FC } from "react";
import { PostItemsProps } from "./Post.interface";
import styles from "./Post.module.css";
import he from "he";
import { getJwt } from "../../utils/jwt";
import { Redirect404 } from "../../utils/redirect";
import { useNavigate } from "react-router-dom";

const PostComponent: FC<PostItemsProps> = ({
  post,
  toggleModal,
  setPostToDelete,
  updatePosts,
}) => {
  const navigate = useNavigate();
  function editPost() {
    navigate("/post/edit/" + post.id);
  }

  async function toggleVisibility() {
    const postId = post.id;
    try {
      await fetch(
        `${
          import.meta.env.VITE_BACKEND_PORT
        }/posts/${postId}/update/visibility`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: "Bearer " + getJwt(),
          },
        }
      );
      await updatePosts();
    } catch {
      Redirect404();
    }
  }

  return (
    <>
      <div className={styles.post}>
        <div className={styles["content-container"]}>
          <h1 className={styles.title}>{he.decode(post.title)}</h1>
          <h2 className={styles.date}>{post.dateFormatted}</h2>
          <p className={styles.summary}>{he.decode(post.summary)}</p>
          <div className={styles["post-buttons-container"]}>
            <button className={styles["post-edit"]} onClick={() => editPost()}>
              <i className="fa-solid fa-pen-to-square"></i> Edit
            </button>
            <button
              onClick={async () => {
                await toggleVisibility();
              }}
              className={styles["post-visible"]}
            >
              {post.isVisible ? (
                <>
                  <i className="fa-solid fa-eye"></i>
                  <span> Visible</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-eye-slash"></i>
                  <span> Hidden</span>
                </>
              )}
            </button>
            <button
              className={styles["post-delete"]}
              onClick={() => {
                toggleModal();
                setPostToDelete(post);
              }}
            >
              <i className="fa-solid fa-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComponent;
