import { useState, useEffect } from "react";
import PostComponent from "./Post";
import { PostItems } from "./Post.interface";
import DeleteModal from "./DeleteModal";
import { redirect404 } from "../../utils/redirect";
import CreatePostBtn from "./CreatePostBtn";
import Searchbar from "../../components/Searchbar";

const Posts = () => {
  const [posts, setPosts] = useState<PostItems[]>([]);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [postToDelete, setPostToDelete] = useState<PostItems>({
    title: '',
    summary: '',
    content: '',
    dateFormatted: '',
    id: '',
    isVisible: true,
  });
  const [titleQuery, setTitleQuery] = useState('');

  function toggleDeleteModal(){
    setDeleteModalActive(!deleteModalActive);
  }

  function setPostInterested(postToDelete : PostItems){
    setPostToDelete({...postToDelete});
  }

  function handleTitleQuery(query: string){
    setTitleQuery(query);
  }

  // Function that needs to be called to update posts
  async function getPosts(){
    try{
      const response = await fetch(import.meta.env.VITE_BACKEND_PORT + '/posts?' + new URLSearchParams({
        title: titleQuery
      }), {
        method: "GET",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      const data = await response.json();
      setPosts(data);
    }
    catch {
      redirect404();
    }
  }
  getPosts();

  useEffect(() => {
    // Function that needs to be called to update posts
    async function getQueryPosts(){
      try{
        const response = await fetch(import.meta.env.VITE_BACKEND_PORT + '/posts?' + new URLSearchParams({
          title: titleQuery
        }), {
          method: "GET",
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        })
        const data = await response.json();
        setPosts(data);
      }
      catch {
        redirect404();
      }
    }
    getQueryPosts();
  }, [titleQuery])

  
  if(deleteModalActive){
    return (<DeleteModal 
      post = {postToDelete} 
      toggleModal = {toggleDeleteModal}
      updatePosts = {getPosts}
    />)
  }

  return (
    <div className = "container">
      <CreatePostBtn />
      <Searchbar handleTitleQuery={handleTitleQuery} />
      {posts.map((post) => 
        <PostComponent 
          post = {post} 
          key = {post.id} 
          toggleModal = {toggleDeleteModal} 
          setPostToDelete = {setPostInterested} 
          updatePosts = {getPosts}
        />
        )}
    </div>
  )
}

export default Posts;