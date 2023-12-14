import styles from "./LatestPost.module.css";
import { postProps } from "../../models/interface";
import { FC, useEffect } from "react";
import he from "he";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

interface LatestPostProps {
  post: postProps;
}

const LatestPost: FC<LatestPostProps> = ({ post }) => {
  const navigate = useNavigate();
  function redirectPost() {
    navigate(`/posts/${post.id}`);
  }
  const formattedDate = formatDate(post.timestamp);

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div
      onClick={redirectPost}
      className={styles.post}
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <h2 className={styles["post-name"]}>{he.decode(post.title)}</h2>
      <p className={styles["post-date"]}>Posted on: {formattedDate}</p>
      <p className={styles["post-summary"]}>{he.decode(post.summary)}</p>
    </div>
  );
};

export default LatestPost;
