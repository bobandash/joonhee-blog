export interface postProps {
  title: string,
  content: string,
  summary: string,
  isVisible: boolean,
  dateFormatted: string,
  id: string,
  timestamp: string
}

export interface commentsProps {
  username: string,
  message: string,
  dateFormatted: string
}