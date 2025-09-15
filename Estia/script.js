const noise = document.getElementById("noise")
const noi = document.getElementById("noi")
let audio = [false, false, false, false, false, false, false];
const sounds={
    "Pink": "./assets/audiocheck.net_PinkNoise_15min.mp3",
    "White": "./assets/audiocheck.net_WhiteNoise_15min.mp3",
    "Brown": "./assets/audiocheck.net_BrownNoise_15min.mp3",
    "Classical": "./assets/4 Classical Pieces Relaxing Piano [15min] [TubeRipper.com].mp3",
    "Cafe":"./assets/15 minutes of Cafe Noise [TubeRipper.com].mp3",
    "None": "./assets/Recording.m4a"
}
const speech = new SpeechSynthesisUtterance()
let voices = []
const select = document.getElementById("select")
let trfa= false
let len = 0

const ai = document.getElementById("AI")
const p = document.getElementById("myp")
const gen = document.getElementById("gen")  
const ge = document.getElementById("ge")  
let incorrect = document.getElementsByClassName("incorrect")
let correct = document.getElementsByClassName("correct")
let para = "hi"

const pop = document.getElementById("pop")
const restart = document.getElementById("restart")
const mark = document.getElementById("mark")
const speed = document.getElementById("speed")
const edit = document.getElementById("edit")
const sub = document.getElementById("sub")
const fir = document.getElementById("fir")
const arrows = document.getElementById("arrows")
const by = document.getElementsByClassName("byby")
let interval
speechSynthesis.cancel();
let paused = true

arrows.children[1].addEventListener("click",()=>{
    clearInterval(interval)
    speechSynthesis.cancel()
    pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
    if(speed.value<15){
        speed.value=Number(speed.value)+5}
        fir.style.transform = `rotate(${(speed.value-10) * 16}deg)`
    if(select.value != "None" && pop.getAttribute("src")){
        select.value = "Disabled"
        select.setAttribute("disabled","")
        pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
        clearInterval(interval)
        speechSynthesis.cancel()
    }
})

arrows.children[0].addEventListener("click",()=>{
    pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
    clearInterval(interval)
    speechSynthesis.cancel()
    if(speed.value>5){
        speed.value=Number(speed.value)-5}
        fir.style.transform = `rotate(${(speed.value -10)*16}deg)`
    if(select.value != "None" && pop.getAttribute("src")){
        select.value = "None"
        select.setAttribute("disabled","")
        pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
        clearInterval(interval)
        speechSynthesis.cancel()
    }

})

sub.addEventListener("click",()=>{
    sub.blur();
    para = edit.value.split(" ").filter(item => item.trim() !== "").join(" ")
    p.childNodes[1].textContent = edit.value.split(" ").filter(item => item.trim() !== "").join(" ")
    if(sub.value==="Save" ){
        speech.rate = Number(speed.value) / 10
        gen.style.display = "block"
        ai.style.display = "none"
        edit.style.display = "none"
        p.style.display = "block"
        sub.value = "Edit"
        p.parentElement.style.backgroundColor = "rgb(255, 255, 255)"
        speechSynthesis.cancel();
    }
    else{
        speechSynthesis.cancel();
        speech.rate = Number(speed.value) / 10
        ge.style.display = "none"
        gen.value = "Generate"
        ai.innerHTML = ""
        ai.style.display = "none"
        gen.style.display = "none"
        p.parentElement.style.backgroundColor = "rgb(225, 255, 255)"
        edit.style.display = "block"
        p.style.display = "none"
        sub.value = "Save"
        pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
        clearInterval(interval)
        p.childNodes[1].textContent = para
        mark.textContent = ""
    }

})

function PV(){
    voices = speechSynthesis.getVoices()
    select.innerHTML += voices.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
}

function SV(){
    const selectedVoice = voices.find(voice => voice.name === select.value);
    if (selectedVoice) {
        speech.voice = selectedVoice;
    }
}

speechSynthesis.addEventListener("voiceschanged",PV)
select.addEventListener("change",SV)

