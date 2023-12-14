import { useEffect, useState } from "react";
import Kosovo1 from "../../assets/kosovo_1.jpeg";
import Kosovo2 from "../../assets/kosovo_2.jpeg";
import Kosovo3 from "../../assets/kosovo_3.jpeg";

/* TO-DO: refactor so that it can take N pictures */
function LandingScreen() {
  function rotateArray(array: Array<string>, count: number) {
    const len = array.length;
    array.push(...array.splice(0, (((-1 * count) % len) + len) % len));
    return array;
  }

  const [currImageOrder, setCurrImageOrder] = useState([
    Kosovo1,
    Kosovo2,
    Kosovo3,
  ]);
  const [currImageIndex, setCurrImageIndex] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      const arrayLength = currImageOrder.length;
      const newArray = rotateArray(currImageOrder, 1);
      setCurrImageOrder([...newArray]);
      setCurrImageIndex((currImageIndex + 1) % arrayLength);
    }, 10000);
    return () => {
      clearInterval(myInterval);
    };
  }, [currImageOrder, currImageIndex]);

  return (
    <div className="relative w-full sm:h-[640px] xl:h-[75vh] sm:my-5 lg:my-8">
      <div className="w-[100%] h-[300px] sm:w-[70%] max-w-[1100px] mx-auto overflow-hidden z-10 sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2 sm:left-1/2 sm:h-[640px] sm:border-4 sm:border-black">
        <img
          src={currImageOrder[0]}
          alt="kosovo peace corps picture"
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className="hidden sm:block sm:absolute sm:left-10 sm:top-1/2 sm:-translate-y-1/2 sm:w-[60%] md:w-[80%] sm:max-w-[1000px] sm:h-[480px] sm:border-black sm:border-2"
        onClick={() => {
          const newArray = rotateArray(currImageOrder, -1);
          const arrayLength = newArray.length;
          setCurrImageOrder([...newArray]);
          setCurrImageIndex((currImageIndex + 1) % arrayLength);
        }}
      >
        <img
          src={currImageOrder[1]}
          alt="kosovo peace corps picture"
          className="object-cover w-full h-full"
        />
      </div>
      <div
        onClick={() => {
          const newArray = rotateArray(currImageOrder, 1);
          const arrayLength = newArray.length;
          setCurrImageOrder([...newArray]);
          setCurrImageIndex((currImageIndex + 1) % arrayLength);
        }}
        className="hidden sm:block sm:absolute sm:right-10 sm:top-1/2 sm:-translate-y-1/2 sm:w-[60%] md:w-[80%] sm:max-w-[1000px] sm:h-[480px] sm:border-black sm:border-2"
      >
        <img
          src={currImageOrder[2]}
          alt="kosovo peace corps picture"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex my-3 mb-4 gap-3 sm:hidden absolute left-1/2 bottom-0 -translate-x-1/2">
        {currImageOrder.map((_image, index) =>
          index == currImageIndex ? (
            <div className="w-3 h-3 rounded-full bg-kosovo_gold hover:cursor-pointer"></div>
          ) : (
            <div
              className="w-3 h3 rounded-full bg-kosovo hover:cursor-pointer"
              onClick={() => {
                const differenceIndex = index - currImageIndex;
                const newArray = rotateArray(currImageOrder, differenceIndex);
                setCurrImageIndex(index);
                setCurrImageOrder([...newArray]);
              }}
            ></div>
          )
        )}
      </div>
    </div>
  );
}

export default LandingScreen;
