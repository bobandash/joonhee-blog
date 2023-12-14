import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import AllPostsPage from "./pages/PostsList/AllPostsPage";
import PostPage from "./pages/IndividualPost/PostPage";
import About from "./pages/About/About";
import ContactPage from "./pages/Contact/ContactPage";
import ErrorPage from "./pages/Error/ErrorPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="posts/:postId" element={<PostPage />} />
      <Route path="posts" element={<AllPostsPage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
