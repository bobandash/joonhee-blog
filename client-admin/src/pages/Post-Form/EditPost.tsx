import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { navItems } from "../../utils/constants";
import EditPostForm from "./EditPostForm";

const EditPostPage = () => {
  return(
    <>
      <Header active = {navItems.POSTS}/>
        <div className="container">
          <EditPostForm />
        </div>
      <Footer isAbsolute = {false} />
    </>
  )
}

export default EditPostPage;