PV() 
let tts = ( )=> {
    speech.rate = Number(speed.value) / 10
    speech.text = para
    const selectedVoice = voices.find(voice => voice.name === select.value);
    if (selectedVoice && by[0].children[0].textContent == "Voice" && paused){
        speech.voice = selectedVoice;
        speechSynthesis.speak(speech)
    }
    speechSynthesis.pause()
    if (pop.getAttribute("src") == "./assets/pause-circle-svgrepo-com (1).svg" && sub.value=="Edit"){
             speechSynthesis.resume()
    }
}

select.addEventListener("click",()=>{
    speechSynthesis.pause()
    pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
    clearInterval(interval)
})
select.addEventListener("change",()=>{
    speechSynthesis.cancel()
    pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
    clearInterval(interval)
    if(by[0].children[0].textContent == "Voice"){
    p.childNodes[1].textContent = para
    mark.textContent = ""
}})

let highlight = ()=>{
    speed.value=Number(speed.value)
    if(by[0].children[0].textContent == "LetterByLetter"){
        if (pop.getAttribute("src") == "./assets/pause-circle-svgrepo-com (1).svg" && sub.value=="Edit"){
            pop.src = "./assets/play-button-o-svgrepo-com.svg"
            let over = ()=>{
                speed.value=Number(speed.value)
                if (mark.textContent.length < p.textContent.length){
                    if(",.!?%$".includes(p.childNodes[1].textContent[0])){
                        setTimeout(()=>{ 
                            trfa = false
                        },750)
                        trfa= true
                        mark.textContent += p.childNodes[1].textContent[0]
                        p.childNodes[1].textContent = p.childNodes[1].textContent.slice(1,)
                        
                    }
                    else if(!trfa){
                            mark.textContent += p.childNodes[1].textContent[0]
                            p.childNodes[1].textContent = p.childNodes[1].textContent.slice(1,)}
                    }

        }
        interval = setInterval(over, Number(speed.value)*-3+75)
    }

    else{
        p.childNodes[1].textContent =p.childNodes[1].textContent.trimEnd(" ") + " "
        pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
        while(mark.textContent.slice(-1) != " "){
            mark.textContent += p.childNodes[1].textContent[0]
            p.childNodes[1].textContent = p.childNodes[1].textContent.slice(1,)}
        
        clearInterval(interval)
        speechSynthesis.pause()
}
}
    else if (by[0].children[0].textContent == "WordByWord"){
        if (pop.getAttribute("src") == "./assets/pause-circle-svgrepo-com (1).svg" && sub.value=="Edit"){
            pop.src = "./assets/play-button-o-svgrepo-com.svg"
            let over = ()=>{
                if (mark.textContent.length < p.textContent.length){
                    if(("%,.!?".includes(p.childNodes[1].textContent.split(" ")[0].slice(-1)) || p.childNodes[1].textContent.split(" ")[0].includes("\n")) && !trfa){
                        setTimeout(()=>{ 
                            trfa = false
                        },750)
                        
                        trfa= true
                        mark.textContent += p.childNodes[1].textContent.split(" ")[0] + " "
                        p.childNodes[1].textContent = p.childNodes[1].textContent.split(" ").slice(1,).join(" ");
                    }
                    else if(!trfa){
                        mark.textContent += p.childNodes[1].textContent.split(" ")[0] + " "
                        p.childNodes[1].textContent = p.childNodes[1].textContent.split(" ").slice(1,).join(" ");}
                    }
                    
                    
                }
                console.log(800+Number(speed.value)*-40)
                interval = setInterval(over,800+Number(speed.value)*-40)
            }
            
            else{
                speechSynthesis.pause()
                pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
                clearInterval(interval)
            }
        }
        else{
            if (pop.getAttribute("src") == "./assets/pause-circle-svgrepo-com (1).svg" && sub.value=="Edit"){
            tts()
            p.childNodes[1].textContent = para
            mark.textContent = ""
            pop.src = "./assets/play-button-o-svgrepo-com.svg"
        }
                        
            else{
                speechSynthesis.pause()
                pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
                clearInterval(interval)
                paused= false
            }
        }
    }
    
pop.addEventListener("click", highlight);

by[0].addEventListener("click",()=>{
    clearInterval(interval)
    speechSynthesis.pause()
    pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
    if(by[0].children[0].textContent == "LetterByLetter"){
        by[0].children[0].textContent = "WordByWord"
    }
    else if (by[0].children[0].textContent == "WordByWord"){
        by[0].children[0].textContent = "Voice"
        select.style.display ="block"
    }
    else{
        by[0].children[0].textContent = "LetterByLetter"
        select.style.display ="none"
    }
})

