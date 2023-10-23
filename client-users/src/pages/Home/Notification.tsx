import styles from './Notification.module.css'

function Notification(){
  return (
    <section className = {styles["section-background"]}>
      <form className = {styles["email-newsletter"]}>
        <label htmlFor = "email">Join My Journey</label>
        <div className = {styles["input-and-button"]}>
          <input type = "email" name = "email" id = "email"/>
          <button>Subscribe</button>
        </div>
      </form>
    </section>
  )
}

export default Notification;