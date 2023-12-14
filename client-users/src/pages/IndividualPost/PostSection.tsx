import { FC } from "react";
import { postProps } from "../../models/interface";
import he from "he";
import Parser from "html-react-parser";
import styles from "./PostSection.module.css";
import { Link } from "react-router-dom";

interface PostSectionProps {
  post: postProps;
}

const PostSection: FC<PostSectionProps> = ({ post }) => {
  const { dateFormatted, title, content, isVisible } = { ...post };

  if (!isVisible) {
    return <div>404</div>;
  }

  return (
    <section className={styles.post}>
      <h1 className={styles.title}>{he.decode(title)}</h1>
      <p className={styles.author}>
        By <Link to="/about">Joonhee Bock</Link>
      </p>
      <p className={styles.date}>Posted: {dateFormatted}</p>
      <div className={styles["post-contents"]}>
        {Parser(he.decode(content))}
      </div>
    </section>
  );
};

export default PostSection;
