import { postProps } from "../../models/interface";
import { FC, useEffect } from "react";
import he from "he";
import styles from "./Post.module.css";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

interface PostComponentProps {
  post: postProps;
}

const PostComponent: FC<PostComponentProps> = ({ post }) => {
  const navigate = useNavigate();
  const formattedDate = formatDate(post.timestamp);
  function redirectPost() {
    navigate(`/posts/${post.id}`);
  }
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div
      onClick={redirectPost}
      className={styles["post-container"]}
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <h2 className={styles["title"]}>{he.decode(post.title)}</h2>
      <h3 className={styles["date"]}>{formattedDate}</h3>
      <p className={styles["summary"]}>{he.decode(post.summary)}</p>
    </div>
  );
};

export default PostComponent;
