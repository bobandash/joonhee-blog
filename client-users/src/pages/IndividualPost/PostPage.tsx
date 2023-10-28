import { useParams } from "react-router-dom";
import Header from "../../components/Header"
import {useState, useEffect} from 'react';
import {postProps, commentsProps} from '../../models/interface'
import Footer from "../../components/Footer";
import PostSection from "./PostSection";
import styles from './PostPage.module.css'
import CommentSection from "./CommentSection";

const PostPage = () => {
  const samplePost = {
    title: '',
    content: '',
    isVisible: true,
    dateFormatted: '',
    summary: ''
  }

  const {postId} = useParams();
  const [post, setPost] = useState<postProps>(samplePost);
  const [comments, setComments] = useState<commentsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function updateComments(){
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts/${postId}/comments`, {
        method: "GET",
        mode: "cors"
      })
      const data = await response.json();
      setComments(data);
    } catch {
      // TO-DO: add 404 page
    }
  }  

  useEffect(() => {
    // functions for getting specific post and specific post comments
    async function getPost(){
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts/${postId}`, {
          method: "GET",
          mode: "cors"
        })
        const data = await response.json();
        setPost(data);
      } catch {
        // TO-DO: add 404 page
      }
    }

    async function getComments(){
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts/${postId}/comments`, {
          method: "GET",
          mode: "cors"
        })
        const data = await response.json();
        setComments(data);
      } catch {
        // TO-DO: add 404 page
      }
    }  

    Promise.all([
      getPost(),
      getComments()
    ])
    setIsLoading(false);
  }, [postId])

  if(!post.isVisible){
    // TO-DO: add 404 error
    return(<div>404</div>);
  }

  if(isLoading){
    return(<div>Loading</div>)
  }

  return(
    <>
      <div className= {styles["bg-color-container"]}>
        <Header />
        <div className="container">
          <PostSection post = {post}/>
          <CommentSection comments = {comments} getLatestComments = {updateComments} />
        </div>
        <Footer />
      </div>

    </>

  )
}

export default PostPage;