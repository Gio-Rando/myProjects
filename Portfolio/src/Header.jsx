import { Link, useLocation } from "react-router-dom";
import logo from "./assets/Clipped_image_20250423_231203.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faUser,
  faAtom,
  faGraduationCap,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useEffect, useRef, useState } from "react";
function Levitate(props) {
  const colors = [
    "bg-[#00ff8080]",
    "bg-[#0080ff80]",
    "bg-[#00ffff80]",
    "bg-[#ffffff80]",
  ];
  const bcolors = [
    "border-[#00ff80]",
    "border-[#0080ff]",
    "border-[#00ffff]",
    "border-[#ffffff]",
  ];
  return (
    <>
      <div
        className={`z-1  ${
          colors[props.bg]
        } absolute -bottom-[4px] border rounded-full ${bcolors[props.border]} ${
          location.pathname != props.extraPath &&
          location.pathname != props.pathname
            ? "w-0 border-0  translate-y-[0px]"
            : "w-full p-[2px]  animate-[particle_2s_infinite]"
        } `}
      />
      <div
        className={`z-1  ${
          colors[props.bg]
        } absolute -bottom-[4px] border rounded-full ${bcolors[props.border]} ${
          location.pathname != props.extraPath &&
          location.pathname != props.pathname
            ? "w-0 border-0 translate-y-[0px]"
            : "w-full p-[2px]  animate-[particle_2s_infinite_1s]"
        } `}
      />
      <div
        className={`z-1 ${
          colors[props.bg]
        } absolute -bottom-[4px] border rounded-full ${bcolors[props.border]} ${
          location.pathname != props.extraPath &&
          location.pathname != props.pathname
            ? "w-0 border-0 translate-y-[0px]"
            : "w-full p-[2px]  animate-[particle_2s_infinite_2s]"
        } `}
      />
    </>
  );
}

