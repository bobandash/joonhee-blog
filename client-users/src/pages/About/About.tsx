import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <Header />
      <div className={`container ${styles["about-container"]}`}>
        <h1 className="section-title">About</h1>
        <div className={styles.content}>
          <div>
            <p>
              Hi! My name is Joonhee Bock and I recently graduated from
              University of Notre Dame, majoring in Economics and Education. I
              am currently a Peace Corps volunteer in Kosovo as a TEFL
              volunteer. I love to take photos, read, make music, and watch
              movies.
            </p>

            <p>
              If you have any questions about my journey or want to connect,
              please feel free to <a href="/contact">contact me here</a>.
            </p>
            <p>
              The content of this website is mine alone and does not reflect the
              views of the U.S. Government, the Peace Corps, or the Republic of
              Kosovo Government.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
