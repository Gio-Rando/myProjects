let white = document.getElementsByClassName("key");
let black = document.getElementsByClassName("keyr");
let octaves = document.getElementsByClassName("octave");
let key
let next = 1;
let nex = 1;
let ne = 0;
let n = 0;
let len = document.getElementById("length");
let long = document.getElementById("up");
let short = document.getElementById("down")
const audioNotes = {
    "A0": ["./notes/A0.mp3",0,30],
    "Bb0": ["./notes/Bb0.mp3",19.53,30],
    "B0": ["./notes/B0.mp3",38.82,30],
    "C1": ["./notes/C1.mp3",60,30],
    "Db1": ["./notes/Db1.mp3",49.41,30],
    "D1": ["./notes/D1.mp3",120,30],
    "Eb1": ["./notes/Eb1.mp3",150.12,30],
    "E1": ["./notes/E1.mp3",180,30],
    "F1": ["./notes/F1.mp3",240,30],
    "Gb1": ["./notes/Gb1.mp3",209.88,30],
    "G1": ["./notes/G1.mp3",300,30],
    "Ab1": ["./notes/Ab1.mp3",270.12,30],
    "A1": ["./notes/A1.mp3",0,40],
    "Bb1": ["./notes/Bb1.mp3",19.53,40],
    "B1": ["./notes/B1.mp3",38.82,40],
    "C2": ["./notes/C2.mp3",60,40],
    "Db2": ["./notes/Db2.mp3",49.41,40],
    "D2": ["./notes/D2.mp3",120,40],
    "Eb2": ["./notes/Eb2.mp3",150.12,40],
    "E2": ["./notes/E2.mp3",180,40],
    "F2": ["./notes/F2.mp3",240,40],
    "Gb2": ["./notes/Gb2.mp3",209.88,40],
    "G2": ["./notes/G2.mp3",300,40],
    "Ab2": ["./notes/Ab2.mp3",270.12,40],
    "A2": ["./notes/A2.mp3",0,50],
    "Bb2": ["./notes/Bb2.mp3",19.53,50],
    "B2": ["./notes/B2.mp3",38.82,50],
    "C3": ["./notes/C3.mp3",60,50],
    "Db3": ["./notes/Db3.mp3",49.41,50],
    "D3": ["./notes/D3.mp3",120,50],
    "Eb3": ["./notes/Eb3.mp3",150.12,50],
    "E3": ["./notes/E3.mp3",180,50],
    "F3": ["./notes/F3.mp3",240,50],
    "Gb3": ["./notes/Gb3.mp3",209.88,50],
    "G3": ["./notes/G3.mp3",300,50],
    "Ab3": ["./notes/Ab3.mp3",270.12,50],
    "A3": ["./notes/A3.mp3",0,60],
    "Bb3": ["./notes/Bb3.mp3",19.53,60],
    "B3": ["./notes/B3.mp3",38.82,60],
    "C4": ["./notes/C4.mp3",60,60],
    "Db4": ["./notes/Db4.mp3",49.41,60],
    "D4": ["./notes/D4.mp3",120,60],
    "Eb4": ["./notes/Eb4.mp3",150.12,60],
    "E4": ["./notes/E4.mp3",180,60],
    "F4": ["./notes/F4.mp3",240,60],
    "Gb4": ["./notes/Gb4.mp3",209.88,60],
    "G4": ["./notes/G4.mp3",300,60],
    "Ab4": ["./notes/Ab4.mp3",270.12,60],
    "A4": ["./notes/A4.mp3",0,70],
    "Bb4": ["./notes/Bb4.mp3",19.53,70],
    "B4": ["./notes/B4.mp3",38.82,70],
    "C5": ["./notes/C5.mp3",60,70],
    "Db5": ["./notes/Db5.mp3",49.41,70],
    "D5": ["./notes/D5.mp3",120,70],
    "Eb5": ["./notes/Eb5.mp3",150.12,70],
    "E5": ["./notes/E5.mp3",180,70],
    "F5": ["./notes/F5.mp3",240,70],
    "Gb5": ["./notes/Gb5.mp3",209.88,70],
    "G5": ["./notes/G5.mp3",300,70],
    "Ab5": ["./notes/Ab5.mp3",270.12,70],
    "A5": ["./notes/A5.mp3",0,80],
    "Bb5": ["./notes/Bb5.mp3",19,53,80],
    "B5": ["./notes/B5.mp3",38.83,80],
    "C6": ["./notes/C6.mp3",60,80],
    "Db6": ["./notes/Db6.mp3",49.41,80],
    "D6": ["./notes/D6.mp3",120,80],
    "Eb6": ["./notes/Eb6.mp3",150.12,80],
    "E6": ["./notes/E6.mp3",180,80],
    "F6": ["./notes/F6.mp3",240,80],
    "Gb6": ["./notes/Gb6.mp3",209.88,80],
    "G6": ["./notes/G6.mp3",300,80],
    "Ab6": ["./notes/Ab6.mp3",270.12,80],
    "A6": ["./notes/A6.mp3",0,90],
    "Bb6": ["./notes/Bb6.mp3",19.53,90],
    "B6": ["./notes/B6.mp3",38.82,90],
    "C7": ["./notes/C7.mp3",60,90],
    "Db7": ["./notes/Db7.mp3",49.41,90],
    "D7": ["./notes/D7.mp3",120,90],
    "Eb7": ["./notes/Eb7.mp3",150.12,90],
    "E7": ["./notes/E7.mp3",180,90],
    "F7": ["./notes/F7.mp3",240,90],
    "Gb7": ["./notes/Gb7.mp3",209.88,90],
    "G7": ["./notes/G7.mp3",300,90],
    "Ab7": ["./notes/Ab7.mp3",270.12,90],
    "A7": "./notes/A7.mp3",
    "Bb7": "./notes/Bb7.mp3",
    "B7": "./notes/B7.mp3",
    "C8": "./notes/C8.mp3"
};

