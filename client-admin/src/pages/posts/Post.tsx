import { FC} from 'react'
import { PostItemsProps } from './Post.interface';
import { getJwt } from '../../utils/jwt';
import styles from './Post.module.css'

const PostComponent: FC<PostItemsProps> = ({post}) => {
  async function deletePost(){
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts/${post.id}/delete`, {
        method: "DELETE",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'authorization': 'bearer ' + getJwt()
        }
      }) 
    } catch {
      console.log('hi');
    } 
  }

  function editPost(){
    window.location.href = "/post/" + post.id;
  }

  return (
    <div className = {styles.post}>
      <div className = {styles["content-container"]}>
        <h1 className = {styles.title}>{post.title}</h1>
        <h2 className = {styles.date}>{post.dateFormatted}</h2>
        <p className = {styles.summary}>{post.summary}</p>
        <div className = {styles["post-buttons-container"]}>
          <button className = {styles["post-delete"]} onClick ={async () => {await deletePost();}}>
            <i className='fa-solid fa-trash'></i> Delete
          </button>
          <button className = {styles["post-edit"]} onClick = {() => editPost()}>
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </button>
      </div>
      </div>
    </div>
  )
}

export default PostComponent;
