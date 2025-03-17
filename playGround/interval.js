let keys = {}; // Object to track pressed keys
let x = 50;
let y = 300;
const child = document.getElementById("child"); // Make sure you have an element with this ID

document.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true; // Store pressed key
});

document.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false; // Remove released key
    console.log(keys)

});


function move() {
    if (keys["w"] && keys["d"] && (y > 0 && x < 450)) { 
        y -= 2.5; // Move up
        x += 2.5; // Move right
        child.style.top = y + "px"; 
        child.style.left = x + "px";
        let audio = new Audio("Gb.mp3")
        audio.play()
    }
    else if (keys["w"] && keys["a"] && (y > 0 && x > 0)) { 
        y -= 2.5; // Move up
        x -= 2.5; // Move right
        child.style.top = y + "px"; 
        child.style.left = x + "px";
    }
    else if (keys["s"] && keys["d"] && (y < 450 && x < 450)) { 
        y += 2.5; // Move up
        x += 2.5; // Move right
        child.style.top = y + "px"; 
        child.style.left = x + "px";
    }
    else if (keys["s"] && keys["a"] && (y < 450 && x > 0)) { 
        y += 2.5; // Move up
        x -= 2.5; // Move right
        child.style.top = y + "px"; 
        child.style.left = x + "px";
    }

    requestAnimationFrame(move); // Continuously check movement
}

move(); // Start movement tracking
document.addEventListener("keydown", (e) =>{

    if((e.key == "w" || e.key == "W") && y > 0){
        child.style.top == y
        y-=5
    }
    else if((e.key == "s" || e.key == "S") && y < 450){
        child.style.top == y
        y+=5
    }
    else if((e.key == "d" || e.key == "D") && x < 450){
        child.style.left == x
        x+=5
    }
    else if((e.key == "a" || e.key == "A") && x > 0){
        child.style.left == x
        x-=5
    }
    
    child.style.left = x + 'px';
    child.style.top = y + 'px';
} )

