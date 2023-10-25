import Header from '../components/Header'
import SignInForm from '../pages/sign-in/SignInForm';
import Footer from '../components/Footer';
import Posts from '../pages/posts/Posts';
import { useState, useEffect } from 'react';
import { navItems } from '../utils/constants';
import { redirect404 } from '../utils/redirect';

function App() {
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

  if(!isSignedIn){
    return (
      <>
        <Header 
          isSignedIn = {false}
          active = {navItems.POSTS} 
        />
        <SignInForm getSignedInStatus = {getSignedInStatus}/>
        <Footer isAbsolute = {true}/>
      </>
    )
  }

  return (
    <>
      <Header isSignedIn = {isSignedIn} active = {navItems.POSTS}  />
      <Posts />
      <Footer isAbsolute = {false}/>
    </>
  )
}

export default App;
