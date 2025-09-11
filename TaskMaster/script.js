const check = document.querySelector("input[type=checkbox]");
const completed = document.querySelector(".completedTask");
const container = document.querySelector(".container");
const pendingTask = document.querySelector(".pendingTask");
const form = document.querySelector(".add");
const date = document.querySelector(".date");
const table = document.querySelectorAll("table");
const calendar = document.querySelector(".img");
const draggingTask = document.querySelectorAll(".draggingTask");
const content = document.querySelectorAll(".content");
const arrow = document.querySelector(".arrow");
const settings = document.getElementsByClassName("settings")[0];
const colorBlocks = document.getElementsByClassName("viscol");
const colorPicker = document.querySelectorAll(".colorPicker");
const gear = document.querySelector(".fa-gear");
const close = document.querySelector("h2");
const body = document.querySelector("body");
const colorWheels = document.querySelector(".colorwheels");
const universal = document.querySelector("*");
let trash = document.querySelectorAll(".h6");
let isEdit = false;
let colorCheck = [];
let existingTasks = [];
let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
let theme = JSON.parse(localStorage.getItem("ThemeTask")) || [
  "rgb(15, 15, 15)",
  "yellow",
  "rgb(20, 20, 20)",
  "gold",
];
colorWheels.innerHTML =
  JSON.parse(localStorage.getItem("ColorWheels")) ||
  `   <div class="colordiv" style="opacity: 1; transition: opacity 0.3s ease;">
        <i class="h6 fa-solid fa-trash"></i>
        <div class="colorwheel">
          <div style="background:rgb(15, 15, 15);" class="size"></div>
          <div style="background:yellow;" class="size"></div>
          <div style="background:rgb(20, 20, 20);" class="size"></div>
          <div style="background:gold;" class="size"></div>
        </div>
      </div>`;
table[1].innerHTML =
  JSON.parse(localStorage.getItem("CompletedTasks")) ||
  `<tr>
                            <th style="background:${theme[3]};">Task</th>
                            <th style="background:${theme[3]};">Submited</th>
                            <th style="background:${theme[3]};">Completed</th>
                            <th style="background:${theme[3]};">Proceed</th>
                            
                        </tr>`;
table[0].innerHTML =
  JSON.parse(localStorage.getItem("PendingTasks")) ||
  `<tr>
                            <th style="background:${theme[3]};">Task</th>
                            <th style="background:${theme[3]};">Submited</th>
                            <th style="background:${theme[3]};">Countdown</th>
                            <th style="background:${theme[3]};">Proceed</th>
                            
                        </tr>`;

let delet = document.querySelectorAll(".h6");
let colorWheel = document.querySelectorAll(".colorwheel");

const render = () => {
  localStorage.setItem("PendingTasks", JSON.stringify(table[0].innerHTML));
  return [
    document.querySelectorAll(".colorwheel"),
    document.querySelectorAll(".h6"),
  ];
};

for (let i = 0; i < colorPicker.length; i++) {
  colorPicker[i].addEventListener("focusout", () => {
    if (
      colorPicker[i].value.trim() == "" ||
      colorPicker[i].value == "rgb(0, 0, 0)"
    ) {
      colorPicker[i].value = "rgb(5, 5, 5)";
    }
  });
  colorPicker[i].addEventListener("input", () => {
    colorBlocks[i].style.background = colorPicker[i].value;
  });
}

close.addEventListener("click", () => {
  settings.style.display = "none";
});

gear.addEventListener("click", () => {
  if (settings.style.display == "none") {
    settings.style.display = "flex";
  } else {
    settings.style.display = "none";
  }
});

