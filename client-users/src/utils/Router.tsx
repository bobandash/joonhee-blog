import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.tsx'
import About from "../pages/About/About.tsx"
import ErrorPage from "../pages/Error/ErrorPage.tsx"
import AllPostsPage from "../pages/PostsList/AllPostsPage.tsx"
import PostPage from "../pages/IndividualPost/PostPage.tsx"
import ContactPage from "../pages/Contact/ContactPage.tsx"

// TO-DO: change postId to nested route
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />
    },
    {
      path: "/posts",
      element: <AllPostsPage />
    },
    {
      path: "/:postId",
      element: <PostPage />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <ContactPage />
    },
    {
      path: "/404",
      element: <ErrorPage />
    }
  ])

  return <RouterProvider router = {router} />;
}

export default Router;