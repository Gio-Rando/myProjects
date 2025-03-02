let ul = document.getElementById("ul");
let check = document.getElementById("check");
let checkAlp = document.getElementById("checkalp");
let checkAl = document.getElementById("checkal");

let one = document.getElementsByName("one")[0];
let two = document.getElementsByName("two")[0];
let thr = document.getElementsByName("thr")[0];
let fou = document.getElementsByName("fou")[0];
let fiv = document.getElementsByName("fiv")[0];
let six = document.getElementsByName("six")[0];
let sev = document.getElementsByName("sev")[0];
let eig = document.getElementsByName("eig")[0];
let nin = document.getElementsByName("nin")[0];
let ten = document.getElementsByName("ten")[0];
let ele = document.getElementsByName("ele")[0];
let twe = document.getElementsByName("twe")[0];
let tht = document.getElementsByName("tht")[0];
let fot = document.getElementsByName("fot")[0];
let fit = document.getElementsByName("fit")[0];
let sit = document.getElementsByName("sit")[0];
let set = document.getElementsByName("set")[0];
let eit = document.getElementsByName("eit")[0];
let nit = document.getElementsByName("nit")[0];
let twn = document.getElementsByName("twn")[0];
let ton = document.getElementsByName("ton")[0];
let ttw = document.getElementsByName("ttw")[0];
let tth = document.getElementsByName("tth")[0];
let tfo = document.getElementsByName("tfo")[0];
let tfi = document.getElementsByName("tfi")[0];
let tsi = document.getElementsByName("tsi")[0];

let oneo = document.getElementsByName("oneo")[0];
let twoo = document.getElementsByName("twoo")[0];
let thro = document.getElementsByName("thro")[0];
let fouo = document.getElementsByName("fouo")[0];
let fivo = document.getElementsByName("fivo")[0];
let sixo = document.getElementsByName("sixo")[0];
let sevo = document.getElementsByName("sevo")[0];
let eigo = document.getElementsByName("eigo")[0];
let nino = document.getElementsByName("nino")[0];
let teno = document.getElementsByName("teno")[0];
let eleo = document.getElementsByName("eleo")[0];
let tweo = document.getElementsByName("tweo")[0];
let thto = document.getElementsByName("thto")[0];
let foto = document.getElementsByName("foto")[0];
let fito = document.getElementsByName("fito")[0];
let sito = document.getElementsByName("sito")[0];
let seto = document.getElementsByName("seto")[0];
let eito = document.getElementsByName("eito")[0];
let nito = document.getElementsByName("nito")[0];
let twno = document.getElementsByName("twno")[0];
let tono = document.getElementsByName("tono")[0];
let ttwo = document.getElementsByName("ttwo")[0];
let ttho = document.getElementsByName("ttho")[0];
let tfoo = document.getElementsByName("tfoo")[0];
let tfio = document.getElementsByName("tfio")[0];
let tsio = document.getElementsByName("tsio")[0];

let onep = document.getElementById("onep");
let twop = document.getElementById("twop");
let thrp = document.getElementById("thrp");
let foup = document.getElementById("foup");
let fivp = document.getElementById("fivp");
let sixp = document.getElementById("sixp");
let sevp = document.getElementById("sevp");
let eigp = document.getElementById("eigp");
let ninp = document.getElementById("ninp");
let tenp = document.getElementById("tenp");
let elep = document.getElementById("elep");
let twep = document.getElementById("twep");
let thtp = document.getElementById("thtp");
let fotp = document.getElementById("fotp");
let fitp = document.getElementById("fitp");
let sitp = document.getElementById("sitp");
let setp = document.getElementById("setp");
let eitp = document.getElementById("eitp");
let nitp = document.getElementById("nitp");
let twnp = document.getElementById("twnp");
let tonp = document.getElementById("tonp");
let ttwp = document.getElementById("ttwp");
let tthp = document.getElementById("tthp");
let tfop = document.getElementById("tfop");
let tfip = document.getElementById("tfip");
let tsip = document.getElementById("tsip");
let dib = document.querySelector(".button");
let dim = document.getElementById("dim");

check.addEventListener("change", function () {
    let newList;

    if (check.checked) {
        newList = document.createElement("ol");
        checkAlp.style.display = "flex"
        checkAl.style.display = "flex"
        checkAlp.addEventListener("change", function (){
            if (checkAlp.checked){
            newList.style.listStyleType = "upper-alpha"
            }
            else{
                newList.style.listStyleType = "decimal"
            }
        })
        
    } else {
        checkAlp.checked = false
        newList = document.createElement("ul");
        checkAlp.style.display = "none"
        checkAl.style.display = "none"
    }

    newList.id = "ul"; 

    while (ul.firstChild) {
        newList.appendChild(ul.firstChild);
    }

    ul.replaceWith(newList);
    ul = newList;
    console.log(ul)
});

function lineThrough(checkbox, textElement) {
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            textElement.style.textDecoration = "line-through 3px";
            textElement.style.color = "rgb(70, 70, 70)";
        } else {
            textElement.style.color = "rgb(0, 0, 0)";
            textElement.style.textDecoration = "none";
        }
    });
}
function clear(trash,input) {
    trash.addEventListener("click", function () {
        input.value = "";

    });
    
}

clear(onep,oneo)
clear(twop,twoo)
clear(thrp,thro)
clear(foup,fouo)
clear(fivp,fivo)
clear(sixp,sixo)
clear(sevp,sevo)
clear(eigp,eigo)
clear(ninp,nino)
clear(tenp,teno)
clear(elep,eleo)
clear(twep,tweo)
clear(thtp,thto)
clear(fotp,foto)
clear(fitp,fito)
clear(sitp,sito)
clear(setp,seto)
clear(eitp,eito)
clear(nitp,nito)
clear(twnp,twno)
clear(tonp,tono)
clear(ttwp,ttwo)
clear(tthp,ttho)
clear(tfop,tfoo)
clear(tfip,tfio)
clear(tsip,tsio)

lineThrough(one, oneo);
lineThrough(two, twoo);
lineThrough(thr, thro);
lineThrough(fou, fouo);
lineThrough(fiv, fivo);
lineThrough(six, sixo);
lineThrough(sev, sevo);
lineThrough(eig, eigo);
lineThrough(nin, nino);
lineThrough(ten, teno);
lineThrough(ele, eleo);
lineThrough(twe, tweo);
lineThrough(tht, thto);
lineThrough(fot, foto);
lineThrough(fit, fito);
lineThrough(sit, sito);
lineThrough(set, seto);
lineThrough(eit, eito);
lineThrough(nit, nito);
lineThrough(twn, twno);
lineThrough(ton, tono);
lineThrough(ttw, ttwo);
lineThrough(tth, ttho);
lineThrough(tfo, tfoo);
lineThrough(tfi, tfio);
lineThrough(tsi, tsio);

dib.addEventListener("click" , function(){
    let counter = 0;
    let rolling = setInterval(() => {
        let rollFace = Math.floor(Math.random() * 6) + 1;
        dim.src = `dice${rollFace}.png`;
        counter++;

        if (counter > 10) { 
            clearInterval(rolling);
            dim.src = `dice${random}.png`; 
        }
    }, 200)
    ;

}) 