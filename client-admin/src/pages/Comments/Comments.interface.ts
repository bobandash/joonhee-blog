import { PostItems } from "../posts/Post.interface"

export interface CommentsProps {
  username: string,
  message: string,
  dateFormatted: string,
  post: PostItems,
  id: string
}

export interface CommentItemsProp {
  comment: CommentsProps,
  getComments: () => void
}