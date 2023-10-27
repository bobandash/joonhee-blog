import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { navItems } from "../../utils/constants";
import PostForm from "./CreatePostForm";

const PostPage = () => {
  return(
    <>
      <Header active = {navItems.POSTS}/>
        <div className="container">
          <PostForm />
        </div>
      <Footer isAbsolute = {false} />
    </>
  )
}

export default PostPage;