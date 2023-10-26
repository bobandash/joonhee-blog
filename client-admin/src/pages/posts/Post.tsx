import { FC } from 'react'
import { PostItemsProps } from './Post.interface';
import styles from './Post.module.css'
import he from 'he';

const PostComponent: FC<PostItemsProps> = ({post, toggleModal, setPostToDelete}) => {

  function editPost(){
    window.location.href = "/post/" + post.id;
  }

  return (
    <>
      <div className = {styles.post}>
        <div className = {styles["content-container"]}>
          <h1 className = {styles.title}>{he.decode(post.title)}</h1>
          <h2 className = {styles.date}>{post.dateFormatted}</h2>
          <p className = {styles.summary}>{he.decode(post.summary)}</p>
          <div className = {styles["post-buttons-container"]}>
            <button className = {styles["post-edit"]} onClick = {() => editPost()}>
              <i className="fa-solid fa-pen-to-square"></i> Edit
            </button>
            {post.isVisible ? 
              <button className = {styles["post-visible"]}>
                <i className = "fa-solid fa-eye"></i> Visible
              </button>
            :
              <button className = {styles["post-visible"]}>
                <i className = "fa-solid fa-eye-slash"></i> Hidden
              </button>
            }
            <button className = {styles["post-delete"]} onClick = {() => {
              toggleModal();
              setPostToDelete(post);
            }}>
              <i className='fa-solid fa-trash'></i> Delete
            </button>
        </div>
        </div>
      </div>
    </>

  )
}

export default PostComponent;
