import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.tsx'
import ErrorPage from "../pages/Errors/404.tsx"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/404",
      element: <ErrorPage/>
    }
  ])

  return <RouterProvider router = {router} />;
}

export default Router;