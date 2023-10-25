export interface PostItemsProps {
  post: PostItems;
}

export interface PostItems {
  title: string,
  summary: string,
  content: string,
  dateFormatted: string,
  id: string,
  isVisible: boolean,
}