let allWhites = ["A0","B0","C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C7","D7","E7","F7","G7","A0","B0","C1","D1","E1","F1","G1"]
let allBlacks = ["Bb0","Db1","Eb1","Gb1","Ab1","Bb1","Db2","Eb2","Gb2","Ab2","Bb2","Db3","Eb3","Gb3","Ab3","Bb3","Db4","Eb4","Gb4","Ab4","Bb4","Db5","Eb5","Gb5","Ab5","Bb5","Db6","Eb6","Gb6","Ab6","Bb6","Db7","Eb7","Gb7","Ab7","Bb0","Db1","Eb1","Gb1","Ab1"]
let allBlack = ["Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X","Q","W","S","Z","X"]


let playing = [false, false, false, false, false, false, false];
let playingBlack = [false, false, false, false, false, false, false];
let audio = [false, false, false, false, false, false, false];
let audioBlack = [false, false, false, false, false, false, false];

long.addEventListener("click",()=>{
    if(len.value != 20){
        len.value++
    }
})

document.addEventListener("keydown",(e)=>{
    if(len.value != 20 && e.key === "+"){
        len.value++
    }
})

short.addEventListener("click",()=>{
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
    if (key == `${white[0].getElementsByTagName("p")[1].textContent[0]}` && !playing[0]) {
        white[0].style.background = `hsl(${audioNotes[white[0].getElementsByTagName("p")[1].textContent][1]} 100% ${audioNotes[white[0].getElementsByTagName("p")[1].textContent][2]}%)`;
        audio[0] = new Audio(audioNotes[white[0].getElementsByTagName("p")[1].textContent][0]);
        audio[0].play();
        playing[0] = true;
    } 
    else if (key == `${white[1].getElementsByTagName("p")[1].textContent[0]}` && !playing[1]) {
        white[1].style.background = `hsl(${audioNotes[white[1].getElementsByTagName("p")[1].textContent][1]} 100% ${audioNotes[white[1].getElementsByTagName("p")[1].textContent][2]}%)`;
        audio[1] = new Audio(audioNotes[white[1].getElementsByTagName("p")[1].textContent][0]);
        audio[1].play();
        playing[1] = true;
    } 
    else if (key == `${white[2].getElementsByTagName("p")[0].textContent[0]}` && !playing[2]) {
        white[2].style.background = `hsl(${audioNotes[white[2].getElementsByTagName("p")[0].textContent][1]} 100% ${audioNotes[white[2].getElementsByTagName("p")[0].textContent][2]}%)`;
        audio[2] = new Audio(audioNotes[white[2].getElementsByTagName("p")[0].textContent][0]);
        audio[2].play();
        playing[2] = true;
    } 
    else if (key == `${white[3].getElementsByTagName("p")[1].textContent[0]}` && !playing[3]) {
        white[3].style.background = `hsl(${audioNotes[white[3].getElementsByTagName("p")[1].textContent][1]} 100% ${audioNotes[white[3].getElementsByTagName("p")[1].textContent][2]}%)`;
        audio[3] = new Audio(audioNotes[white[3].getElementsByTagName("p")[1].textContent][0]);
        audio[3].play();
        playing[3] = true;
    } 
    else if (key == `${white[4].getElementsByTagName("p")[1].textContent[0]}` && !playing[4]) {
        white[4].style.background = `hsl(${audioNotes[white[4].getElementsByTagName("p")[1].textContent][1]} 100% ${audioNotes[white[4].getElementsByTagName("p")[1].textContent][2]}%)`;
        audio[4] = new Audio(audioNotes[white[4].getElementsByTagName("p")[1].textContent][0]);
        audio[4].play();
        playing[4] = true;
    } 
    else if (key == `${white[5].getElementsByTagName("p")[1].textContent[0]}` && !playing[5]) {
        white[5].style.background = `hsl(${audioNotes[white[5].getElementsByTagName("p")[1].textContent][1]} 100% ${audioNotes[white[5].getElementsByTagName("p")[1].textContent][2]}%)`;
        audio[5] = new Audio(audioNotes[white[5].getElementsByTagName("p")[1].textContent][0]);
        audio[5].play();
        playing[5] = true;
    } 
    else if (key == `${white[6].getElementsByTagName("p")[0].textContent[0]}` && !playing[6]) {
        white[6].style.background = `hsl(${audioNotes[white[6].getElementsByTagName("p")[0].textContent][1]} 100% ${audioNotes[white[6].getElementsByTagName("p")[0].textContent][2]}%)`;
        audio[6] = new Audio(audioNotes[white[6].getElementsByTagName("p")[0].textContent][0]);
        audio[6].play();
        playing[6] = true;
      }
  });

