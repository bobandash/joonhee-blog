import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Joonhee from "../../assets/joonhee_image.jpeg";
import PageName from "../../components/PageName";

const About = () => {
  return (
    <>
      <Header />
      <div className="content-container mx-auto page-animation">
        <PageName name={"About"} />
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <img
            className="block md:max-w-[50%]"
            src={Joonhee}
            alt="joonhee picture"
            loading="eager"
          />
          <div>
            <p className="pb-3">
              Hi! My name is Joonhee Bock and I recently graduated from
              University of Notre Dame, majoring in Economics and Education. I
              am currently a Peace Corps volunteer in Kosovo as a TEFL
              volunteer. I love to take photos, read, make music, and watch
              movies.
            </p>
            <p className="pb-3">
              If you have any questions about my journey or want to connect,
              please feel free to{" "}
              <Link className="text-kosovo hover:underline" to="/contact">
                contact me here
              </Link>
              .
            </p>
            <p className="pb-3">
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
