export interface postProps {
  title: string;
  content: string;
  summary: string;
  isVisible: boolean;
  dateFormatted: string;
  id: string;
  timestamp: Date;
}

export interface commentsProps {
  username: string;
  message: string;
  dateFormatted: string;
  timestamp: Date;
}
