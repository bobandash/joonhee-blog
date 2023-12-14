import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { postProps, commentsProps } from "../../models/interface";
import Footer from "../../components/Footer";
import PostSection from "./PostSection";
import CommentSection from "./CommentSection";
import ErrorPage from "../Error/ErrorPage";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import styles from "./PostPage.module.css";

const PostPage = () => {
  const samplePost = {
    title: "",
    content: "",
    isVisible: true,
    dateFormatted: "",
    summary: "",
    id: "",
    timestamp: new Date(),
  };

  const { postId } = useParams();
  const [post, setPost] = useState<postProps>(samplePost);
  const [comments, setComments] = useState<commentsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function updateComments() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_PORT}/posts/${postId}/comments`,
        {
          method: "GET",
          mode: "cors",
        }
      );
      const data = await response.json();
      setComments(data);
    } catch {
      setHasError(true);
    }
  }

  useEffect(() => {
    // functions for getting specific post and specific post comments
    async function getPost() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_PORT}/posts/${postId}`,
          {
            method: "GET",
            mode: "cors",
          }
        );
        const data = await response.json();
        setPost(data);
      } catch {
        setHasError(true);
      }
    }

    async function getComments() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_PORT}/posts/${postId}/comments`,
          {
            method: "GET",
            mode: "cors",
          }
        );
        const data = await response.json();
        setComments(data);
      } catch {
        setHasError(true);
      }
    }

    Promise.all([getPost(), getComments()]);
    setIsLoading(false);
  }, [postId]);

  if (!post.isVisible) {
    return <ErrorPage />;
  }

  if (hasError) {
    return <ErrorPage errorStatus={500} />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header />
      <div className="content-container">
        <div className={styles["post-container"]}>
          <PostSection post={post} />
          <CommentSection
            comments={comments}
            getLatestComments={updateComments}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostPage;
