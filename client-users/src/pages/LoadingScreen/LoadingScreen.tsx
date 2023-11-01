import { BeatLoader } from "react-spinners";
import { CSSProperties } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function LoadingScreen() {
  const override: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      <Header />
      <BeatLoader
        color={"#009959"}
        loading={true}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <Footer />
    </>
  );
}

export default LoadingScreen;