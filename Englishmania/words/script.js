const inputs = document.getElementsByClassName("editable")
const form = document.querySelector("form")
const settings = document.querySelectorAll("form")[1]
const colorBlocks = document.getElementsByClassName("viscol");
const colorPicker = document.querySelectorAll("input[type=text]");
const body = document.querySelector("body");
const close = document.querySelector("h2");
const universal = document.querySelectorAll("*")
const span = document.querySelectorAll("span")
let lst = JSON.parse(localStorage.getItem("Words")) || []
let res = JSON.parse(localStorage.getItem("Save")) || []
let theme = JSON.parse(localStorage.getItem("ThemeWords")) || ["#010220","#021057","#fff"]


document.addEventListener("keydown", (e) => {
    const rows = document.querySelectorAll('.words');
    if(e.key == "1"){
        for(let i in inputs){
            inputs[i].contentEditable = "true"
        }
        rows.forEach((row, index) => {
            setTimeout(() => {
            row.classList.add('animated');
            }, index * 1000);
        });}
    else if(e.key=="2"){
        for(let i in inputs){
            inputs[i].contentEditable = "false"
        }

        rows.forEach(row => {
        row.classList.remove('animated')
        row.style.opacity = "0"
})}
})


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    res = []
    form.save.style.display = "none"
    for (let i = 0; i < inputs.length; i++) {
        if (lst.includes(inputs[i].textContent)) {
            inputs[i].style.color = "black"
            inputs[i].style.backgroundColor = "red"
        } 
            lst.push(inputs[i].textContent)
            res.push(inputs[i].textContent)
    }

    localStorage.setItem("Words",JSON.stringify([...new Set(lst)]))
    localStorage.setItem("Save", JSON.stringify(res))
})
for(let i = 0 ; i < inputs.length ;i++){
    inputs[i].textContent = res[i]
}


for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click",()=>{
        inputs[i].style.color = `${theme[2]}`
        inputs[i].style.backgroundColor = ""
    })    
}

document.addEventListener("keydown", (e) => {
  if (e.key == " ") {
    form.save.style.display = "block";
  }
  if (e.key == "3") {
    settings.style.display = "flex";
  }
});
close.addEventListener("click", () => {
  settings.style.display = "none";
});

for (let i = 0; i < colorPicker.length; i++) {
  colorPicker[i].addEventListener("input", () => {
    if (colorPicker[i].value == "rgb(0, 0, 0)") {
      colorPicker[i].value = "rgb(1, 1, 1)";
    }
    colorBlocks[i].style.background = colorPicker[i].value;
  });
}

settings.addEventListener("submit",(e)=>{
    e.preventDefault()
      for (let i = 0; i < colorPicker.length; i++) {
    if (colorPicker[i].value == "#000000") {
        colorPicker[i].value = "#050505";
    }
  }
  theme = [ settings.one.value , settings.two.value , settings.three.value ]
    settings.style.display = "none";
    body.style.background = `linear-gradient(${theme[0]} ,${theme[1]})`
    universal.forEach(el => {
        if (el.tagName.toLowerCase() !== "p" && el.tagName.toLowerCase() !== "h2") {
            el.style.color = `${theme[2]}`
        }
    });
    span.forEach((el) => {el.style.color = theme[2]});
    form.save.style.background = `${theme[0]}`
    localStorage.setItem("ThemeWords", JSON.stringify(theme));
})

body.style.background = `linear-gradient(${theme[0]} ,${theme[1]})`
universal.forEach(el => {
if (el.tagName.toLowerCase() !== "p" && el.tagName.toLowerCase() !== "h2") {
    el.style.color = `${theme[2]}`
}
});
span.forEach((el) => {el.style.color = theme[2]});
form.save.style.background = `${theme[0]}`
for (let i = 0; i < colorBlocks.length; i++) {
  colorBlocks[i].style.background = `${theme[i]}`
  colorPicker[i].value =`${theme[i]}`
}