settings.addEventListener("submit", (e) => {
  e.preventDefault();
  const th = document.querySelectorAll("th");

  settings.style.display = "none";

  theme = [
    settings.one.value,
    settings.two.value,
    settings.three.value,
    settings.four.value,
  ];

  for (let i = 0; i < colorPicker.length; i++) {
    if (
      colorPicker[i].value == "#000000" ||
      colorPicker[i].value.trim() == ""
    ) {
      colorPicker[i].value = "#050505";
    }
  }

  body.style.background = `linear-gradient(${settings.one.value}, ${settings.two.value})`;

  for (let i = 0; i < draggingTask.length; i++) {
    draggingTask[i].style.setProperty("--angle", "360deg");
    draggingTask[i].style.setProperty(
      "--conicColors",
      `rgba(255,255,255,0), ${settings.three.value}, ${settings.four.value}`
    );
    draggingTask[
      i
    ].style.background = `linear-gradient(${settings.two.value}, ${settings.one.value})`;
    universal.style.color = `${settings.three.value}`;
    form.add.style.background = `${settings.four.value}`;
    form.add.style.color = `${settings.three.value}`;
    form.time.style.background = `${settings.four.value}`;
    form.time.style.color = `${settings.three.value}`;
    form.date.style.background = `${settings.four.value}`;
    form.date.style.color = `${settings.three.value}`;
    form.sub.style.background = `${settings.four.value}`;
    form.sub.style.color = `${settings.three.value}`;
    arrow.style.color = `${settings.three.value}`;
    gear.style.color = `${settings.three.value}`;
    for (let j = 0; j < th.length; j++) {
      th[j].style.background = `${settings.four.value}`;
    }
    console.log(th[0].style.background , `${settings.four.value}`)
  }
  
  let [colorWheel, delet] = render();
  colorCheck = [];
  for (let i = 0; i < colorWheel.length; i++) {
    colorCheck.push(
      [
        colorWheel[i].children[0].style.background ==
          colorBlocks[0].style.background,
        colorWheel[i].children[1].style.background ==
          colorBlocks[1].style.background,
        colorWheel[i].children[2].style.background ==
          colorBlocks[2].style.background,
        colorWheel[i].children[3].style.background ==
          colorBlocks[3].style.background,
      ].every((e) => e === true)
    );
  }

  if (colorCheck.every((e) => e === false)) {
    colorWheels.innerHTML += `
      <div class="colordiv" style="opacity: 1; transition: opacity 0.3s ease;">
        <i class='h6 fa-solid fa-trash'></i>
        <div class="colorwheel">
          <div style="background:${settings.one.value};" class="size"></div>
          <div style="background:${settings.two.value};" class="size"></div>
          <div style="background:${settings.three.value};" class="size"></div>
          <div style="background:${settings.four.value};" class="size"></div>
        </div>
      </div>`;
  }

  [colorWheel, delet] = render();

  for (let i = 0; i < delet.length; i++) {
    delet[i].addEventListener("click", () => {
      const parent = delet[i].closest(".colordiv");
      if (parent) {
        parent.style.opacity = "0";
        setTimeout(
          () => {
            localStorage.setItem(
              "PendingTasks",
              JSON.stringify(table[0].innerHTML)
            );
            parent.remove();
          },

          300
        );
      }
    });
  }

  for (let i = 0; i < colorWheel.length; i++) {
    colorWheel[i].addEventListener("click", () => {
      settings.one.value = colorWheel[i].children[0].style.background;
      settings.two.value = colorWheel[i].children[1].style.background;
      settings.three.value = colorWheel[i].children[2].style.background;
      settings.four.value = colorWheel[i].children[3].style.background;
      for (let k = 0; k < colorBlocks.length; k++) {
        colorBlocks[k].style.background =
          colorWheel[i].children[k].style.background;
      }
    });
  }
  localStorage.setItem("ThemeTask", JSON.stringify(theme));
  localStorage.setItem("ColorWheels", JSON.stringify(colorWheels.innerHTML));
  colorCheck = [];
  render();
});

for (let i = 0; i < colorWheel.length; i++) {
  colorWheel[i].addEventListener("click", () => {
    settings.one.value = colorWheel[i].children[0].style.background;
    settings.two.value = colorWheel[i].children[1].style.background;
    settings.three.value = colorWheel[i].children[2].style.background;
    settings.four.value = colorWheel[i].children[3].style.background;
    for (let k = 0; k < colorBlocks.length; k++) {
      colorBlocks[k].style.background =
        colorWheel[i].children[k].style.background;
    }
  });
}
for (let i = 0; i < delet.length; i++) {
  delet[i].addEventListener("click", () => {
    const parent = delet[i].closest(".colordiv");
    if (parent) {
      parent.style.opacity = "0";
      setTimeout(() => parent.remove(), 300);
    }
  });
}

