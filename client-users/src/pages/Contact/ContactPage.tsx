import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ErrorPage from "../Error/ErrorPage";
import styles from './ContactPage.module.css'
import {useState} from 'react'

const ContactPage = () => {
  const sampleMessage = {
    email: '',
    subjectLine: '',
    message: ''
  }
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState(sampleMessage)
  const [isInvalid, setIsInvalid] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  function handleChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const { name, value } = e.target;
    setMessage(prevState => ({
      ...prevState,
      [name]: value
    }))
    setIsInvalid(false);
    setMessageSent(false);
  }

  async function sendMessage(){
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/contact/create`, {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'email': message.email,
          'subjectLine': message.subjectLine,
          'message': message.message 
        })
      })
      if(!response.ok){
        setIsInvalid(true);
      } else {
        setMessageSent(true);
        setMessage(sampleMessage);
      }
    } catch {
      setHasError(true);
    }
  }

  if(hasError){
    return <ErrorPage errorStatus = {500} />
  }

  return (
    <>
      <Header />
      <div className = {`container page-animation`}>
          <h1 className = "section-title">Contact Me</h1>
          <p>Have any questions or want to connect? Feel free to leave me a message, and I'll get back to you as soon as I can!</p>
          <form className = {styles["contact-form"]} noValidate>
            <div className = {styles["content-container"]}>
              <label htmlFor="email">Email:</label>
              <input type = "email" name = "email" id = "email" autoComplete="off" value = {message.email} onChange = {(handleChange)}/>
              <label htmlFor="subjectLine">Subject Line:</label>
              <input type = "text" name = "subjectLine" id = "subjectLine" autoComplete="off" value = {message.subjectLine} onChange = {handleChange}/>
              <label htmlFor="message">Message:</label>
              <textarea rows={5} name = "message" id = "message" value = {message.message} onChange = {handleChange}/>
              <button onClick = {async (e) => {
                e.preventDefault();
                await sendMessage();
              }}>Send Message</button>
            </div>
          </form>
        </div>
        {messageSent && <span className = "success">Your message has been sent to Joonhee.</span>}
        {isInvalid && <span className = "error">Error: Make sure all the fields are filled out and in the correct format.</span>}
      <Footer />
    </>
  )
}

export default ContactPage;
