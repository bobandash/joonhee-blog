import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LandingScreen from "./LandingScreen";
import LatestPosts from "./LatestPosts";
import Notification from "./Notification";
import { useState, useEffect } from "react";
import { postProps } from "../../models/interface";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ErrorPage from "../Error/ErrorPage";
import Introduction from "./Introduction/index";

function Homepage() {
  const [posts, setPosts] = useState<postProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    async function getPosts() {
      try {
        const params = {
          limit: "4",
          sort: "descending",
        };
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_PORT}/posts?` +
            new URLSearchParams(params),
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
    <LoadingScreen />;
  }

  if (hasError) {
    <ErrorPage errorStatus={500} />;
  }

  return (
    <>
      <Header />
      <div className="page-animation">
        <LandingScreen />
        <Introduction />
        <LatestPosts posts={posts} />
        <Notification />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