restart.addEventListener("click", ()=>{
    pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
    clearInterval(interval)
    p.childNodes[1].textContent = para
    mark.textContent = ""
    speechSynthesis.cancel()
    select.removeAttribute("disabled")
    paused= true
})



for (let i = 0; i < noise.children.length; i++) {
    audio[i] = new Audio(sounds[noise.children[i].textContent]);
    audio[i].loop = true;
}

for (let i = 0; i < noise.children.length; i++) {
    noise.children[i].addEventListener("click",()=>{
        for(let k=0; k < noise.children.length;k++){
            if(k!=i){
                noise.children[k].style.backgroundColor = "#00b4ff"
                audio[k].pause() 
                audio[k].currentTime = 0;  
            }
        }
        noise.children[i].style.backgroundColor = "#009fe3"
        if(!audio[i].play()==true){
            audio[i].play()
        }
    })
    
}


noi.addEventListener("input", () => {
    const vol = Number(noi.value) / 10;
    for (let i = 0; i < audio.length; i++) {
        audio[i].volume = vol;}
    })

gen.addEventListener("click", async () => {
    select.value = "None"
    select.setAttribute("disabled","")
    ai.style.display = "block"
    if(gen.value == "Generate"){
        ai.innerHTML='<article class="load"><h1>Generating</h1><h1 class="o">.</h1><h1 class="n">.</h1><h1 class="e">.</h1></article>'
        const prompt = `'${para?.trim()}'--> If the text says "Write here...", or is empty, or makes no sense, then only write this: Please Try Again. If the text is okay: Make more than 5 questions about it, make sure that the questions are in the same language as the text and make sure that you sre using correct language check it multiple times!!,Each question must go inside a <div>,Put the question itself in an <h2>,Each question needs 3 answer choices,Use <input type="radio"> for the answers,Each <input> must have a <label> and they should be inside <label>,Do NOT put the answer choices in any <div>,Do NOT use <br> tags,Only one answer should be correct,Give the correct input answer the class "correct",Give the wrong input answers the class "incorrect",Do NOT write anything else — only the questions and answers,Make sure the questions are about the topic from the text.`;
        try {
            const response = await fetch("http://localhost:3000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("AI response:", data.output);
        
        ai.innerHTML = data.output || "⚠️ No response received.";
        ai.innerHTML = ai.innerHTML.replace("```html","")
        ai.innerHTML = ai.innerHTML.replace("```","")
        mark.textContent = ""
        p.childNodes[1].textContent = para;
        
    } catch (error) {
        console.error("Error contacting server:", error);
        ai.textContent = "⚠️ Error generating response.(You are out of credits or AI is not on)";
    }
    gen.value = "Submit"
    p.style.display = "none"
    speechSynthesis.pause()
}
else{
    let res = 0
    gen.value = "Generate"
    p.style.display = "block"
    ge.style.display = "block"
    pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
    p.childNodes[1].textContent = para
    mark.textContent = ""
    clearInterval(interval)
    for(let i = 0;i< correct.length;i++){
        correct[i].parentElement.style.backgroundColor = "rgba(0, 255, 0)";
        correct[i].setAttribute("disabled", "");
        if(correct[i].checked){
            correct[i].parentElement.style.backgroundColor = "rgba(0, 255, 0)";
            res++
        }
    }
    for(let i = 0;i< incorrect.length;i++){
        incorrect[i].parentElement.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        incorrect[i].setAttribute("disabled", "");
        if(incorrect[i].checked){
            incorrect[i].parentElement.style.backgroundColor = "rgba(255, 0, 0)";
        }
    }
    ai.innerHTML+=`<h1>${res} out of ${correct.length}</h1>`
    speechSynthesis.pause()
}
});

ge.addEventListener("click",()=>{
    pop.src = "./assets/pause-circle-svgrepo-com (1).svg"
    p.childNodes[1].textContent = para
    mark.textContent = ""
    ge.style.display = "none"
    ai.style.display = "none"
    ai.innerHTML = ""
    speechSynthesis.pause()
    select.removeAttribute("disabled")
})

