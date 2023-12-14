import { FC } from "react";

interface PageNameProps {
  name: string;
}
/* TO-DO: figure out how to add animation to this */
const PageName: FC<PageNameProps> = ({ name }) => {
  return (
    <>
      <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <path
            id="line"
            d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            vector-effect="non-scaling-stroke"
          />
        </defs>
      </svg>
      <h1 className="relative text-6xl md:text-7xl text-kosovo uppercase text-center mb-10">
        {name}
        <svg className="button-stroke" viewBox="0 0 154 13">
          <use href="#line"></use>
        </svg>
        <svg className="button-stroke" viewBox="0 0 154 13">
          <use href="#line"></use>
        </svg>
      </h1>
    </>
  );
};

export default PageName;
