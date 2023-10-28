import CommentForm from "./CommentForm"
import { commentsProps } from "../../models/interface"
import {FC} from 'react'
import CommentComponent from "./Comment"
import styles from './CommentSection.module.css'

interface CommentSectionProps {
  comments: commentsProps[],
  getLatestComments: () => Promise<void>
}

const CommentSection: FC<CommentSectionProps>= ({comments, getLatestComments}) => {
  return(
    <>
      <section className = {styles.comment}>
        <CommentForm getLatestComments = {getLatestComments}/>
        <h1>Comments</h1>
        {comments.length === 0 && 
          <h2>Be the first to comment!</h2>
        }
        {comments.map((comment) => <CommentComponent comment = {comment} />)}
      </section>
    </>
  )
}

export default CommentSection