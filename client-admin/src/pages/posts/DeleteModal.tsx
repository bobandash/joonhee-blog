import {FC} from 'react'
import { DeleteModalProps } from './Post.interface';
import { getJwt } from '../../utils/jwt';
import styles from './DeleteModal.module.css'

const DeleteModal : FC<DeleteModalProps>= ({post, toggleModal, updatePosts}) => {
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

  return (
    <div className = {styles["full-screen"]}>
      <div className = {styles["modal-container"]}>
        <div className = {styles["modal-contents"]}>
          <h1 className = {styles["post-title"]}>{post.title}</h1>
          <p className = {styles["confirmation-message"]}>Are you sure you want to delete this post?</p>
          <h2 className = {styles["post-type"]}>Content:</h2>
          <p className = {styles["post-content"]}>{post.content}</p>
          <div className = {styles["button-container"]}>
            <button className = {styles["cancel-btn"]} onClick = {toggleModal}>Cancel</button>
            <button 
              className = {styles["delete-btn"]} 
              onClick = { async () => 
                {
                  await deletePost();
                  toggleModal();
                  updatePosts();
                }
              }>Delete</button>
          </div>
        </div>
      </div>
    </div>

  )

}

export default DeleteModal;