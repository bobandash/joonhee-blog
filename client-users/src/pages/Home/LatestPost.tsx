import styles from './LatestPost.module.css'
import { postProps } from '../../models/interface';
import {FC, useEffect} from 'react'
import he from 'he';
import Aos from 'aos'
import 'aos/dist/aos.css'

interface LatestPostProps {
  post: postProps;
}

const LatestPost: FC<LatestPostProps> = ({post}) => {
  function redirectPost(){
    window.location.href = `/posts/${post.id}`;
  }

  const date = new Date(he.decode(post.timestamp)).toLocaleString();
  
  useEffect(() => {
    Aos.init({
      once: true
    });
  }, [])

  return(
    <div onClick = {redirectPost} className = {styles.post} data-aos = "fade-right" data-aos-delay = "50" data-aos-duration="1000">
      <h2 className = {styles["post-name"]}>{he.decode(post.title)}</h2>
      <p className = {styles["post-date"]}>Posted on: {date}</p>
      <p className = {styles["post-summary"]}>{he.decode(post.summary)}</p>
    </div>
  )
}

export default LatestPost;