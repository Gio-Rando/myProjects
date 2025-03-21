let white = document.getElementsByClassName("key");
let black = document.getElementsByClassName("keyr");
let octaves = document.getElementsByClassName("octave");
let menu = document.getElementById("menu")
let len = document.getElementById("length");
let controls = document.getElementsByClassName("control");
let play = document.getElementById("play")
let key
let next = 1;
let nex = 1;
let ne = 0;
let n = 0;
let start = true
let volumes = true
let bcolors = ["hsl(0 100% 30%)","hsl(32.82 100% 40%)","hsl(60 100% 50%)","hsl(120 100% 60%)","hsl(180 100% 70%)","hsl(240 100% 80%)","hsl(300 100% 90%)"]
let nexts = [1.1,2.1,3.1,4.1,5.1,6.1,7.1]
let nexes = [1,2,3,4,5,6,7]
let nes = [0,7,14,21,28,35,42]
let ns=[0.7,5,10,15,20,25,30]
let allWhites = ["A0","B0","C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C7","D7","E7","F7","G7","A0","B0","C1","D1","E1","F1","G1"] 
let allWhite = ["A","B","C","D","E","F","G"]
let allBlacks = ["Bb0","Db1","Eb1","Gb1","Ab1","Bb1","Db2","Eb2","Gb2","Ab2","Bb2","Db3","Eb3","Gb3","Ab3","Bb3","Db4","Eb4","Gb4","Ab4","Bb4","Db5","Eb5","Gb5","Ab5","Bb5","Db6","Eb6","Gb6","Ab6","Bb6","Db7","Eb7","Gb7","Ab7","Bb0","Db1","Eb1","Gb1","Ab1"]
let allBlacker = ["Bb","Db","Eb","Gb","Ab"]
let allBlack = ["Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X"]
let playing = [false, false, false, false, false, false, false];
let playingBlack = [false, false, false, false, false, false, false];
let audio = [false, false, false, false, false, false, false];
let audioBlack = [false, false, false, false, false, false, false];
const audioNotes = {"A0": ["./notes/A0.mp3",0,30],    "Bb0": ["./notes/Bb0.mp3",19.53,30],    "B0": ["./notes/B0.mp3",38.82,30],    "C1": ["./notes/C1.mp3",60,30],   "Db1": ["./notes/Db1.mp3",49.41,30],    "D1": ["./notes/D1.mp3",120,30],    "Eb1": ["./notes/Eb1.mp3",150.12,30],    "E1": ["./notes/E1.mp3",180,30],    "F1": ["./notes/F1.mp3",240,30],    "Gb1": ["./notes/Gb1.mp3",209.88,30],    "G1": ["./notes/G1.mp3",300,30],    "Ab1": ["./notes/Ab1.mp3",270.12,30],    "A1": ["./notes/A1.mp3",0,40],    "Bb1": ["./notes/Bb1.mp3",19.53,40],    "B1": ["./notes/B1.mp3",38.82,40],    "C2": ["./notes/C2.mp3",60,40],    "Db2": ["./notes/Db2.mp3",49.41,40],    "D2": ["./notes/D2.mp3",120,40],    "Eb2": ["./notes/Eb2.mp3",150.12,40],    "E2": ["./notes/E2.mp3",180,40],    "F2": ["./notes/F2.mp3",240,40],    "Gb2": ["./notes/Gb2.mp3",209.88,40],    "G2": ["./notes/G2.mp3",300,40],    "Ab2": ["./notes/Ab2.mp3",270.12,40],    "A2": ["./notes/A2.mp3",0,50],    "Bb2": ["./notes/Bb2.mp3",19.53,50],    "B2": ["./notes/B2.mp3",38.82,50],    "C3": ["./notes/C3.mp3",60,50],    "Db3": ["./notes/Db3.mp3",49.41,50],    "D3": ["./notes/D3.mp3",120,50],    "Eb3": ["./notes/Eb3.mp3",150.12,50],    "E3": ["./notes/E3.mp3",180,50],    "F3": ["./notes/F3.mp3",240,50],    "Gb3": ["./notes/Gb3.mp3",209.88,50],    "G3": ["./notes/G3.mp3",300,50],    "Ab3": ["./notes/Ab3.mp3",270.12,50],    "A3": ["./notes/A3.mp3",0,60],    "Bb3": ["./notes/Bb3.mp3",19.53,60],    "B3": ["./notes/B3.mp3",38.82,60],    "C4": ["./notes/C4.mp3",60,60],    "Db4": ["./notes/Db4.mp3",49.41,60],    "D4": ["./notes/D4.mp3",120,60],    "Eb4": ["./notes/Eb4.mp3",150.12,60],    "E4": ["./notes/E4.mp3",180,60],    "F4": ["./notes/F4.mp3",240,60],    "Gb4": ["./notes/Gb4.mp3",209.88,60],    "G4": ["./notes/G4.mp3",300,60],    "Ab4": ["./notes/Ab4.mp3",270.12,60],    "A4": ["./notes/A4.mp3",0,70],    "Bb4": ["./notes/Bb4.mp3",19.53,70],    "B4": ["./notes/B4.mp3",38.82,70],    "C5": ["./notes/C5.mp3",60,70],    "Db5": ["./notes/Db5.mp3",49.41,70],    "D5": ["./notes/D5.mp3",120,70],    "Eb5": ["./notes/Eb5.mp3",150.12,70],    "E5": ["./notes/E5.mp3",180,70],    "F5": ["./notes/F5.mp3",240,70],    "Gb5": ["./notes/Gb5.mp3",209.88,70],    "G5": ["./notes/G5.mp3",300,70],    "Ab5": ["./notes/Ab5.mp3",270.12,70],    "A5": ["./notes/A5.mp3",0,80],    "Bb5": ["./notes/Bb5.mp3",19,53,80],    "B5": ["./notes/B5.mp3",38.83,80],    "C6": ["./notes/C6.mp3",60,80],    "Db6": ["./notes/Db6.mp3",49.41,80],    "D6": ["./notes/D6.mp3",120,80],    "Eb6": ["./notes/Eb6.mp3",150.12,80],    "E6": ["./notes/E6.mp3",180,80],    "F6": ["./notes/F6.mp3",240,80],    "Gb6": ["./notes/Gb6.mp3",209.88,80],    "G6": ["./notes/G6.mp3",300,80],    "Ab6": ["./notes/Ab6.mp3",270.12,80],   "A6": ["./notes/A6.mp3",0,90],    "Bb6": ["./notes/Bb6.mp3",19.53,90],    "B6": ["./notes/B6.mp3",38.82,90],    "C7": ["./notes/C7.mp3",60,90],    "Db7": ["./notes/Db7.mp3",49.41,90],    "D7": ["./notes/D7.mp3",120,90],    "Eb7": ["./notes/Eb7.mp3",150.12,90],    "E7": ["./notes/E7.mp3",180,90],    "F7": ["./notes/F7.mp3",240,90],    "Gb7": ["./notes/Gb7.mp3",209.88,90],    "G7": ["./notes/G7.mp3",300,90],    "Ab7": ["./notes/Ab7.mp3",270.12,90],    "A7": "./notes/A7.mp3",    "Bb7": "./notes/Bb7.mp3",    "B7": "./notes/B7.mp3",    "C8": "./notes/C8.mp3"};

