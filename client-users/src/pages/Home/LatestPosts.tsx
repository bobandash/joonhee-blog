import styles from './LatestPosts.module.css'
import LatestPost from './LatestPost'
import {FC} from 'react';
import { postProps } from '../../models/interface';

interface LatestPostsProps {
  posts: postProps[]
}

const LatestPosts:FC<LatestPostsProps> = ({posts}) => {
  return(
    <section className = {styles["latest-posts"]}>
      <div className = {styles["container"]}>
        <h1 className = {styles["section-header"]}>Latest Posts</h1>
        <div className = {styles["posts-container"]}>
          {posts.map(post => (
            <LatestPost post = {post} />
          ))}
        </div>
      </div>
    </section>

  )
}

export default LatestPosts;