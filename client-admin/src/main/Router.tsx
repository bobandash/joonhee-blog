import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.tsx'
import ErrorPage from "../pages/Errors/404.tsx"
import CreatePostForm from "../pages/Post-Form/CreatePost.tsx"

const Router = () => {
  // TO-DO: push the isSignedIn state up to Router, try using useContext
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/404",
      element: <ErrorPage/>
    },
    {
      path: "/post/create",
      element: <CreatePostForm />
    }
  ])

  return <RouterProvider router = {router} />;
}

export default Router;