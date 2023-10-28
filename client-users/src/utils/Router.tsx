import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.tsx'
import PostPage from "../pages/Posts/PostPage.tsx"
import About from "../pages/About/About.tsx"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
/*     {
      path: "/posts",
      element: <AllPostsPage />
    },  */
    {
      path: "/:postId",
      element: <PostPage />
    }, {
      path: "/about",
      element: <About />
    }
  ])

  return <RouterProvider router = {router} />;
}

export default Router;