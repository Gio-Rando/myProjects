let currOkTile
let currBlobTile
let body
let score = 0
let gam = true
let game = true
let resty
let lst = [0]
let but

window.onload = function(){
    setGame();
}

function setGame(){
    
    for (let i = 0; i < 9;i++){
        let tile = document.createElement("div")
        tile.id = i.toString();
        tile.addEventListener("click",selectTile)
        document.getElementById("board").appendChild(tile)
    }
    setInterval(setOk, 1100);
    setInterval(setBlob, 1200);
    resty = setInterval(rest, 20);
}

function randomTile(){
    let num =Math.floor(Math.random() * 9);
    return num.toString();
}

function setOk(){
    if(game){
        currOkTile.innerHTML = "";
        return;
    }
    if(currOkTile){
        currOkTile.innerHTML = "";
    }
    let ok = document.createElement("img");
    ok.src = "./assests/ok.png"
    let num = randomTile()
    if (currBlobTile && currBlobTile.id == num){
        return;
    }
    currOkTile = document.getElementById(num);
    currOkTile.appendChild(ok);
}

function setBlob(){
    if(game){
        currBlobTile.innerHTML = "";
        return;
    }
    if(currBlobTile){
        currBlobTile.innerHTML = "";
    }
    let ok = document.createElement("img");
    ok.src = "./assests/ol.png"
    let num = randomTile()
    if (currOkTile && currOkTile.id == num){
        return;
    }
    currBlobTile = document.getElementById(num);
    currBlobTile.appendChild(ok);
}

function selectTile(){
    if(game){
        return;
    }
    if (this == currOkTile){
        score += 10
        document.getElementById("score").innerText = score.toString()
    }
    else if (this == currBlobTile){
        document.getElementById("score").innerText = "GAME OVER"
        document.getElementById("score").style.color = "red"
        lst.push(score)
        document.getElementById("max").innerText = Math.max(score).toString()
        game = true
    }
    else if (this){
        score -= 20
        document.getElementById("score").innerText = score.toString()
    }
}

function rest(){
    if(game){
        but = document.createElement("button");
        but.id = "hi"
        document.getElementById("board").appendChild(but);
        document.getElementById("hi").innerText = "Restart"
        clearInterval(resty)
    }
    if(gam){
        document.getElementById("hi").innerText = "start"
        gam = false
    }
    but.addEventListener("click", () => {
        game = false
        score = 0
        document.getElementById("board").removeChild(but)
        document.getElementById("score").innerText = 0
        document.getElementById("score").style.color = "yellow"
        resty = setInterval(rest, 20)
        setInterval(resty)
    })
    if(score < 0){
        game = true
        document.getElementById("score").innerText = "GAME OVER"
        document.getElementById("score").style.color = "red"
    }
}

console.log(lst)