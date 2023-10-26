export interface PostItemsProps {
  post: PostItems,
  toggleModal: () => void,
  setPostToDelete: (post: PostItems) => void,
  updatePosts: () => Promise<void>;
}

export interface DeleteModalProps {
  post: PostItems,
  toggleModal: () => void;
  updatePosts: () => Promise<void>;
}

export interface PostItems {
  title: string,
  summary: string,
  content: string,
  dateFormatted: string,
  id: string,
  isVisible: boolean,
}