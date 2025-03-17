let ul = document.querySelector(".ul");
let check = document.getElementById("check");
let checkAlp = document.getElementById("checkalp");
let checkAl = document.getElementById("checkal");
let add = document.getElementById("add");
let po = 1;

add.addEventListener("click", () => {
    if (po <= 26) {
        const newLi = document.createElement("li");
        newLi.innerHTML = `
            <div class="li">
                <input autocomplete="off" name="text" type="text">
                <input type="checkbox" name="cross">
                <button class="trash"><img src="./trash-can-svgrepo-com (1).svg" alt=""></button>
            </div>
        `;
        ul.appendChild(newLi);

        const checkbox = newLi.querySelector("[name='cross']");
        const text = newLi.querySelector("[name='text']");
        const trash = newLi.querySelector(".trash");

        lineThrough(checkbox, text);
        deleteItem(trash, newLi);

        po++;
    }
});

check.addEventListener("change", function () {
    let newList;

    if (check.checked) {
        newList = document.createElement("ol");
        checkAlp.style.display = "block";
        checkAl.style.display = "block";
        checkAlp.addEventListener("change", function () {
            if (checkAlp.checked) {
                newList.style.listStyleType = "upper-alpha";
            } else {
                newList.style.listStyleType = "decimal";
            }
            
        });
    } else {
        checkAlp.checked = false;
        newList = document.createElement("ul");
        checkAlp.style.display = "none";
        checkAl.style.display = "none";
    }

    newList.className = "ul";

    while (ul.firstChild) {
        newList.appendChild(ul.firstChild);
    }

    ul.replaceWith(newList);
    ul = newList;
});


function lineThrough(checkbox, text) {
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            text.style.textDecoration = "line-through 3px";
            text.style.color = "rgb(70, 70, 70)";
        } else {
            text.style.color = "rgb(0, 0, 0)";
            text.style.textDecoration = "none";
        }
    });
}

function deleteItem(trash, item) {
    trash.addEventListener("click", function () {
        item.remove();
        po--; 
    });
}
