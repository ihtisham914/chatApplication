"use strict";
const menu = document.querySelector(".dots");
const dAction = document.querySelector(".dots-action");
const chatVeiw = document.querySelector(".chat-veiw");
const closeOptions = document.querySelector(".close-options");

chatVeiw.addEventListener("click", function () {
  dAction.classList.add("hidden");
});

menu.addEventListener("click", function () {
  dAction.classList.remove("hidden");
});

closeOptions.addEventListener("click", function () {
  dAction.classList.add("hidden");
});

// responsive
// opening chat on clicking any chat customer
const inbox = document.querySelector(".inbox");
const chat = document.querySelectorAll(".chat");
const type = document.querySelector(".chat-box");
const backbtn = document.querySelector(".back");

const showChat = function () {
  chatVeiw.style.display = "inline-block";
  chatVeiw.style.visibility = "visible";
  type.style.display = "flex";
  type.style.visibility = "visible";
  backbtn.style.display = "inline";
  backbtn.style.visibility = "visible";

  inbox.style.display = "none";
  inbox.style.visibility = "hidden";
};

const hideChat = function () {
  chatVeiw.style.display = "none";
  chatVeiw.style.visibility = "hidden";
  type.style.display = "none";
  type.style.visibility = "hidden";
  backbtn.style.display = "none";
  backbtn.style.visibility = "hidden";

  inbox.style.display = "flex";
  inbox.style.visibility = "visible";
};

chat.forEach((c) =>
  c.addEventListener("click", function () {
    if (screen.width > 412) {
    } else showChat();
  })
);

backbtn.addEventListener("click", function () {
  hideChat();
});
