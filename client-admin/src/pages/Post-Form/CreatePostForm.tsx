/* export interface PostItems {
  title: string,
  summary: string,
  content: string,
  dateFormatted: string,
  id: string,
  isVisible: boolean,
}
 */
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import '../../main/quill.css'
import formStyles from './Form.module.css'

const PostForm = () => {
  const [value, setValue] = useState('');
  console.log(value);
  const toolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ script:  "sub" }, { script:  "super" }],
    ["blockquote"],
    [{ list:  "ordered" }, { list:  "bullet" }],
    [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ];
  const module = {
    toolbar: toolbarOptions,
  }

  return (
    <>
      <form className = {formStyles.form}>
        <label htmlFor="title">Title:</label>
        <input type = "text" id = "title" name = "title"/>
        <label htmlFor="summary">Summary:</label>
        <textarea rows = {3}>
        </textarea>
        <label htmlFor="content">Content:</label>
        <ReactQuill 
          theme="snow" 
          value={value} 
          onChange={setValue} 
          modules = {module}
        />
        <button type="submit">Create Post</button>       
      </form>
    </>
  )
}

export default PostForm;