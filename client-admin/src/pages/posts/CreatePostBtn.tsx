import { redirectCreatePost } from "../../utils/redirect";
import styles from './CreatePostBtn.module.css'

const CreatePostBtn = () => {
  return(
    <button className = {`generic-btn ${styles["action-btn"]}`} onClick = {redirectCreatePost}>Create Post</button>
  )
}

export default CreatePostBtn;