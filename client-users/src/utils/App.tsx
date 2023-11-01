import Header from '../components/Header'
import Footer from '../components/Footer'
import LandingScreen from '../pages/Home/LandingScreen'
import LatestPosts from '../pages/Home/LatestPosts'
import Notification from '../pages/Home/Notification'
import {useState, useEffect} from 'react'
import { postProps } from '../models/interface'
import LoadingScreen from '../pages/LoadingScreen/LoadingScreen'
import ErrorPage from '../pages/Error/ErrorPage'

function App() {

  const [posts, setPosts] = useState<postProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    async function getPosts(){
      try {
        const params = {
          limit: "4",
          sort: "descending"
        }
        const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts?` + new URLSearchParams(params), {
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
    <LoadingScreen />
  }

  if(hasError){
    <ErrorPage errorStatus={500} />
  }

  return (
    <>
      <Header />
      <LandingScreen />
      <LatestPosts posts = {posts} />
      <Notification />
      <Footer />
    </>
  )
}

export default App