play.addEventListener("click",()=>{
    if(start){
        for(let i = 0 ; i < Object.keys(audioNotes).length - 4;i++){
            audio = new Audio(Object.values(audioNotes)[i][0])
            audio.currentTime = 3
            audio.play()
            volumes = false 
            start = false
        }}
menu.style.display = "none"
})

controls[0].getElementsByTagName("p")[0].addEventListener("click",()=>{
    if(len.value != 20){
        len.value++
    }})

document.addEventListener("keydown",(e)=>{
    if(len.value != 20 && e.key === "+"){
        len.value++
    }
})

controls[0].getElementsByTagName("p")[1].addEventListener("click",()=>{
    if(len.value != 0){
        len.value--
    }
})

document.addEventListener("keydown",(e)=>{
    if(len.value != 0 && e.key === "-"){
        len.value--
    }
})

document.addEventListener("keydown", (event) => {    
    key = event.key.toLocaleUpperCase();
    for(let i =0; i < white.length;i++){
        if (key == `${white[i].lastElementChild.textContent[0]}` && !playing[i]) {
            white[i].style.background = `hsl(${audioNotes[white[i].lastElementChild.textContent][1]} 100% ${audioNotes[white[i].lastElementChild.textContent][2]}%)`;
            audio[i] = new Audio(audioNotes[white[i].lastElementChild.textContent][0]);
            audio[i].muted = volumes
            audio[i].play();
            playing[i] = true;
        }}});

