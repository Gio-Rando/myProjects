let one = document.getElementById("myp");
let two = document.getElementById("myq");
let thr =document.getElementById("myw");
let fou =document.getElementById("mye");
let fiv =document.getElementById("myr");
let six =document.getElementById("myt");
let sev =document.getElementById("myy");
let eig =document.getElementById("myu");
let nin =document.getElementById("myi");
let zer =document.getElementById("myo");
let del = document.getElementById("del");
let o = document.getElementById("o");
let p1 = document.getElementById("my");
let p2 = document.getElementById("je");
let p3 = document.getElementById("e");
let p4 = document.getElementById("j");
let x = document.getElementById("on");
let par = document.getElementById("par")
let dis = document.getElementById("dis")
let calc = document.getElementById("calc")
let y = 0
let z = 0
one.onclick = function(){
    x.textContent += "1"
}
two.onclick = function(){
    x.textContent += "2"
}
thr.onclick = function(){
    x.textContent += "3"
}
fou.onclick = function(){
    x.textContent += "4"
}
fiv.onclick = function(){
    x.textContent += "5"
}
six.onclick = function(){
    x.textContent += "6"
}
sev.onclick = function(){
    x.textContent += "7"
}
eig.onclick = function(){
    x.textContent += "8"
}
nin.onclick = function(){
    x.textContent += "9"
}
zer.onclick = function(){
    x.textContent += "0"
}

dis.onclick = function(){
    x.textContent = ""
}

o.onclick = function(){
    x.textContent = new Function("return " + x.textContent.replace(/\s/g, ""))();
}

del.onclick = function () {
    
    if(x.textContent.slice(-1) === " " && x.textContent.length > 0){
        x.textContent = x.textContent.slice(0, -1);
    }
    else if (x.textContent.length > 0) {
        x.textContent = x.textContent.slice(0, -1);
    }
};

p1.onclick = function(){
    if ("+/*-".includes(x.textContent.slice(-1)) && x.textContent != "-" && x.textContent != "" && x.textContent != " " && x.textContent.slice(-2) != "(-") {
        x.textContent = x.textContent.slice(0, -1) + "+";
    } 
    else if ( x.textContent != "-" && x.textContent != "" && x.textContent != " " && x.textContent.slice(-1) != "(" && x.textContent.slice(-2) != "(-") {
        x.textContent += "+";
    }
}

p2.onclick = function(){
    if ("+/*-".includes(x.textContent.slice(-1)) && x.textContent != "-" && x.textContent != "" && x.textContent != " " && x.textContent.slice(-2) != "(-") {
        x.textContent = x.textContent.slice(0, -1) + "/";
    } 
    else if (x.textContent != "-" && x.textContent.slice(-1) != "(" && x.textContent != "" && x.textContent != " " && x.textContent.slice(-2) != "(-") {
        x.textContent += "/";
    }
}

p3.onclick = function(){
    if ("+/*-".includes(x.textContent.slice(-1)) && x.textContent != "-" && x.textContent != "" && x.textContent != " " && x.textContent.slice(-2) != "(-") {
        x.textContent = x.textContent.slice(0, -1) + "*";
    } 
    else if (x.textContent != "" && x.textContent != "-" && x.textContent.slice(-1) != "(" && x.textContent.slice(-2) != "(-") {
        x.textContent += "*";
    }
}

p4.onclick = function(){
    if ("+/*-".includes(x.textContent.slice(-1) )) {
        x.textContent = x.textContent.slice(0, -1) + "-";
    } 
    else if (x.textContent == "" || x.textContent != "") {
        x.textContent += "-";
    }
}

par.onclick = function () {   

    for (let i = 0; i < x.textContent.length; i++) {
        if (x.textContent[i] === "(") {
            y++;
        } else if (x.textContent[i] === ")") {
            z++;
        }
    }   

    if (z % 2 === y % 2 && x.textContent.slice(-1) !== "(" || "+/*-".includes(x.textContent.slice(-1))) {
        x.textContent += "(";
    } else {
        x.textContent += ")";
    }
    y = 0;
    z = 0;
};

calc.onclick = function () {
    if (x.textContent.length % 22 === 0 && x.textContent.length > 0) {
        x.textContent += " "; 
    }
};