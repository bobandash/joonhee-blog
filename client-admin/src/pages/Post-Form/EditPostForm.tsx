import { useState } from "react";
import formStyles from './Form.module.css'
import { getJwt } from "../../utils/jwt";
import { redirect404 } from "../../utils/redirect";
import RequiredAsterisk from "../../components/RequiredAsterisk";
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import RichTextEditor from "./RichTextEditor";
import he from 'he'

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
  function handleChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const { name, value } = e.target;
    setPost(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function handleContentChange(value: string){
    setPost(prevState => ({
      ...prevState,
      content: value
    }))
  }

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
        title: he.decode(data.title),
        summary: he.decode(data.summary),
        content: he.decode(data.content)
      })
    }
    fetchPost();
  }, [postId])

  async function updatePost(){
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts/${postId}/update`, {
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

  return (
    <>
      {hasBeenUpdated && <span className = "success">Your post has been successfully updated.</span>}
      {hasErrors && <span className = "error">Please make sure all fields are filled out.</span>}
      <form className = {formStyles.form} encType="multipart/form-data">
        <label htmlFor="title">Title<RequiredAsterisk /></label>
        <input type = "text" id = "title" name = "title" value = {post.title} onChange = {handleChange}/>
        <label htmlFor="summary">Summary<RequiredAsterisk /></label>
        <textarea rows = {3} name = "summary" value = {post.summary} id = "summary" onChange = {handleChange}>
        </textarea>
        <label htmlFor="content">Content<RequiredAsterisk /></label>
        <RichTextEditor handleChange = {handleContentChange} value = {post.content}/>
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