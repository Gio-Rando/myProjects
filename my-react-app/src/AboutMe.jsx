import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function AboutMe() {
  const h1Div = useRef()
  const location = useLocation()

  return (
    <main className="w-full lg:mt-50 mt-5 lg:mb-0 mb-15">
      <div className="my-0 mx-auto max-w-[1440px] flex flex-wrap lg:flex-nowrap lg:flex-row lg:gap-[5px] flex-col-reverse xl:items-center items-center lg:items-stretch justify-center relative gap-5">
        <div className="text-white items-center w-full lg:items-stretch flex flex-col gap-2.5 xl:gap-5">
          <div  ref={h1Div} className={`lg:[--w1:80px] lg:[--w2:140px] lg:[--w3:200px] lg:[--w4:255px] lg:[--w5:295px] lg:[--w6:325px] lg:[--w7:410px] lg:[--w8:470px]
                                        sm:[--w1:70px] sm:[--w2:115px] sm:[--w3:165px] sm:[--w4:210px] sm:[--w5:240px] sm:[--w6:265px] sm:[--w7:335px] sm:[--w8:380px]  
                                        [--w1:45px] [--w2:75px] [--w3:105px] [--w4:130px] [--w5:150px] [--w6:165px] [--w7:210px] [--w8:240px]  
          ${location.pathname !== "/"
      ? "animate-[typing_2s,cursor_1s_infinite_2.4s_alternate]"
      : "animate-[typing_2s_4.72s,cursor_1s_infinite_7.12s_alternate]"} relative transition-none w-[240px] sm:w-[380px] xl:w-[470px] xl:h-[85px] sm:h-[70px] h-12.5 overflow-hidden  sm:border-r-[15px] border-r-[10px]`}>
            <h1 className="text-[50px] sm:text-[80px] xl:text-[100px] font-semibold underline decoration-auto decoration-[#0080ff] underline-offset-1- absolute w-[470px] xl:-top-[45px] -top-5 sm:-top-[35px]  overflow-hidden left-[0] ">
              About Me
            </h1>
          </div>
          <div className="xl:w-[840px] md:w-[600px] sm:w-[425px] w-full  relative h-[180px]">
            <p className="xl:text-lg border-[10px] text-lg sm:text-[16px] border-b-[#00ff80] border-l-0 border-r-0 p-[20px] px-[40px] absolute right-0 sm:right-[-40px]">
              I’m a front-end developer who really cares about what I build. I
              like to keep things clean, simple, and easy to use. I take my work
              seriously and try to do my best every time. I enjoy working with
              HTML, CSS, JavaScript, and React. I’m always trying to learn
              something new and get better at what I do. I work well with
              others, but I’m also happy to work on my own. I want the things I
              build to look good and feel right for the people who use them.
            </p>
          </div>
        </div>
        <img
          className="sm:max-w-[400px] xl:max-w-[600px] max-w-[300px] w-full sm:border-[15px] border-[13px]  xl:border-[20px] border-white border-t-[#00ffff] border-r-[#0080ff] border-l-[#00ff80]"
          src="https://www.allaboutbirds.org/guide/assets/photo/302355171-1280px.jpg"
          alt=""
        />
      </div>
    </main>
  );
}

export default AboutMe;
