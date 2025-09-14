import { useEffect, useRef, useState } from "react";
import add from "./assets/add.svg";
import mail from "./assets/mail.svg";
import slogan from "./assets/slogan.svg";
import check from "./assets/check.svg";
import linkedin from "./assets/linkedin.svg";
import phone from "./assets/phone.svg";
import x from "./assets/x.svg";
import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";
import emailjs from "@emailjs/browser";
import arrow from "./assets/Subtract.svg"


function Contact() {
  const form = useRef();
  const formDivs = useRef([])
  let [again,againFunc] = useState([true,true])


  const checker = (i) => {
    let checked = []
    let inputs = formDivs.current[i].querySelectorAll("input");
    inputs.forEach((input) => {
    againFunc(checked)
    checked.push(input.value.trim() != "")
  })
  
  
  return checked.every(e => e == true)
    }


  const sendMail = () => {
      emailjs
        .sendForm(
          "service_khf3i16",
          "template_b2ko2lk",
          form.current,
          "VGR8WENtxFeH2KSuX"
        )
        .then((res) => console.log("SUCCESS", res))
        .catch((err) => console.log("FAILED", err));
  };

  let logo = useRef([]);
  let [hover, hoverFunc] = useState(0);
  let [click, clickFunc] = useState(false);
  let [move, moveFunc] = useState(0);
  let [choose, chooseFunc] = useState(null);
  let [duration, durFunc] = useState("duration-300");
  let margin = [
    "ml-[70px]",
    "ml-[50px]",
    "ml-[30px]",
    "ml-[10px]",
    "ml-[-10px]",
  ];
  let links = ["https://www.linkedin.com/in/george-giorgobiani-79110937a/","https://wa.me/995593388038","https://x.com/George200824","https://www.instagram.com/giorgigiorgob1ani/","https://www.facebook.com/giorgi.giorgobian.90"]
  let translate = [
    "translate-x-0",
    "-translate-x-1/4",
    "-translate-x-1/2",
    "-translate-x-1/2",
  ];
  let width = [
    "w-0",
    "w-1/3",
    "w-2/3",
    "w-full",
  ]
  let logos = [linkedin,phone,x,instagram,facebook]

  return (
    <div className="flex sm:flex-row flex-col xl:ml-30 justify-center lg:scale-100 sm:scale-80  items-center duration-300 h-[90vh] lg:mt-20 ">
      <div className={`xl:gap-50 gap-15 -translate-y-15 sm:-translate-y-0 w-[716px] sm:flex-row flex-col sm:scale-100 translate-x-0 scale-50  ${choose ? " sm:translate-x-10" : "sm:-translate-x-10"} xl:w-max duration-300 relative flex items-center`}>

        <div className={`sm:absolute sm:rotate-0 rotate-90 xl:static left-0 xl:opacity-100 xl:z-0  ${!choose ? "sm:opacity-0 sm:-z-1" : "sm:opacity-100"}xl:static xl:z-0 duration-300`}>
          <div className="flex relative h-max mb-10">
            <div className="flex flex-col gap-3.5 mt-8 z-10">
              {[...Array(5)].map((_, i) => {
                return (
                  <div
                    ref={(e) => (logo.current[i] = e)}
                    onMouseOver={() => {
                      hoverFunc(i);
                    }}
                    key={i}
                    className={`w-[100px] h-[100px]  ${
                      hover == i
                        ? "shadow-[4px_4px_8px_#0080ff80,-4px_-4px_8px_#0080ff80]"
                        : "shadow-[4px_4px_8px_inset_#000000b3,-4px_-4px_8px_inset_#000000b3]"
                    } hover:shadow-[4px_4px_8px_#0080ff80,-4px_-4px_8px_#0080ff80] sm:rotate-0 -rotate-90  ${
                      margin[i]
                    } duration-300 bg-[#0080ff] rounded-[25px] cursor-pointer flex justify-center items-center`}
                  >
                    <img src={logos[i]} className="w-[80px] object-cover" alt="" />
                  </div>
                );
              })}
            </div>
            <div className="bg-[#0B1E2E] p-8 rounded-[50px] h-[620px] w-[164px] z-2 shadow-[8px_4px_16px_#000000b3] rotate-10  absolute  top-0"></div>
            <div className="bg-[#07131F] p-19 h-[310px] w-[164px] -translate-x-1 z-1  absolute   top-0"></div>
            <div className=" flex flex-col gap-3.5 absolute top-[22px] left-0 overflow-hidden pt-2.5 w-[380px]">
              {[...Array(5)].map((_, i) => {
                return (
                  <div
                    key={i}
                    className={`w-[200px]  h-[100px] flex justify-center  ${
                      hover != i
                        ? "-translate-x-25"
                        : "translate-x-25  shadow-[0_0_10px_#00ff08]"
                    } ${margin[i]} bg-[#00ff80] rounded-[12.5px] duration-300`}
                  >
                    <a target="_blank" href={links[i]}><img src={add} alt="add" className="object-cover sm:rotate-0 -rotate-90 sm:translate-y-0 translate-y-2" /></a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="-translate-y-10 sm:-translate-y-0 sm:hidden w-full flex justify-center" >
          <div className="absolute -z-1 right-0 w-3/4 h-5 bg-[cyan] rounded-2xl"></div>
          <h1 className=" text-8xl font-bold text-white italic">Or</h1>
          <div className="-z-1 absolute bottom-0 left-0 w-3/4 h-5 bg-[cyan] rounded-2xl"></div>
        </div>
        <div className={`sm:block hidden duration-500 z-10 ${choose ? "translate-x-full" : "-translate-x-0"}`}>
          <div className="w-[346px] relative">
            <img src={slogan} alt="" />
            <button onClick={()=>{chooseFunc(true)}} className={`${choose ? "drop-shadow-[0_0_5px_cyan]" : ""} absolute xl:hidden top-[69.6%] left-[23%] -translate-x-1/2 -translate-y-1/2 text-6xl text-[#ffffff]`}><img src={arrow} className={`rotate-180`} alt="" /></button>
            <button onClick={()=>{chooseFunc(false)}} className={`${!choose ? "drop-shadow-[0_0_5px_cyan]" : ""} absolute xl:hidden  top-[60.5%] right-[10.7%] -translate-x-1/2 -translate-y-1/2 text-6xl text-[#ffffff]`}><img src={arrow} className="" alt="" /></button>
          </div>
        </div>
        <div className={`${choose ? "sm:opacity-0 -z-1" : "sm:opacity-100"} duration-300 sm:w-[450px] scale-120 sm:scale-100  xl:w-max  right-0 xl:static xl:z-0 `}>
          <div className="flex items-center justify-center relative">
          <div
            className={` overflow-hidden ${
              click
                ? "w-[450px] h-[562px] rounded-[50px]"
                : "w-49 h-30 rounded-3xl"
            }  duration-300 flex items-center justify-center`}
          >
            <div className="w-[450px] h-[562px] relative">
              <img
                onTransitionEnd={() => {
                  clickFunc("go");
                }}
                onClick={() => {
                  clickFunc(true);
                }}
                src={mail}
                className={`absolute top-45 right-31 ${
                  click ? "opacity-0 " : "cursor-pointer"
                }  ${click == "go" ? "-z-10" : "z-10 "}  duration-300 `}
                alt=""
              />

            <div className="w-[450px] h-[562px] bg-[#0B1E2E] justify-between flex flex-col gap-6 overflow-hidden relative">
              <form
                ref={form}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (checker(move)) {
                    moveFunc((i) => (i >= 3 ? 0 : i + 1));
                  }
                  else{
                    checker(move)
                  }     
                  if (move === 2) {
                    sendMail(e);                    
                  } 
                }}
                className="flex flex-col gap-6 text-white  justify-center  pb-13 "
              >
                <div
                  className={`flex w-[1800px] ${duration} ${translate[move]} `}
                  
                >
                  <div ref={(el) => (formDivs.current[0] = el)} className="w-[450px] p-5 pt-0 flex flex-col gap-6">
                  <h1 className={`text-[50px] font-bold italic text-white border-b-6 ${!again.every(e => e == true) ? "border-[#ff3d3d]" :"border-[#00ff80]"} w-full text-center py-2.5`}>
                    Name
                  </h1>
                    <label
                      htmlFor="fname"
                      className="text-[25px] font-bold text-white text-start"
                    >
                      First
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className={`bg-transparent focus:bg-transparent text-white w-full text-[20px] border-b-3 focus:border-[#00ffb3] outline-0 ${!again[0] ? "border-[#ff3d3d]" : "border-[#00ff80]"}`}
                    />
                    <label
                      htmlFor="lname"
                      className={`text-[25px] font-bold  text-white text-start`}
                    >
                      Last
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className={`bg-transparent focus:bg-transparent text-white  w-full text-[20px] border-b-3 outline-0 focus:border-[#00ffb3] ${!again[1] ? "border-[#ff3d3d]" : "border-[#00ff80]"}`}
                    />
                  </div>
                  <div className="w-[450px] p-5 pt-0 flex flex-col gap-6" 
                  ref={(el) => (formDivs.current[1] = el)}
                  >
                  <h1 className={`text-[50px] font-bold italic text-white border-b-6 border-[#00ff80] w-full text-center py-2.5 ${!again.every(e => e == true) ? "border-[#ff3d3d]" :"border-[#00ff80]"}`}>
                    Contact
                  </h1>
                    <label
                      htmlFor="phone"
                      className="text-[25px] font-bold text-white text-start"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      className={`bg-transparent focus:bg-transparent text-white w-full text-[20px] border-b-3 focus:border-[#00ffb3] outline-0 ${!again[0] ? "border-[#ff3d3d]" : "border-[#00ff80]"} border-[#00ff80]`}
                    />
                    <label
                      htmlFor="email"
                      className={`text-[25px] font-bold  text-white text-start`}
                    >
                      Mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`bg-transparent focus:bg-transparent ${!again[1] ? "border-[#ff3d3d]" : "border-[#00ff80]"} text-white  w-full text-[20px] border-b-3 outline-0 focus:border-[#00ffb3] border-[#00ff80]`}
                    />
                  </div>
                  <div className="w-[450px] p-5 pt-0 flex flex-col gap-6"
                  ref={(el) => (formDivs.current[2] = el)}
                  >
                    <h1 className={`text-[50px] font-bold italic text-white border-b-6 border-[#00ff80] w-full text-center py-2.5 ${!again.every(e => e == true) ? "border-[#ff3d3d]" :"border-[#00ff80]"}`}>
                    Request
                  </h1>
                    <label
                      htmlFor="message"
                      className="text-[25px] font-bold text-white text-start"
                    >
                      About Project
                    </label>
                    <input
                      type="text"
                      name="message"
                      id="message"
                      className={`${!again.every(e => e == true) ? "border-[#ff3d3d]" :"border-[#00ff80]"} bg-transparent focus:bg-transparent text-white w-full text-[20px] border-b-3 focus:border-[#00ffb3] outline-0 border-[#00ff80]`}
                    />
                  </div>
                </div>
                <div className="flex w-full justify-around">
                  
                  <input
                    onClick={()=>{
                      moveFunc((i)=>(i < 1 ? 0: i-1 ))
                      durFunc("duration-300")
                      againFunc([true,true])

                    }}
                    type="button"
                    value="Back"
                  className={`cursor-pointer rounded-[25px] ${move==0 ? "-z-1" : ""}  bg-[#00ff80] py-3 px-8 mt-[50px] w-max text-3xl font-bold justify-self-start self-start`}
                  />
                  <input
                    onSubmit={()=>{
                      durFunc("duration-300")
                    }}
                    type="submit"
                    value="Next"
                    className="cursor-pointer rounded-[25px] bg-[#00ff80] py-3 px-8 mt-[50px] w-max text-3xl font-bold justify-self-center self-center"
                  />
                </div>
              </form>
              <div className={` w-full h-full bg-[#00ff80] ${move==3?"z-10":"-z-10 opacity-0"} transition-opacity delay-100 absolute duration-500 flex flex-col justify-center items-center`}>
                <img src={check} alt="" className="w-2/3"/>
                  <input
                    type="button"
                    onClick={()=>{
                      moveFunc(0)
                      durFunc("")
                      againFunc([true,true])
                      form.current.reset()
                    }}
                    
                    value="Resend"
                    className="cursor-pointer rounded-[25px] bg-[#0b1e2d] text-white py-3 px-8 mt-[50px] w-max text-3xl font-bold justify-self-center self-center"
                  />
              </div>
            <div className={`h-2 ${width[move]} bg-[#00ff80] self-start absolute bottom-0 duration-300`}></div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      </div>

  );
}

export default Contact;
