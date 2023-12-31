import { useState, useEffect } from "react";
import CommentComponent from "./CommentComponent";
import { CommentsProps } from "./Comments.interface";
import { Redirect404 } from "../../utils/redirect";
import { getJwt } from "../../utils/jwt";
import Header from "../../components/Header";
import { navItems } from "../../utils/constants";
import Footer from "../../components/Footer";
import LoadingDiv from "../../components/LoadingScreen";

const CommentsPage = () => {
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function that needs to be called to update posts
  async function getComments() {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_PORT + "/comments",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: "bearer " + getJwt(),
          },
        }
      );
      const data = await response.json();
      setComments(data);
      setIsLoading(false);
    } catch {
      Redirect404();
    }
  }

  useEffect(() => {
    getComments();
  }, []);

  if (isLoading) {
    <>
      <Header active={navItems.COMMENTS} />
      <LoadingDiv />
      <Footer isAbsolute={false} />
    </>;
  }

  return (
    <>
      <Header active={navItems.COMMENTS} />
      <div className="container">
        {comments.map((comment) => (
          <CommentComponent
            comment={comment}
            key={comment.id}
            getComments={getComments}
          />
        ))}
      </div>
      <Footer isAbsolute={false} />
    </>
  );
};

export default CommentsPage;
