import { useEffect, useRef } from "react";

function Loading() {
  const blockRefs = useRef([]);
  const h1Ref = useRef();
  const textRef = useRef();
  const lineRef = useRef();
  const lineBackgroundRef = useRef();
  const load = useRef();
  useEffect(() => {
    const line = lineRef.current;
    const lineBackground = lineBackgroundRef.current;
    const h1 = h1Ref.current;
    const text = textRef.current;
    const interval = setInterval(() => {
      h1.textContent = `${Math.ceil(
        (Number(getComputedStyle(line).width.slice(0, -2)) /
          Number(getComputedStyle(lineBackground).width.slice(0, -2))) *
          100
      )}%`;
      text.style.transform = `translateY(-${Math.ceil(
        (Number(getComputedStyle(line).width.slice(0, -2)) /
          Number(getComputedStyle(lineBackground).width.slice(0, -2))) *
          100
      )}px)`;
    }, 20);
    line.addEventListener("animationend", () => {
      clearInterval(interval);
      text.style.opacity = "0";
      h1.style.transform = "translateY(-200px)";
      line.style.transform = "translateY(200px)";

      blockRefs.current.forEach((block, index) => {
        setTimeout(() => {
          block.style.height = "0%";
        }, index * 70);
      });
    });

    blockRefs.current[4].addEventListener("transitionend", () => {
      load.current.style.display = "none";
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={load} >
      <div className="flex items-end h-full w-full top-0 fixed z-30 ">
        {[0, 1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="w-[20%] h-full bg-[#00ff80] duration-1000 ease-in-out z-1"
            ref={(el) => (blockRefs.current[i] = el)}
          ></div>
        ))}
      </div>
      <div
        className="absolute z-50 w-full p-[20px] flex-col gap-[50px] duration-400 translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] "
        ref={textRef}
      >
        <h1
          className="font-bold text-[200px] z-40 text-white duration-400"
          ref={h1Ref}
        >
          0%
        </h1>
        <div
          className="w-full z-2 bg-white/50 h-[10px] flex justify-start"
          ref={lineBackgroundRef}
        >
          <div
            className="bg-[#0080ff] w-0 animate-[loading_4s_.5s_ease-in-out_both] duration-400 "
            ref={lineRef}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
