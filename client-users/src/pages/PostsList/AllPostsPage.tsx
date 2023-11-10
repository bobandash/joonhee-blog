import Footer from "../../components/Footer"
import Header from "../../components/Header"
/* import PostList from "./PostList" */
import {useState, useEffect} from 'react'
import LoadingScreen from "../LoadingScreen/LoadingScreen"
import ErrorPage from "../Error/ErrorPage"
import PostComponent from "./Post"
import { postProps } from "../../models/interface"
import styles from './Post.module.css'

function AllPostsPage() {
  const [posts, setPosts] = useState<postProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    async function getPosts(){
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts`, {
          method: "GET",
          mode: "cors",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json();
        const visiblePosts = data.filter((post : postProps) => post.isVisible);
        setPosts(visiblePosts);
        setIsLoading(false);
      } catch {
        setHasError(true);
        setIsLoading(false);
      }
    }
    getPosts();
  }, [])
  
  if(isLoading){
    return <LoadingScreen />
  }

  if(hasError){
    return <ErrorPage errorStatus={500} />
  }

  return (
    <>
      <Header />
      <div className="container page-animation">
        <h1 className = "section-title">Posts</h1>
        <div className = {styles["posts-container"]}>
          {posts.map((post) => (
            <PostComponent post = {post} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AllPostsPage;
