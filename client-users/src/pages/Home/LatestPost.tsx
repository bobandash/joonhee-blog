import styles from './LatestPost.module.css'
//TO-DO: figure out how to cut length of post summary text depending on screen width

function LatestPost({post}){
  return(
    <div className = {styles.post}>
      <div className = {styles["image-container"]}>
        <img src = {post.image}/>
      </div>
      <div className = {styles["post-info-container"]}>
        <h2 className = {styles["post-name"]}>
          <a href = "">{post.name}</a>
        </h2>
        <p className = {styles["post-date"]}>{post.date}</p>
        <p className = {styles["post-summary"]}>{post.summary}</p>
      </div>
    </div>
  )
}

export default LatestPost;