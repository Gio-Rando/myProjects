const form = document.querySelector("form");
const save = document.getElementsByClassName("save");
const checker = document.getElementsByClassName("check");
const settings = document.getElementsByClassName("settings")[0];
const colorBlocks = document.getElementsByClassName("viscol");
const colorPicker = document.querySelectorAll("input[type=color]");
const three = document.querySelectorAll(".three");
const four = document.querySelectorAll(".four");
const body = document.querySelector("body");
const close = document.querySelector("h2");
const label = document.querySelectorAll(".collapsible label");
const colText = document.getElementsByClassName("white");
const labels = document.querySelectorAll(".label");
label.forEach((el) => {
  el.style.background = `linear-gradient(${settings.one.value}, ${settings.two.value})`;
  el.style.filter = "brightness(200%)";
});

const collapsibleTexts = document.querySelectorAll(".collapsible-text");

let lst = JSON.parse(localStorage.getItem("SaveDef")) || [];
let check = JSON.parse(localStorage.getItem("CheckDef")) || [];
let theme = JSON.parse(localStorage.getItem("ThemeDef")) || [
  "rgb(0, 10,34)",
  "rgb(15, 0, 29)",
  "blue",
  "magenta",
];

document.addEventListener("keydown", (e) => {
  const heads = document.getElementsByClassName("collapsible-heads");
  if (e.key == "1") {
    for (let i = 0; i < heads.length; i++) {
      setTimeout(() => {
        heads[i].checked = true;
      }, i * 600);
    }
  } else if (e.key == "2") {
    for (let i = 0; i < heads.length; i++) {
      setTimeout(() => {
        heads[heads.length - 1 - i].checked = false;
      }, i * 600);
    }
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  lst = [];
  form.save.style.display = "none";
  for (let i = 0; i < save.length; i++) {
    lst.push(save[i].textContent);
  }
  for (let i = 0; i < checker.length; i++) {
    if (check.includes(checker[i].textContent)) {
      checker[i].style.color = "red";
      checker[i].style.border = "10px solid rgb(255, 0, 0)";
    }
    check.push(checker[i].textContent);
  }
  localStorage.setItem("SaveDef", JSON.stringify(lst));
  localStorage.setItem("CheckDef", JSON.stringify([...new Set(check)]));
});

for (let i = 0; i < save.length; i++) {
  save[i].textContent = lst[i];
}

for (let i = 0; i < checker.length; i++) {
  checker[i].addEventListener("click", () => {
    checker[i].style.color = `${theme[3]}`;
    checker[i].style.border = "";
  });
}

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
      colorPicker[i].value = "rgb(1, 1, 1)";
    }
    colorBlocks[i].style.background = colorPicker[i].value;
  });
}

close.addEventListener("click", () => {
  settings.style.display = "none";
});

settings.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < colorPicker.length; i++) {
    if (colorPicker[i].value == "#000000") {
      colorPicker[i].value = "#050505";
    }
  }
  theme = [
    settings.one.value,
    settings.two.value,
    settings.three.value,
    settings.four.value,
  ];
  body.style.background = `linear-gradient( ${settings.one.value},${settings.two.value})`;
  body.style.backdropFilter = "brightness(50%)";
  
  for (let i = 0; i < three.length; i++) {
    three[i].style.color = `${settings.three.value}`;
  }
  for (let i = 0; i < four.length; i++) {
    four[i].style.color = `${settings.four.value}`;
  }
  for (let i = 0; i < label.length; i++) {
    label[
      i
    ].style.background = `linear-gradient( ${settings.one.value},${settings.two.value})`;
    label[i].style.filter = "brightness(100%)";
    colText[
      i
    ].style.background = `linear-gradient( ${settings.two.value},${settings.one.value})`;
    labels[i].style.setProperty("--angle", "360deg");
    labels[i].style.setProperty(
      "--conicColors",
      `rgba(255,255,255,0), ${settings.three.value}, ${settings.four.value}`
    );
    collapsibleTexts[i].style.setProperty("--angle", "360deg");
    collapsibleTexts[i].style.setProperty(
      "--conicColors",
      `rgba(255,255,255,0), ${settings.three.value}, ${settings.four.value}`
    );
  }
  localStorage.setItem("ThemeDef", JSON.stringify(theme));
  settings.style.display = "none";
  form.save.style.background = `linear-gradient( ${theme[1]},${theme[0]})`;
  form.save.style.color = `${theme[3]}`;
});

body.style.background = `linear-gradient( ${theme[0]},${theme[1]})`;
body.style.backdropFilter = "brightness(75%)";

for (let i = 0; i < three.length; i++) {
  three[i].style.color = `${theme[2]}`;
}
for (let i = 0; i < four.length; i++) {
  four[i].style.color = `${theme[3]}`;
}
for (let i = 0; i < label.length; i++) {
  label[i].style.background = `linear-gradient( ${theme[0]},${theme[1]})`;
  label[i].style.filter = "brightness(100%)";
  colText[i].style.background = `linear-gradient( ${theme[1]},${theme[0]})`;
  labels[i].style.setProperty("--angle", "360deg");
  labels[i].style.setProperty(
    "--conicColors",
    `rgba(255,255,255,0), ${theme[2]}, ${theme[3]}`
  );
  collapsibleTexts[i].style.setProperty("--angle", "360deg");
  collapsibleTexts[i].style.setProperty(
    "--conicColors",
    `rgba(255,255,255,0), ${theme[2]}, ${theme[3]}`
  );
}
form.save.style.background = `linear-gradient( ${theme[1]},${theme[0]})`;
form.save.style.color = `${theme[3]}`;
