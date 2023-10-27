import Header from '../components/Header'
import SignInForm from '../pages/sign-in/SignInForm';
import Footer from '../components/Footer';
import Posts from '../pages/posts/Posts';
import { navItems } from '../utils/constants';
import { SignedInContext } from './context';
import {useContext} from 'react'

function App() {
  const {isSignedIn, getSignedInStatus} = useContext(SignedInContext);

  if(!isSignedIn){
    return (
      <>
        <Header active = {navItems.POSTS} />
        <SignInForm getSignedInStatus = {getSignedInStatus}/>
        <Footer isAbsolute = {true}/>
      </>
    )
  }

  return (
    <>
      <Header active = {navItems.POSTS}  />
      <Posts />
      <Footer isAbsolute = {false}/>
    </>
  )
}

export default App;
