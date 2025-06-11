const settings = document.getElementsByClassName("settings")[0];
const colorBlocks = document.getElementsByClassName("viscol");
const colorPicker = document.querySelectorAll("input[type=color]");
const form = document.querySelector("form");
const close = document.querySelector("h2");
const body = document.querySelector("body");
const timeLine = document.querySelector(".timeLine");
const timer = document.querySelector(".timer");
const content = document.querySelector(".content");
const image = document.querySelectorAll(".image");
const guessWord = document.querySelectorAll(".guessWord");
const img = document.querySelector("img")
const p = content.children[1]

let save = JSON.parse(localStorage.getItem("SaveGuess")) || []

let next = false
// const options = document.querySelector(".options")

const change = () => {
 for (let i = 0; i < image.length ; i++) {
   setTimeout(() => {
     timeLine.classList.add("animated");
     if(i==image.length-1){
      p.textContent = `${guessWord[i].value}`
      timeLine.classList.remove("animated");
     }
    setTimeout(() => {
      timeLine.classList.remove("animated");
      p.style.background = `#FED2E2`;
      p.style.color = `#E9A5F1`;
      p.style.borderColor = `#E9A5F1`;
      if (i==image.length-1) {
        p.textContent = `${guessWord[i].value}`
      }else{
        p.textContent = `${save[i+4]}`
      }
    }, 5000); 
    if (next) {
      timer.style.background = `#E9A5F1`;
      timeLine.style.background = `linear-gradient(to right,#C68EFD, #8F87F1)`;
    } else {
      timer.style.background = `linear-gradient(to right,#C68EFD, #8F87F1)`;
      timeLine.style.background = `#E9A5F1`;
    }
    next =!next
    img.src = `${`${save[i+7]}`}`
    if (i==image.length-1) {
      img.src = `${image[i].value}`
      p.textContent = `${guessWord[i].value}`
    }
    if (i!=image.length-1) {
      p.textContent = "?"
      p.style.background = `black`;
      p.style.color = `white`;
      p.style.borderColor = `white`;
    }

  }, i * 8000); 
}
  
};

document.addEventListener("keydown", (e) => {
  if (e.key == "1") {
    change();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == " ") {
    form.save.style.display = "block";
  }
  if (e.key == "3") {
    settings.style.display = "flex";
  }
});

for (let i = 0; i < colorPicker.length; i++) {
  colorPicker[i].addEventListener("input", () => {
    if (colorPicker[i].value == "rgb(0, 0, 0)") {
      colorPicker[i].value = "rgb(5, 5, 5)";
    }
    colorBlocks[i].style.background = colorPicker[i].value;
  });
}

close.addEventListener("click", () => {
  settings.style.display = "none";
});

settings.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  for (let i = 0; i < colorPicker.length; i++) {
    if (colorPicker[i].value == "#000000") {
      colorPicker[i].value = "#050505";
    }
  }
  save = [settings.one.value , settings.two.value , settings.three.value , settings.four.value, guessWord[0].value , guessWord[1].value , guessWord[2].value , image[0].value,image[1].value,image[2].value]

  body.style.background = `linear-gradient(${save[0]},${save[1]})`;
  timer.style.background = `${save[2]}`;
  timer.children[0].style.color = `${save[3]}`;
  timer.style.borderColor = `${save[3]}`;
  timeLine.style.background = `linear-gradient(to right,${save[1]},${save[0]})`;
  content.style.background = `linear-gradient(${save[1]},${save[0]})`;
  content.style.borderColor = `${save[3]}`;
  content.children[0].style.borderColor = `${save[3]}`;
  p.style.background = `${save[3]}`;
  p.style.color = `${save[2]}`;
  p.style.borderColor = `${save[2]}`;
  // options.style.background = `linear-gradient(${settings.one.value},${settings.two.value})`;
  // for (let i = 0; i < options.children.length; i++) {
  // options.children[i].style.background = `${settings.four.value}`;
  // options.children[i].style.color = `${settings.three.value}`;
  // options.children[i].style.borderColor = `${settings.three.value}`;

  //}
  localStorage.setItem("SaveGuess", JSON.stringify(save));

});
  body.style.background = `linear-gradient(${save[0]},${save[1]})`;
  timer.style.background = `${save[2]}`;
  timer.children[0].style.color = `${save[3]}`;
  timer.style.borderColor = `${save[3]}`;
  timeLine.style.background = `linear-gradient(to right,${save[1]},${save[0]})`;
  content.style.background = `linear-gradient(${save[1]},${save[0]})`;
  content.style.borderColor = `${save[3]}`;
  content.children[0].style.borderColor = `${save[3]}`;
  p.style.background = `${save[3]}`;
  p.style.color = `${save[2]}`;
  p.style.borderColor = `${save[2]}`;

  for (let i = 0; i < colorPicker.length; i++) {
    colorPicker[i].value = save[i]
    if (colorPicker[i].value == "rgb(0, 0, 0)") {
      colorPicker[i].value = "rgb(5, 5, 5)";
    }
    colorBlocks[i].style.background = colorPicker[i].value;
  ;
}
for (let i = 0; i < image.length - 1; i++) {
  image[i].value = save[i+7]
  guessWord[i].value = save[i+4]
}