import styles from './LatestPosts.module.css'
import LatestPost from './LatestPost'

function LatestPosts({posts}){
  return(
    <section className = {styles["latest-posts"]}>
      <div className = {styles["container"]}>
        <h1 className = {styles["section-header"]}>Latest Posts</h1>
        {posts.map(post => (
          <LatestPost post = {post} />
        ))}
      </div>
    </section>

  )
}

export default LatestPosts;