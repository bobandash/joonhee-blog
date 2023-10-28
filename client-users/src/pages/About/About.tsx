import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from './About.module.css'
const About = () => {
  return(
    <>
      <Header />
      <div className= {`container ${styles["about-container"]}`}>
        <h1 className = 'section-title'>About</h1>
        <div className = {styles.content}>
          <div>
            <p>I'm Joonhee Bock, and my greatest dreams and aspirations revolve around teaching children and leaving a lasting impact on the world. I firmly believe that nurturing young minds is the most profound way to shape a better future.  My love for the world of cinema is unmatched, with every frame, dialogue, and story leaving an indelible mark on my heart. Whether I'm exploring the depth of character development, analyzing plot twists, or simply enjoying the magic of the silver screen, cinema is a constant source of inspiration and wonder for me.</p>
            <p>My academic journey took me through the hallowed halls of Notre Dame University, where I earned a bachelor’s degree in economics and education, complemented by a minor in Korean. This academic foundation has equipped me with the knowledge and skills to empower the next generation and contribute positively to society.  Currently, I find myself in Kosovo, where I'm passionately teaching English to Kosovar children. This experience is the realization of my dreams, as I work to ignite the spark of knowledge and curiosity in these young minds. Every day, I'm reminded of the profound impact education can have on shaping lives and building a brighter future.</p>
            <p>While I have many other interests, including indulging in video games and appreciating the talents of female musicians and artists like Laufey and Tzuyu from Twice, my true calling lies in the classroom, fostering a love for learning in the hearts of the next generation. Through education and the magic of cinema, I hope to leave a meaningful mark on the world.</p> 
            <p>If you have any questions about my journey or want to connect, please feel free to <a href = "/contact">contact me here</a>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;