let formatDateToInput = (date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
};
form.date.min = formatDateToInput(new Date());
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 30);
form.date.max = formatDateToInput(maxDate);

check.addEventListener("change", () => {
  if (!check.checked) {
    completed.style.opacity = "0";
    completed.style.transform = "translateX(-100%)";
    container.style.width = pendingTask.scrollWidth + 90 + "px";
    arrow.style.transform = "scaleX(1)";
  } else {
    completed.style.opacity = "1";
    completed.style.transform = "translateX(0)";
    container.style.width = `${
      pendingTask.scrollWidth + completed.scrollWidth + 90
    }px`;
    arrow.style.transform = "scaleX(-1)";
  }
});

const drag = () => {
  const remove = document.querySelectorAll(".delete");
  const edit = document.querySelectorAll(".edit");
  const rows = document.querySelectorAll("tr");

  rows.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
      draggable.style.background = "rgb(0, 0, 0, 0.4)";
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
      draggable.style.background = "none";
    });
  });

  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", () => {
      const parent = remove[i].parentElement.parentElement;
      parent.style.opacity = "0";
      setTimeout(() => {
        parent.remove();
        localStorage.setItem(
          "CompletedTasks",
          JSON.stringify(table[1].innerHTML)
        );
        localStorage.setItem(
          "PendingTasks",
          JSON.stringify(table[0].innerHTML)
        );
      }, 300);
    });
  }

  for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener("click", () => {
      const edited = edit[i].parentElement.parentElement.children[0];

      if (!edited.textContent.trim()) {
        edited.textContent = "None";
      }

      isEdit = !isEdit;
      edited.setAttribute("contenteditable", isEdit);
      edited.focus();

      edited.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (!edited.textContent.trim()) {
            edited.textContent = "None";
          }
          isEdit = false;
          edited.setAttribute("contenteditable", false);
          localStorage.setItem(
            "PendingTasks",
            JSON.stringify(table[0].innerHTML)
          );
        }
      });

      edited.addEventListener("blur", () => {
        if (!edited.textContent.trim()) {
          edited.textContent = "None";
        }
        isEdit = false;
        edited.setAttribute("contenteditable", false);
        localStorage.setItem(
          "PendingTasks",
          JSON.stringify(table[0].innerHTML)
        );
      });
    });
  }
};

completed.addEventListener("dragover", (e) => {
  e.preventDefault();
});

