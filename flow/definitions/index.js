const form = document.querySelector("form")
const save = document.getElementsByClassName("save")
const checker = document.getElementsByClassName("check")
let lst = JSON.parse(localStorage.getItem("SaveDef")) || []
let check = JSON.parse(localStorage.getItem("CheckDef")) || []

document.addEventListener("keydown", (e) => {
const heads = document.getElementsByClassName("collapsible-heads")
if(e.key == "1"){
    for (let i = 0; i < heads.length; i++) {
        setTimeout(() => {
            heads[i].checked = true
        }, i * 600);
}}
else if(e.key=="2"){
        for (let i = 0; i < heads.length; i++) {
        setTimeout(() => {
            heads[heads.length - 1 - i].checked = false
        }, i * 600);
}}})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    lst = []
    form.save.style.display = "none"
    for (let i = 0; i < save.length; i++) {
        lst.push(save[i].textContent)
    }
    for (let i = 0; i < checker.length; i++) {
            if (check.includes(checker[i].textContent)) {
                checker[i].style.color = "red"
                checker[i].style.border =  "10px solid rgb(255, 0, 0)"

        } 
        check.push(checker[i].textContent)
    }
    localStorage.setItem("SaveDef",JSON.stringify(lst))
    localStorage.setItem("CheckDef",JSON.stringify([...new Set(check)]))
})

for(let i = 0 ; i < save.length ;i++){
    save[i].textContent = lst[i]
}

for (let i = 0; i < checker.length; i++) {
    checker[i].addEventListener("click",()=>{
        checker[i].style.color = "magenta"
        checker[i].style.border = ""
    })    
}

document.addEventListener("keydown",(e)=>{
    if(e.key == " "){
        form.save.style.display = "block"
    }
})
