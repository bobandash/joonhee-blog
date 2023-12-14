import Footer from "../../components/Footer";
import Header from "../../components/Header";
/* import PostList from "./PostList" */
import { useState, useEffect } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ErrorPage from "../Error/ErrorPage";
import PostComponent from "./Post";
import { postProps } from "../../models/interface";
import styles from "./Post.module.css";
import PageName from "../../components/PageName";

function AllPostsPage() {
  const [posts, setPosts] = useState<postProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_PORT}/posts`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        const visiblePosts = data.filter((post: postProps) => post.isVisible);
        setPosts(visiblePosts);
        setIsLoading(false);
      } catch {
        setHasError(true);
        setIsLoading(false);
      }
    }
    getPosts();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (hasError) {
    return <ErrorPage errorStatus={500} />;
  }

  return (
    <>
      <Header />
      <div className="content-container page-animation">
        <PageName name="Posts" />
        <div className={styles["posts-container"]}>
          {posts.map((post) => (
            <PostComponent key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllPostsPage;
