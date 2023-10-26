import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import '../../main/quill.css'
import formStyles from './Form.module.css'
import { getJwt } from "../../utils/jwt";
import { redirect404 } from "../../utils/redirect";
import RequiredAsterisk from "../../components/RequiredAsterisk";
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { module } from "../../utils/quill.config";

const PostForm = () => {
  // TO-DO: study useReducers and check whether or not you can use reducers to update the object state
  const {postId} = useParams();
  const samplePostObject = {
    title: '',
    summary: '',
    content: ''
  }
  const [hasErrors, setHasErrors] = useState(false);
  const [post, setPost] = useState(samplePostObject);
  const [hasBeenUpdated, setHasBeenUpdated] = useState(false);

  console.log(post);

  useEffect(() => {
    async function fetchPost(){
      const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts/${postId}`, {
        method: "GET",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'authorization': 'Bearer ' + getJwt()
        }
      })
      const data = await response.json();
      setPost({
        title: data.title,
        summary: data.summary,
        content: data.content
      })
    }
    fetchPost();
  }, [postId])

  async function updatePost(){
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/${postId}/update`, {
        method: "PUT",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'authorization': 'Bearer ' + getJwt()
        },
        body: JSON.stringify({
          title: post.title,
          summary: post.summary,
          content: post.content
        })
      })
      // case invalid inputs
      if(!response.ok){
        setHasErrors(true);
      } else {
        setHasBeenUpdated(true);
      }
    } catch {
      redirect404();
    }
  }

/*   // functions to change the post method
  function changeTitle(e: React.FormEvent<HTMLInputElement>){
    setPost(prevPost => ({ ...prevPost, title: e.currentTarget.value }));
    setHasBeenUpdated(false);
    setHasErrors(false);
  }

  function changeSummary(e: React.FormEvent<HTMLTextAreaElement>){
    setPost(prevPost => ({ ...prevPost, summary: e.currentTarget.value }));
    setHasBeenUpdated(false);
    setHasErrors(false);
  }

  function changeContent(value: string){
    setPost(prevPost => ({ ...prevPost, content: value }));
    setHasBeenUpdated(false);
    setHasErrors(false);
  } */

  return (
    <>
      {hasBeenUpdated && <span className = "success">Your post has been successfully created.</span>}
      {hasErrors && <span className = "error">Please make sure all fields are filled out.</span>}
      <form className = {formStyles.form}>
        <label htmlFor="title">Title<RequiredAsterisk /></label>
        <input type = "text" id = "title" name = "title" value = {post.title}/>
        <label htmlFor="summary">Summary<RequiredAsterisk /></label>
        <textarea rows = {3} name = "summary" value = {post.summary} id = "summary">
        </textarea>
        <label htmlFor="content">Content<RequiredAsterisk /></label>
        <ReactQuill 
          theme="snow" 
          value={post.summary} 
          modules = {module}
        />
        <button type="submit" onClick = {async (e) => {
          e.preventDefault();
          await updatePost();
        }}>
          Update Post</button>       
      </form>
    </>
  )
}

export default PostForm;