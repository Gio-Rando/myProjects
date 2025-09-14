import { useEffect, useRef, useState } from "react";
import goa from "./assets/Goa.jpg";
import goalogo from "./assets/goalo.png";
import skillwill from "./assets/skillwill.png";
import skillogo from "./assets/skill.png";
import soloLearn from "./assets/soloHTML.jpg";
import soloLearnCSS from "./assets/soloCSS.jpg";
import soloLearnJS from "./assets/SoloJS.jpg";
import soloLearnJS2 from "./assets/soloJS2.jpg";
import sologo from "./assets/solo.png";
import matrix from "./assets/matrix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Pages(i) {
  switch (i) {
    case 0:
      return (
        <h1 className="text-white xl:text-9xl lg:text-[106px] sm:text-8xl text-5xl sm:leading-30 font-bold">
          My Education And Certificates
        </h1>
      );

    default:
      return (
        <div>
          <img
            className="object-cover"
            src={["", skillogo, goalogo, sologo, sologo][i]}
            alt=""
          />{" "}
          <p></p>
        </div>
      );
  }
}

function Certificate(i) {
  switch (i) {
    case 2:  case 3:
      return (
        <div
          className={`xl:rounded-l-lg w-full h-full flex flex-col justify-center items-center transform rotate-y-180 border-8 border-[cyan]`}
        >
          <img
            className="w-1/2  self-start h-1/2 xl:rotate-0 rotate-180 "
            src={[skillwill, goa, soloLearnCSS, soloLearnJS][i]}
            alt=""
          />
          <img
            className="w-1/2  self-end h-1/2 xl:rotate-0 rotate-180 "
            src={[skillwill, goa, soloLearn, soloLearnJS2][i]}
            alt=""
          />
        </div>
      );

    default:
      return (
        <div
          className={`xl:rounded-l-lg w-full h-full flex justify-center items-center transform rotate-y-180 border-8 border-[cyan]`}
        >
          <img
            className="w-full h-full xl:rotate-0 rotate-180 "
            src={[skillwill, goa, soloLearn, soloLearn][i]}
            alt=""
          />
        </div>
      );
  }
}

function Education() {
  const z = ["z-5", "z-4", "z-3", "z-2", "z-1"];
  const pages = useRef([]);
  let [count, setCount] = useState(-1);
  return (
    <main className="h-[100vh] flex justify-center items-center gap-5 xl:mt-25 md:mt-0  mt-5 xl:mb-0 mb-15">
      <div
        className={`${
          count != -1 && count != 4
            ? "xl:w-[1400px] xl:h-[545px] md:w-max sm:w-[1000] md:h-[680px] lg:h-[880px] sm:h-[640px] h-[500px]"
            : "lg:w-[700px] sm:w-[640px] xl:h-[545px] h-[250px] lg:h-[440px] sm:h-[340px]"
        }  lg:mt-26 md:mb-15 lg:mb-0 xl:mt-0 relative flex transform ${
          count == 4 ? "translate-x-full" : " "
        } justify-center xl:justify-end duration-500 `}
      >
        <div className="lg:w-[700px] sm:w-[640px] xl:h-[545px] sm:h-[340px] lg:h-[440px] w-[310px] h-[250px] relative flex justify-center">
          {[...Array(5)].map((_, i) => {
            return (
              <div
                key={i}
                className={`rounded-2xl absolute w-full h-full top-0 left-0 ${
                  i <= count ? z[5 - i] : z[i]
                } perspective-[1500px] `}
                ref={(el) => (pages.current[i] = el)}
              >
                <div
                  className={`xl:rounded-r-lg border-0 bg-[#000a10] ${
                    count != -1 ? "xl:border-l-4 xl:border-b-0 border-b-4 " : ""
                  } absolute w-full h-full top-0 left-0 z-1 transform ${
                    i <= count
                      ? "xl:-rotate-y-180 xl:-rotate-x-0 -rotate-x-180"
                      : ""
                  } xl:origin-left origin-bottom transition-transform duration-500 backface-hidden`}
                >
                  <div
                    style={{ background: i == 0 ? `url(${matrix})` : "" }}
                    className={` xl:rounded-r-lg w-full h-full flex justify-center items-center border-8 bg-cover border-[cyan] shadow-cyan-500 shadow-[0_0_30px_inset]`}
                  >
                    {Pages(i)}
                  </div>
                </div>
                <div
                  className={`xl:rounded-r-lg border-0 bg-[#000a10] absolute w-full h-full top-0 left-0 z-0 transform  ${
                    i <= count
                      ? "xl:-rotate-y-180 xl:-rotate-x-0 -rotate-x-180"
                      : ""
                  } xl:origin-left origin-bottom transition-transform duration-500 shadow-cyan-500 shadow-[0_0_30px_inset]`}
                >
                  {Certificate(i)}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`xl:w-[1400px] h-full xl:h-full w-15 xl:block flex flex-col absolute   right-1    z-6`}
        >
          <div className="h-1/2 xl:w-1/2 xl:h-12  xl:top-4/6  bottom-0 absolute xl:right-0 text-[cyan]">
            <button
              onClick={() => {
                setCount((prev) => (prev >= 3 ? 3 : prev + 1));
              }}
              className={`absolute left-0 xl:rotate-0 rotate-90  xl:-right-9/10  xl:bottom-0 bottom-4  ${
                count == 3 ? "hidden" : " "
              }   border-0 rounded-2xl cursor-pointer z-10`}
            >
              <FontAwesomeIcon
                className={` text-5xl`}
                icon={faArrowAltCircleRight}
              ></FontAwesomeIcon>
            </button>
            <button
              onClick={() => {
                setCount((prev) => (prev <= -1 ? -1 : prev - 1));
              }}
              className={`absolute left-0 xl:rotate-0 rotate-90  xl:left-4  xl:top-0 top-4 ${
                count == -1 ? "hidden" : " "
              }   border-0 rounded-2xl cursor-pointer z-10`}
            >
              <FontAwesomeIcon
                className={` text-5xl`}
                icon={faArrowAltCircleLeft}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Education;