document.addEventListener("keyup", (event) => {
    
    key = event.key.toLocaleUpperCase(); 

    if (key == `${white[0].getElementsByTagName("p")[1].textContent[0]}`) {
        white[0].style.background = "white";
        white[0].style.boxShadow = "";
        playing[0] = false;
        setTimeout(()=>{
            audio[0].pause();
            audio[0].currentTime = 0;  
        },len.value * 100)
    } 
    else if (key == `${white[1].getElementsByTagName("p")[1].textContent[0]}`) {
        white[1].style.background = "white";
        white[1].style.boxShadow = ""
        playing[1] = false;
        setTimeout(()=>{
            audio[1].pause();
            audio[1].currentTime = 0;  
        },len.value * 100)
    } 
    else if (key == `${white[2].getElementsByTagName("p")[0].textContent[0]}` ) {
        white[2].style.background = "white";
        white[2].style.boxShadow = "";
        playing[2] = false;
        setTimeout(()=>{
            audio[2].pause();
            audio[2].currentTime = 0;  
        },len.value * 100)
    } 
    else if (key == `${white[3].getElementsByTagName("p")[1].textContent[0]}`) {
        white[3].style.background = "white";
        white[3].style.boxShadow = "";
        playing[3] = false;
        setTimeout(()=>{
            audio[3].pause();
            audio[3].currentTime = 0;  
        },len.value * 100)
    } 
    else if (key == `${white[4].getElementsByTagName("p")[1].textContent[0]}`) {
        white[4].style.background = "white";
        white[4].style.boxShadow = "";
        playing[4] = false;
        setTimeout(()=>{
            audio[4].pause();
            audio[4].currentTime = 0;  
        },len.value * 100)
    } 
    else if (key == `${white[5].getElementsByTagName("p")[1].textContent[0]}`) {
        white[5].style.background = "white";
        white[5].style.boxShadow = "";
        playing[5] = false;
        setTimeout(()=>{
            audio[5].pause();
            audio[5].currentTime = 0;  
        },len.value * 100)
    } 
    else if (key == `${white[6].getElementsByTagName("p")[0].textContent[0]}`) {
        white[6].style.background = "white";
        white[6].style.boxShadow = "";
        playing[6] = false;
        setTimeout(()=>{
            audio[6].pause();
            audio[6].currentTime = 0;  
        },len.value * 100)
    }
});


