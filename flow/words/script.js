const inputs = document.getElementsByClassName("editable")
const form = document.querySelector("form")
let lst = JSON.parse(localStorage.getItem("Words")) || []
let res = JSON.parse(localStorage.getItem("Save")) || []


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
        inputs[i].style.color = "white"
        inputs[i].style.backgroundColor = ""
    })    
}

document.addEventListener("keydown",(e)=>{
    if(e.key == " "){
        form.save.style.display = "block"
    }
})
