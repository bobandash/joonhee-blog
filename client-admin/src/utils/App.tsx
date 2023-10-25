import Header from '../components/Header'
import SignInForm from '../pages/sign-in/SignInForm';
import Footer from '../components/Footer';
import Posts from '../pages/posts/Posts';
import { useState, useEffect } from 'react';
import { navItems } from './constants';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  async function getSignedInStatus(){
    if(localStorage.getItem('jwt') !== ""){
      const response = await fetch("http://www.localhost:3000/admin/signed-in-status", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "authorization": "bearer " + localStorage.getItem('jwt')
        }
      })
      console.log(response);
      if(response.status === 403){
        setIsSignedIn(false);
      } else if (response.ok) {
        setIsSignedIn(true);
      }
    }

  }

  useEffect(() => {
    getSignedInStatus();
  }, [])

  return (
    <>
      <Header 
        isSignedIn = {isSignedIn}
        active = {navItems.POSTS}  
      />
      {isSignedIn ?   
        <Posts /> :
        <SignInForm getSignedInStatus = {getSignedInStatus}/>
      }
      
      <Footer />
    </>
  )
}

export default App;
