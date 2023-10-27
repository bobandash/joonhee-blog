import { useState, useEffect } from "react";
import CommentComponent from "./CommentComponent";
import { CommentsProps } from './Comments.interface'
import { redirect404 } from "../../utils/redirect";
import { getJwt } from "../../utils/jwt";
import Header from "../../components/Header";
import { navItems } from "../../utils/constants";
import Footer from "../../components/Footer";

const CommentsPage = () => {
  const [comments, setComments] = useState<CommentsProps[]>([]);
  
  // Function that needs to be called to update posts
  async function getComments(){
    try{
      const response = await fetch(import.meta.env.VITE_BACKEND_PORT + '/comments', {
        method: "GET",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'authorization': 'bearer ' + getJwt()
        },
      })
      const data = await response.json();
      setComments(data);
    }
    catch {
      redirect404();
    }
  }

  useEffect(() => {
    getComments();
  }, [])

  return (
    <>
      <Header active = {navItems.COMMENTS}/>
      <div className = "container">
        {comments.map((comment) => 
          <CommentComponent
            comment = {comment} 
            key = {comment.id} 
            getComments = {getComments}
          />
          )}
      </div>
      <Footer isAbsolute = {false}/>
    </>
  )
}

export default CommentsPage;