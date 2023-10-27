import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.tsx'
import ErrorPage from "../pages/Errors/404.tsx"
import CreatePostForm from "../pages/Post-Form/CreatePost.tsx"
import EditPostPage from '../pages/Post-Form/EditPost.tsx'
import CommentsPage from "../pages/Comments/Comments.tsx"
import { useState, useEffect } from 'react';
import { redirect404 } from "../utils/redirect.ts"
import { SignedInContext } from "./context.tsx"

const Router = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  async function getSignedInStatus(){
    try {
      if(localStorage.getItem('jwt') !== ""){
        const response = await fetch(import.meta.env.VITE_BACKEND_PORT + "/admin/signed-in-status", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "authorization": "bearer " + localStorage.getItem('jwt')
          }
        })
        if(response.status === 403){
          setIsSignedIn(false);
        } else if (response.ok) {
          setIsSignedIn(true);
        }
      }
    } catch {
      redirect404();
    }
  }

  useEffect(() => {
    getSignedInStatus();
  }, [])

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
    }, 
    {
      path: "/post/edit/:postId",
      element: <EditPostPage />
    },
    {
      path: '/comments',
      element: <CommentsPage />
    }
  ])

  return (
    <SignedInContext.Provider value= {{isSignedIn, getSignedInStatus}}>
      <RouterProvider router = {router} />
    </SignedInContext.Provider>
  );
}

export default Router;