import { FC } from 'react'
import styles from './Comment.module.css'
import he from 'he';
import { CommentItemsProp } from './Comments.interface';
import { redirect404 } from '../../utils/redirect';
import { getJwt } from '../../utils/jwt';

const CommentComponent: FC<CommentItemsProp> = ({comment, getComments}) => {
  const postEditLink = "post/edit/" + comment.post.id;

  async function handleDelete(){
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts/${comment.post.id}/comments/${comment.id}/delete`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'authorization': 'bearer ' + getJwt()
        },
      })
      if(response.ok){
        getComments();
      } else {
        console.log(response);
      }
    }
    catch {
      redirect404();
    }
  }
  
  return(
    <>
      <div className = {styles.comment}>
        <div className = {styles["content-container"]}>
          <p className = {styles["note"]}>
            On Post: <a href = {postEditLink} target = "_blank">{comment.post.title}</a>
          </p>
          <p className = {styles["note"]}>
            Commented on {comment.dateFormatted}
          </p>
          <h2>Message:</h2>
          <p className = {styles.title}>{he.decode(comment.message)}</p>
          <h2>By:</h2>
          <p>{comment.username}</p>
          <div className = {styles["comment-buttons-container"]}>
            <button className = {styles["comment-delete"]} onClick = {handleDelete}>
              <i className='fa-solid fa-trash'></i> Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentComponent;