document.addEventListener("keydown" , event => {
    key = event.key.toLocaleUpperCase();
    if(key == black[0].getElementsByTagName("h1")[0].textContent && !playingBlack[0]){
        black[0].style.background = `hsl(${audioNotes[black[0].getElementsByTagName("p")[0].textContent][1]} 100% ${audioNotes[black[0].getElementsByTagName("p")[0].textContent][2]}%)`;
        audioBlack[0] = new Audio(audioNotes[black[0].getElementsByTagName("p")[0].textContent][0]);
        audioBlack[0].play();
        playingBlack[0] = true;
    }
    else if(key == black[1].getElementsByTagName("h1")[0].textContent  && !playingBlack[1]){
        black[1].style.background = `hsl(${audioNotes[black[1].getElementsByTagName("p")[0].textContent][1]} 100% ${audioNotes[black[0].getElementsByTagName("p")[0].textContent][2]}%)`;
        audioBlack[1] = new Audio(audioNotes[black[1].getElementsByTagName("p")[0].textContent][0]);
        audioBlack[1].play();
        playingBlack[1] = true;
    }
    else if(key == black[2].getElementsByTagName("h1")[0].textContent && !playingBlack[2]){
        black[2].style.background = `hsl(${audioNotes[black[2].getElementsByTagName("p")[0].textContent][1]} 100% ${audioNotes[black[0].getElementsByTagName("p")[0].textContent][2]}%)`;
        audioBlack[2] = new Audio(audioNotes[black[2].getElementsByTagName("p")[0].textContent][0]);
        audioBlack[2].play();
        playingBlack[2] = true;
    }
    else if(key == black[3].getElementsByTagName("h1")[0].textContent && !playingBlack[3]){
        black[3].style.background =`hsl(${audioNotes[black[3].getElementsByTagName("p")[0].textContent][1]} 100% ${audioNotes[black[0].getElementsByTagName("p")[0].textContent][2]}%)`;
        audioBlack[3] = new Audio(audioNotes[black[3].getElementsByTagName("p")[0].textContent][0]);
        audioBlack[3].play();
        playingBlack[3] = true;
    }
    else if(key == black[4].getElementsByTagName("h1")[0].textContent && !playingBlack[4]){
        black[4].style.background = `hsl(${audioNotes[black[4].getElementsByTagName("p")[0].textContent][1]} 100% ${audioNotes[black[0].getElementsByTagName("p")[0].textContent][2]}%)`;
        audioBlack[4] = new Audio(audioNotes[black[4].getElementsByTagName("p")[0].textContent][0]);
        audioBlack[4].play();
        playingBlack[4] = true;
    }
});