const NormHeader = forwardRef((props,ref)=> {
  const location = useLocation();
  return (
    <header className="w-full fixed top-0 z-20 bg-[#0b1e2e]">
      <div ref={ref} className="hidden lg:flex p-[10px] my-0 mx-auto max-w-[1440px] flex-wrap items-center justify-center">
        <img className="w-[90px]" src={logo} alt="" />
        <nav className="w-[88%] flex items-center justify-center">
          <ul className="flex gap-[150px] list-none items-center h-full">
            <li
              className={`p-b-[1px] relative h-[25%] flex items-center flex-col before:absolute before:w-full before:top-full before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-[#00ff8040] before:p-[2px] before:duration-300 before:-z-1 before:rounded-[10%]  after:absolute z-1 ${
                location.pathname != "/" && location.pathname != "/aboutme"
                  ? "after:w-0 translate-y-[0px]"
                  : "-translate-y-[4px] after:w-full after:p-[2px] after:shadow-[0_-10px_30px_#70ffc0] animate-[float_2s_infinite_alternate_ease-in]"
              } after:top-full after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:bg-[#00ff80] after:duration-300 after:-z-1 after:rounded-[10%] hover:after:w-full hover:after:p-[2px] transform transition-all duration-300`}
            >
              <Link
                className={`inline-block text-white font-bold relative text-[22px] z-1 
    `}
                to={"/aboutme"}
              >
                About Me
              </Link>
              <Levitate extraPath="/" pathname="/aboutme" bg={0} border={0} />
            </li>
            <li
              className={`p-b-[1px] relative h-[25%] flex items-center flex-col before:absolute before:w-full before:top-full before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-[#0080ff40] before:p-[2px] before:duration-300 before:-z-1 before:rounded-[10%]  after:absolute z-1 ${
                location.pathname != "/skills"
                  ? "after:w-0 translate-y-[0px]"
                  : "-translate-y-[4px] after:w-full after:p-[2px] after:shadow-[0_-10px_30px_#70ffc0] animate-[float_2s_infinite_alternate_ease-in]"
              } after:top-full after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:bg-[#0080ff] after:duration-300 after:-z-1 after:rounded-[10%] hover:after:w-full hover:after:p-[2px] transform transition-all duration-300`}
            >
              <Link
                className={`inline-block text-white font-bold relative text-[22px] z-1 
    `}
                to={"/skills"}
              >
                Skills
              </Link>

              <Levitate
                extraPath=""
                pathname="/skills"
                key="2"
                bg={1}
                border={1}
              />
            </li>
            <li
              className={`p-b-[1px] relative h-[25%] flex items-center flex-col before:absolute before:w-full before:top-full before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-[#00ffff40] before:p-[2px] before:duration-300 before:-z-1 before:rounded-[10%]  after:absolute z-1 ${
                location.pathname != "/education"
                  ? "after:w-0 translate-y-[0px]"
                  : "-translate-y-[4px] after:w-full after:p-[2px] after:shadow-[0_-10px_30px_#70ffc0] animate-[float_2s_infinite_alternate_ease-in]"
              } after:top-full after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:bg-[#00ffff] after:duration-300 after:-z-1 after:rounded-[10%] hover:after:w-full hover:after:p-[2px] transform transition-all duration-300`}
            >
              <Link
                className={`inline-block text-white font-bold relative text-[22px] z-1 
    `}
                to={"/education"}
              >
                Education
              </Link>

              <Levitate
                extraPath=""
                pathname="/education"
                key="2"
                bg={2}
                border={2}
              />
            </li>

            <li
              className={`p-b-[1px] relative h-[25%] flex items-center flex-col before:absolute before:w-full before:top-full before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-[#ffffff40] before:p-[2px] before:duration-300 before:-z-1 before:rounded-[10%]  after:absolute z-1 ${
                location.pathname != "/contact"
                  ? "after:w-0 translate-y-[0px]"
                  : "-translate-y-[4px] after:w-full after:p-[2px] after:shadow-[0_-10px_30px_#70ffc0] animate-[float_2s_infinite_alternate_ease-in]"
              } after:top-full after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:bg-[#ffffff] after:duration-300 after:-z-1 after:rounded-[10%] hover:after:w-full hover:after:p-[2px] transform transition-all duration-300`}
            >
              <Link
                className={`inline-block text-white font-bold relative text-[22px] z-1 
    `}
                to={"/contact"}
              >
                Contact Us
              </Link>
              <Levitate
                extraPath=""
                pathname="/contact"
                key="2"
                bg={3}
                border={3}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
})

 const MobileHeader= forwardRef((props,ref)=> {
  function getNavIndex(pathname) {
    switch (pathname) {
      case "/":
      case "/aboutme":
        return 0;
      case "/skills":
        return 1; 
      case "/education":
        return 2; 
      case "/contact":
        return 3; 
      default:
        return 0; 
    }
  }

  const location = useLocation();
  const list = useRef([]);
  const back = useRef();
  const expansionList = ["w-26", "w-18", "w-26", "w-22.5"];
  let [change, changeFunc] = useState(getNavIndex(location.pathname));
  let [expand, expandFunc] = useState(false);
  const colors = [
    "bg-[#0080ff]",
    "bg-[#00ffff]",
    "bg-[#ffffff]",
    "bg-[#00ff80]",
  ];
  useEffect(() => {
    let frame;
    const update = () => {
      const rect = list.current[change].getBoundingClientRect();
      const parent = back.current.parentElement.getBoundingClientRect();
      back.current.style.left = `${rect.left - parent.left}px`;
      back.current.style.top = `${rect.top - parent.top - 2}px`;
      back.current.style.height = `${rect.height + 2}px`;
      frame = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(frame);
  }, [change]);
  useEffect(() => {
    changeFunc(getNavIndex(location.pathname));

    expandFunc(true);
    setTimeout(() => {
      console.log(change);

      requestAnimationFrame(() => {
        const rect = list.current[change].getBoundingClientRect();
        const parent = back.current.parentElement.getBoundingClientRect();

        back.current.style.left = `${rect.left - parent.left}px`;
        back.current.style.top = `${rect.top - parent.top - 2}px`;
        back.current.style.height = `${rect.height + 2}px`;
      });
    }, 100);
  },[location.pathname]);
  function activeTask(i) {
    if (i != change) {
      changeFunc(i);
      expandFunc(false);
      console.log(change);

      requestAnimationFrame(() => {
        const rect = list.current[i].getBoundingClientRect();
        const parent = back.current.parentElement.getBoundingClientRect();

        back.current.style.left = `${rect.left - parent.left}px`;
        back.current.style.top = `${rect.top - parent.top - 2}px`;
        back.current.style.height = `${rect.height + 2}px`;
      });
    }
  }

  return (
    <>
      <header ref={ref} className="w-full fixed bottom-0 left-0 bg-[#0b1e2e] z-10">
        <div className="flex lg:hidden w-full  p-[10px] my-0 mx-auto max-w-[1440px] flex-wrap items-center justify-center">
          <nav className="w-full flex items-center justify-center">
            <ul className="flex relative list-none items-center w-full justify-around h-full">
              <li
                className={`h-9.5 ${
                  list.current[change] == list.current[0] ? "w-22" : ""
                } duration-500 flex items-center `}
                ref={(e) => (list.current[0] = e)}
              >
                <Link
                  onClick={() => {
                    activeTask(0);
                  }}
                  className={`flex text-white items-center font-bold relative text-[14px] z-1 

    `}
                  to={"/aboutme"}
                >
                  <FontAwesomeIcon
                    className={`${
                      location.pathname != "/" &&
                      location.pathname != "/aboutme"
                        ? "text-[#00ff8040]"
                        : "text-[#00ff80]"
                    } text-3xl`}
                    icon={faUser}
                  />
                  <div
                    className={`${
                      list.current[change] == list.current[0] ? "w-26" : "w-0"
                    } delay-300 z-1 absolute overflow-hidden left-0 duration-500`}
                  >
                    <p
                      className={`transition-[translate,opacity] duration-[300ms,0] w-26 left-0 text-[#00ff80] ${
                        list.current[change] == list.current[0]
                          ? "opacity-100 translate-x-8.5"
                          : "opacity-0 translate-x-0 text-[#00ff8040]"
                      } `}
                    >
                      About Me
                    </p>
                  </div>
                </Link>
              </li>
              <li
                className={`h-9.5 ${
                  list.current[change] == list.current[1] ? "w-18" : ""
                } duration-500 flex items-center `}
                ref={(e) => (list.current[1] = e)}
              >
                <Link
                  onClick={() => {
                    activeTask(1);
                  }}
                  className={`flex text-white items-center font-bold relative text-[14px] z-1 
                            `}
                  to={"/skills"}
                >
                  <FontAwesomeIcon
                    className={`${
                      location.pathname != "/skills"
                        ? "text-[#0080ff40]"
                        : "text-[#0080ff]"
                    } text-3xl z-20`}
                    icon={faAtom}
                  />
                  <div
                    className={`${
                      list.current[change] == list.current[1] ? "w-18" : "w-0"
                    } delay-300 z-1 absolute overflow-hidden left-0 duration-500`}
                  >
                    <p
                      className={`transition-[translate,opacity] duration-[300ms,0] left-0 text-[#0080ff] ${
                        list.current[change] == list.current[1]
                          ? "opacity-100 translate-x-8.5"
                          : "opacity-0 translate-x-0 text-[#0080ff40]"
                      } `}
                    >
                      Skills
                    </p>
                  </div>
                </Link>
              </li>
              <li
                className={`h-9.5 ${
                  list.current[change] == list.current[2] ? "w-26" : ""
                } duration-500 flex items-center `}
                ref={(e) => (list.current[2] = e)}
              >
                <Link
                  onClick={() => {
                    activeTask(2);
                  }}
                  className={`flex text-white items-center font-bold relative text-[14px] z-1 
    `}
                  to={"/education"}
                >
                  <FontAwesomeIcon
                    className={`${
                      location.pathname != "/education"
                        ? "text-[#00ffff40]"
                        : "text-[#00ffff]"
                    } text-3xl z-20`}
                    icon={faGraduationCap}
                  />
                  <div
                    className={`${
                      list.current[change] == list.current[2] ? "w-26" : "w-0"
                    } delay-300 z-1 absolute overflow-hidden left-0 duration-500`}
                  >
                    <p
                      className={`transition-[translate,opacity] duration-[300ms,0] left-0 text-[#00ffff] ${
                        list.current[change] == list.current[2]
                          ? "opacity-100 translate-x-9"
                          : "opacity-0 translate-x-0 text-[#00ffff40]"
                      } `}
                    >
                      Education
                    </p>
                  </div>
                </Link>
              </li>

              <li
                className={`h-9.5 ${
                  list.current[change] == list.current[3] ? "w-22.5" : ""
                } duration-500 flex`}
                ref={(e) => (list.current[3] = e)}
              >
                <Link
                  onClick={() => {
                    activeTask(3);
                  }}
                  className={`flex items-center text-white font-bold relative text-[14px]
    `}
                  to={"/contact"}
                >
                  <FontAwesomeIcon
                    className={`${
                      location.pathname != "/contact"
                        ? "text-[#ffffff40]"
                        : "text-[#ffffff]"
                    } text-3xl z-20 `}
                    icon={faPaperPlane}
                  />
                  <div
                    className={`${
                      list.current[change] == list.current[3] ? "w-22.5" : "w-0"
                    } delay-300 z-1 absolute overflow-hidden left-0 duration-500`}
                  >
                    <p
                      className={`transition-[translate,opacity] duration-[300ms,0] left-0 ${
                        list.current[change] == list.current[3]
                          ? "opacity-100 translate-x-8.5"
                          : "opacity-0 translate-x-0 text-[#ffffff40]"
                      } `}
                    >
                      Contact
                    </p>
                  </div>
                </Link>
              </li>
              <li
                onTransitionEnd={(e) => {
                  if (e.propertyName == "left") {
                    expandFunc(true);
                  }
                }}
                ref={back}
                className={`absolute ${
                  !expand ? "w-[37.5px]" : expansionList[change]
                } h-1/2 ${colors[change]} duration-300 rounded-xl -z-1`}
              ></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
})


function Header() {
  let [visible,setVisible] = useState(window.innerWidth < 1024)
  let setHeader=()=>{
    setVisible(window.innerWidth < 1024)
    console.log(visible);
    
  }
  useEffect(()=>{
    window.addEventListener("resize",setHeader)
    return () => window.removeEventListener("resize",setHeader)
  },[])


  return !visible ? <NormHeader /> : < MobileHeader />
}

export default Header;
