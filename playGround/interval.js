const block = document.querySelectorAll(".block");
const text = document.querySelector(".texts");
const h1 = document.querySelector("h1");
const line = document.querySelector(".line");
const lineBackground = document.querySelector(".lineBackground");

line.addEventListener("animationstart", () => {
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
    )}px)`
  }, 20);

  line.addEventListener("animationend", () => {
    clearInterval(interval);
    text.style.opacity = "0"
    h1.style.transform = "translateY(-200px)"
    line.style.transform = "translateY(200px)"
    for (let i = 0; i < block.length; i++) {
      setTimeout(() => {
        block[i].style.height = "0%";
      }, i * 70);
    }
  });
});