document.addEventListener("keyup" , event => {
    
    key = event.key.toLocaleUpperCase()
    if(key == black[0].getElementsByTagName("h1")[0].textContent){
        black[0].style.background = "black";
        playingBlack[0] = false;
        setTimeout(()=>{
            audioBlack[0].pause();
            audioBlack[0].currentTime = 0;  
        },len.value * 100)
    }
    else if(key == black[1].getElementsByTagName("h1")[0].textContent){
        black[1].style.background = "black";
        playingBlack[1] = false;
        setTimeout(()=>{
            audioBlack[1].pause();
            audioBlack[1].currentTime = 0;  
        },len.value * 100)
    }
    else if(key == black[2].getElementsByTagName("h1")[0].textContent){
        black[2].style.background = "black";
        playingBlack[2] = false;
        setTimeout(()=>{
            audioBlack[2].pause();
            audioBlack[2].currentTime = 0;  
        },len.value * 100)
    }
    else if(key == black[3].getElementsByTagName("h1")[0].textContent){
        black[3].style.background = "black";
        playingBlack[3] = false;
        setTimeout(()=>{
            audioBlack[3].pause();
            audioBlack[3].currentTime = 0;  
        },len.value * 100)
    }
    else if(key == black[4].getElementsByTagName("h1")[0].textContent){
        black[4].style.background = "black";
        playingBlack[4] = false;
        setTimeout(()=>{
            audioBlack[4].pause();
            audioBlack[4].currentTime = 0;  
        },len.value * 100)
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
        }
    }
    if(e.key == "ArrowRight"){
        ne++
        n+=.7
        if(ne > 48){
            ne = 0
        }
        if(ne % 7 == 0){
            next = (ne / 7)+1
        }
    }
    else if(e.key == "ArrowLeft"){
        ne--
        n--
        if(ne < 0){
            ne = 48
        }
        if(ne % 7 == 0){
            next = (ne / 7)+1
        }
    }



    if(e.key == "7" || next == 7){
        for(let i = 0 ; i < 7;i++){
            octaves[i].style.color ="#cccccc";
            octaves[i].style.boxShadow = "0px 0px 0px";
            octaves[i].style.background ="#282828";
        }
        octaves[6].style.background = "hsl(300 100% 90%)";
        octaves[6].style.boxShadow = "0px 0px 40px hsl(300 100% 90%)";
        octaves[6].style.color = "white";
        lightness = 90;
        next = 7.1;
        nex = 7;
        ne = 42;
        n=30
    }
    else if(e.key == "6" || next == 6){
        for(let i = 0 ; i < 7;i++){
            octaves[i].style.color ="#cccccc";
            octaves[i].style.boxShadow = "0px 0px 0px";
            octaves[i].style.background ="#282828";
        }


        octaves[5].style.background = "hsl(240 100% 80%)";
        octaves[5].style.boxShadow = "0px 0px 40px hsl(240 100% 80%)";
        octaves[5].style.color = "white";
        lightness=80;
        next = 6.1;
        nex = 6;
        ne = 35;
        n=25
    } 
    else if(e.key == "5" || next == 5){
        for(let i = 0 ; i < 7;i++){
            octaves[i].style.color ="#cccccc";
            octaves[i].style.boxShadow = "0px 0px 0px";
            octaves[i].style.background ="#282828";
        }


        octaves[4].style.background = "hsl(180 100% 70%)";
        octaves[4].style.boxShadow = "0px 0px 40px hsl(180 100% 70%)";
        octaves[4].style.color = "white";
        lightness=70;
        next = 5.1;
        nex = 5;
        ne = 28;
        n=20
    }
    else if(e.key == "4" || next == 4){
        for(let i = 0 ; i < 7;i++){
            octaves[i].style.color ="#cccccc";
            octaves[i].style.boxShadow = "0px 0px 0px";
            octaves[i].style.background ="#282828";
        }
        octaves[3].style.background = "hsl(120 100% 60%)";
        octaves[3].style.boxShadow = "0px 0px 40px hsl(120 100% 60%)";
        octaves[3].style.color = "white";
        lightness=60;
        nex = 4;
        next = 4.1;
        ne = 21;
        n=15
    }
    else if(e.key == "3" || next == 3){
        for(let i = 0 ; i < 7;i++){
            octaves[i].style.color ="#cccccc";
            octaves[i].style.boxShadow = "0px 0px 0px";
            octaves[i].style.background ="#282828";
        }
        octaves[2].style.background = "hsl(60 100% 50%)";
        octaves[2].style.boxShadow = "0px 0px 40px hsl(60 100% 50%)";
        octaves[2].style.color = "white";
        lightness=50;
        next = 3.1;
        nex = 3;
        ne = 14;
        n=10
    }
    else if(e.key == "2"  || next == 2){
        for(let i = 0 ; i < 7;i++){
            octaves[i].style.color ="#cccccc";
            octaves[i].style.boxShadow = "0px 0px 0px";
            octaves[i].style.background ="#282828";
        }

        octaves[1].style.background = "hsl(32.82 100% 40%)";
        octaves[1].style.boxShadow = "0px 0px 40px hsl(32.82 100% 40%)";
        octaves[1].style.color = "white";
        lightness=40;
        next = 2.1;
        nex = 2;
        ne = 7;
        n=5
    }   
    else if(e.key == "1"  || next == 1){
        for(let i = 0 ; i < 7;i++){
            octaves[i].style.color ="#cccccc";
            octaves[i].style.boxShadow = "0px 0px 0px";
            octaves[i].style.background ="#282828";
        }


        octaves[0].style.background = "hsl(0 100% 30%)";
        octaves[0].style.boxShadow = "0px 0px 40px hsl(0 100% 30%)";
        octaves[0].style.color = "white";
        lightness=30;
        next = 1.1;
        nex = 1;
        ne = 0;
        n= 0.7
    }

    if(e.key == "ArrowDown" || e.key == "ArrowUp" || e.key>0){
        white[0].getElementsByTagName("p")[1].textContent = `A${nex-1}`;
        white[1].getElementsByTagName("p")[1].textContent = `B${nex-1}`;
        white[2].getElementsByTagName("p")[0].textContent = `C${nex}`;
        white[3].getElementsByTagName("p")[1].textContent = `D${nex}`;
        white[4].getElementsByTagName("p")[1].textContent = `E${nex}`;
        white[5].getElementsByTagName("p")[1].textContent = `F${nex}`;
        white[6].getElementsByTagName("p")[0].textContent = `G${nex}`;
    
        black[0].getElementsByTagName("p")[0].textContent = `Bb${nex-1}`;
        black[1].getElementsByTagName("p")[0].textContent = `Db${nex}`;
        black[2].getElementsByTagName("p")[0].textContent = `Eb${nex}`;
        black[3].getElementsByTagName("p")[0].textContent = `Gb${nex}`;
        black[4].getElementsByTagName("p")[0].textContent = `Ab${nex}`;

        black[0].getElementsByTagName("h1")[0].textContent = allBlack[0+Math.floor(n)];
        black[1].getElementsByTagName("h1")[0].textContent = allBlack[1+Math.floor(n)];
        black[2].getElementsByTagName("h1")[0].textContent = allBlack[2+Math.floor(n)];
        black[3].getElementsByTagName("h1")[0].textContent = allBlack[3+Math.floor(n)];
        black[4].getElementsByTagName("h1")[0].textContent = allBlack[4+Math.floor(n)];
    }

    if(e.key == "ArrowRight" || e.key == "ArrowLeft"){
        
        white[0].getElementsByTagName("p")[1].textContent = `${allWhites[0+ne]}`;
        white[1].getElementsByTagName("p")[1].textContent = `${allWhites[1+ne]}`;
        white[2].getElementsByTagName("p")[0].textContent = `${allWhites[2+ne]}`;
        white[3].getElementsByTagName("p")[1].textContent = `${allWhites[3+ne]}`;
        white[4].getElementsByTagName("p")[1].textContent = `${allWhites[4+ne]}`;
        white[5].getElementsByTagName("p")[1].textContent = `${allWhites[5+ne]}`;
        white[6].getElementsByTagName("p")[0].textContent = `${allWhites[6+ne]}`;
        
        black[0].getElementsByTagName("p")[0].textContent = `${allBlacks[0+Math.floor(n)]}`;
        black[1].getElementsByTagName("p")[0].textContent = `${allBlacks[1+Math.floor(n)]}`;
        black[2].getElementsByTagName("p")[0].textContent = `${allBlacks[2+Math.floor(n)]}`;
        black[3].getElementsByTagName("p")[0].textContent = `${allBlacks[3+Math.floor(n)]}`;
        black[4].getElementsByTagName("p")[0].textContent = `${allBlacks[4+Math.floor(n)]}`;

        black[0].getElementsByTagName("h1")[0].textContent = allBlack[0+Math.floor(n)];
        black[1].getElementsByTagName("h1")[0].textContent = allBlack[1+Math.floor(n)];
        black[2].getElementsByTagName("h1")[0].textContent = allBlack[2+Math.floor(n)];
        black[3].getElementsByTagName("h1")[0].textContent = allBlack[3+Math.floor(n)];
        black[4].getElementsByTagName("h1")[0].textContent = allBlack[4+Math.floor(n)];

        for(let i = 0 ; i < 7;i++){
            white[i].style.background ="#ffff";
        }
    }

    
});