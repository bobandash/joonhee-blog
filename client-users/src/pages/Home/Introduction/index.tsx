import { Link } from "react-router-dom";
import Joonhee from "../../../assets/joonhee_full.jpeg";

const Introduction = () => {
  return (
    <div className="bg-white py-2">
      <div className="content-container flex flex-col md:flex-row bg-white">
        <div className="flex flex-col md:flex-row gap-7 md:gap-10">
          <img
            className="hidden md:block md:max-w-[50%]"
            src={Joonhee}
            alt="joonhee picture"
          />
          <div className="flex flex-col justify-center">
            <h1 className="pb-3 text-3xl font-bold text-center">
              Welcome to my blog!
            </h1>
            <p className="pb-3">
              My name is Joonhee Bock, and I'm currently serving in the Peace
              Corps. This blog is meant to document my new experiences in Kosovo
              from 2023 - 2025.
            </p>
            <p className="pb-3">
              If you have any questions for me, please feel free to{" "}
              <Link className="text-kosovo hover:underline" to="/contact">
                contact me here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
