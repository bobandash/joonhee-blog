import { BeatLoader } from "react-spinners";
import { CSSProperties } from "react";

function LoadingDiv() {
  const override: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
    borderColor: "red",
  };

  return (    
    <BeatLoader
      color={"#009959"}
      loading={true}
      cssOverride={override}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default LoadingDiv;