completed.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggable = document.querySelector(".dragging");
  const cont = completed.children[completed.children.length - 1].children[0];
  cont.appendChild(draggable);
  draggable.removeAttribute("draggable");
  draggable.children[2].id = "done";
  draggable.children[3].innerHTML = "<i class='delete fa-solid fa-trash' ></i>";
  draggable.children[2].textContent = `${new Date().getDate()} | ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  for (let i = 0; i < table[1].children.length; i++) {
    table[1].children[i].style.background = "none";
  }
  localStorage.setItem("CompletedTasks", JSON.stringify(table[1].innerHTML));
  drag();
});

calendar.addEventListener("click", () => {
  if (form.date.style.position == "absolute") {
    form.date.style.position = "static";
    form.time.style.position = "static";
    form.date.style.zIndex = "0";
    form.time.style.zIndex = "0";
    form.date.style.opacity = "1";
    form.time.style.opacity = "1";
    date.style.width = "230px";
  } else {
    form.date.style.position = "absolute";
    form.time.style.position = "absolute";
    form.date.style.opacity = "0";
    form.time.style.opacity = "0";
    form.date.style.zIndex = "-1";
    form.time.style.zIndex = "-1";
    form.date.value = "";
    form.time.value = "";
    date.style.width = "20px";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.add.value.trim()) {
    form.add.style.background = `${settings.four.value}`;
    form.add.style.border = "none";
    form.add.placeholder = "";

    let none;
    if (!form.date.value && form.time.value) {
      form.date.value = `${new Date().getFullYear()}-${String(
        new Date().getMonth() + 1
      ).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`;
    }
    if (form.date.value && !form.time.value) {
      form.time.value = `${new Date().getHours()}:${new Date().getMinutes()}`;
    }
    if (!form.date.value && !form.time.value) {
      none = true;
    }

    let countdown =
      new Date(`${form.date.value} ${form.time.value}`).getTime() || "None";
    const countdownId = `cd-${Date.now()}`;

    table[0].innerHTML += `
    <tr draggable="true">
      <td class="content" style="border-radius: 15px 0 0 15px">${
        form.add.value
      }</td>
      <td>${new Date().getDate()} | ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</td>
      <td id="${countdownId}">Loading...</td>
      <td style="border-radius: 0 15px 15px 0" class='op'>
        <i class="edit fa-solid fa-pencil"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class='delete fa-solid fa-trash'></i>
      </td>
    </tr>`;
    let past = new Date().getTime();
    tasks.push({ countdownId, countdown, past });
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    console.log(tasks);
    const func = setInterval(() => {
      const countdownEl = document.getElementById(countdownId);
      if (!countdownEl) {
        clearInterval(func);
        return;
      }

      let now = new Date().getTime();
      let distance = countdown - now;

      if (distance < 0) {
        if (none) {
          countdownEl.textContent = "None";
          none = false;
        } else {
          countdownEl.textContent = "FAILED";
        }
        clearInterval(func);
        return;
      }

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (none || countdownEl.textContent == "None") {
        countdownEl.textContent = "None";
        none = false;
      } else {
        countdownEl.textContent = `${days} | ${hours}:${minutes}:${seconds}`;
      }
    }, 1000);

    form.add.value = "";
    drag();
  } else {
    form.add.style.background = "red";
    form.add.style.border = "red 2px solid";
    form.add.placeholder = "WRITE SOMETHING";
  }

  localStorage.setItem("PendingTasks", JSON.stringify(table[0].innerHTML));
});
form.add.addEventListener("input", () => {
  form.add.style.background = `${settings.four.value}`;
  form.add.style.border = "none";
  form.add.placeholder = "";
});

const th = document.querySelectorAll("th");
body.style.background = `linear-gradient(${theme[0]}, ${theme[1]})`;

for (let i = 0; i < draggingTask.length; i++) {
  draggingTask[i].style.setProperty("--angle", "360deg");
  draggingTask[i].style.setProperty(
    "--conicColors",
    `rgba(255,255,255,0), ${theme[2]}, ${theme[3]}`
  );
  draggingTask[
    i
  ].style.background = `linear-gradient(${theme[1]}, ${theme[0]})`;
  universal.style.color = `${theme[2]}`;
  form.add.style.background = `${theme[3]}`;
  form.add.style.color = `${theme[2]}`;
  form.time.style.background = `${theme[3]}`;
  form.time.style.color = `${theme[2]}`;
  form.date.style.background = `${theme[3]}`;
  form.date.style.color = `${theme[2]}`;
  form.sub.style.background = `${theme[3]}`;
  form.sub.style.color = `${theme[2]}`;
  arrow.style.color = `${theme[2]}`;
  gear.style.color = `${theme[2]}`;
  for (let j = 0; j < th.length; j++) {
    th[j].style.background = `${theme[3]}`;
  }
}
settings.one.value = theme[0];
settings.two.value = theme[1];
settings.three.value = theme[2];
settings.four.value = theme[3];
for (let i = 0; i < colorBlocks.length; i++) {
  colorBlocks[i].style.background = theme[i];
}

tasks.forEach((e) => {
  const countdownEl = document.getElementById(e.countdownId);
  if (countdownEl) {
    existingTasks.push(e);

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = e.countdown - now;

      const stillThere = document.getElementById(e.countdownId);
      if (!stillThere) {
        clearInterval(interval);
        return;
      }

      if (distance <= 0) {
        if (e.countdown === "None") {
          countdownEl.textContent = "None";
        } else {
          countdownEl.textContent = "FAILED";
        }
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (e.countdown === "None") {
          countdownEl.textContent = "None";
        } else {
          countdownEl.textContent = `${days} | ${hours}:${minutes}:${seconds}`;
        }
      }
    }, 1000);
  }
});
localStorage.setItem("Tasks", JSON.stringify(existingTasks));
tasks = existingTasks;
drag();