document.addEventListener("keyup", (event) => {
    
    key = event.key.toLocaleUpperCase(); 

    for(let i = 0; i < white.length;i++){
        if (key == `${white[i].lastElementChild.textContent[0]}`) {
            white[i].style.background = "white";
            white[i].style.boxShadow = "";
            playing[i] = false;
            setTimeout(()=>{
                audio[i].pause();
                audio[i].currentTime = 0;  
            },len.value * 100)
        } 
    }
});

document.addEventListener("keydown" , event => {
    key = event.key.toLocaleUpperCase();
    for(let i = 0; i < black.length;i++){
        if(key == black[i].getElementsByTagName("h1")[0].textContent && !playingBlack[i]){
            black[i].style.background = `hsl(${audioNotes[black[i].getElementsByTagName("p")[0].textContent][1]} 100% ${audioNotes[black[i].getElementsByTagName("p")[0].textContent][2]}%)`;
            audioBlack[i] = new Audio(audioNotes[black[i].getElementsByTagName("p")[0].textContent][0]);
            audioBlack[i].play();
            playingBlack[i] = true;
            audioBlack[i].muted = volumes
        }
    }
    
})

document.addEventListener("keyup" , event => {
    
    key = event.key.toLocaleUpperCase()
    for(let i =0; i < black.length;i++){
        if(key == black[i].getElementsByTagName("h1")[0].textContent){
            black[i].style.background = "black";
            playingBlack[i] = false;
            setTimeout(()=>{
                audioBlack[i].pause();
                audioBlack[i].currentTime = 0;  
            },len.value * 100)
        }
    }
});

document.addEventListener("keydown",(e) => {

    if(e.key == "ArrowUp"){
        next++
        nex++
        next = Math.floor(next)
        if(next == 8){
            next = 1
            nex = 1
        }
    }
    else if(e.key == "ArrowDown"){
        next--
        nex--
        next = Math.floor(next)
        if(next == 0){
            next = 7
            nex = 7
        }}
    if(e.key == "ArrowRight"){
        ne++
        n+=.7
        if(ne > 48){
            ne = 0}
        if(n > 35){
            n = 0}
        if(ne % 7 == 0){
            next = (ne / 7)+1}}
    else if(e.key == "ArrowLeft"){
        ne--
        n--
        if(ne < 0){
            ne = 48}
        if(n < 0){
            n = 35}
        if(ne % 7 == 0){
            next = (ne / 7)+1}}
    for(let i =0;i < octaves.length;i++){
       if(e.key == `${i+1}` || next == i+1){
        for(let k = 0 ; k < 7;k++){
            octaves[k].style.color ="#cccccc";
            octaves[k].style.boxShadow = "0px 0px 0px";
            octaves[k].style.background ="#282828";}
        octaves[i].style.background = bcolors[i];
        octaves[i].style.boxShadow = `0px 0px 40px ${bcolors[i]}`;
        octaves[i].style.color = "white";
        next = nexts[i];
        nex = nexes[i];
        ne = nes[i];
        n=ns[i]}}
    if(e.key == "ArrowDown" || e.key == "ArrowUp" || e.key>0){
        for(let i = 0; i < white.length;i++){
            white[i].lastElementChild.textContent = `${allWhite[i]}${nex}`;
            white[0].lastElementChild.textContent = `${allWhite[0]}${nex-1}`;
            white[1].lastElementChild.textContent = `${allWhite[1]}${nex-1}`;
        }

        for(let i = 0; i < white.length;i++){
            black[i].lastElementChild.textContent = `${allBlacker[i]}${nex}`;
            black[0].lastElementChild.textContent = `${allBlacker[0]}${nex-1}`;
        }
        for(let i =0;i < black.length;i++){
            black[i].getElementsByTagName("h1")[0].textContent = allBlack[i+Math.floor(n)];
        }}

    if(e.key == "ArrowRight" || e.key == "ArrowLeft"){;
        for(let i = 0;i < black.length;i++){
            black[i].lastElementChild.textContent = `${allBlacks[i+Math.floor(n)]}`;
            black[i].firstElementChild.textContent = allBlack[i+Math.floor(n)];
        }
        for(let i = 0 ; i < white.length;i++){
            white[i].style.background ="#ffff";
        }
        for(let i = 0 ; i < black.length;i++){
            black[i].style.background ="#000";
        }
        for(let i = 0; i , white.length;i++){
            white[i].lastElementChild.textContent = `${allWhites[i+ne]}`}}})