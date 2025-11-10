const left = document.querySelector(".left");
const right = document.querySelector(".right");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const right1 = document.querySelector(".right1");
const right2 = document.querySelector(".right2");
const right3 = document.querySelector(".right3");
const submit = document.querySelector(".submit");
const password = document.querySelector(".password");
const input = document.querySelector(".input");
const second = document.querySelector(".secondWindow");
const secondInput = document.querySelector(".secondInput");

button1.addEventListener("dblclick", (button1) => {
  button1.preventDefault();
  right1.style.cssText = "display: flex;";
  right2.style.cssText = "display: none;";
  right3.style.cssText = "display: none;";
});

button2.addEventListener("dblclick", (button2) => {
  button2.preventDefault();
  right2.style.cssText = "display: flex;";
  right1.style.cssText = "display: none;";
  right3.style.cssText = "display: none;";
});

button3.addEventListener("dblclick", (button3) => {
  button3.preventDefault();
  right3.style.cssText = "display: flex;";
  right2.style.cssText = "display: none;";
  right1.style.cssText = "display: none;";
});

submit.addEventListener("dblclick", (submit) => {
  const inputValue = input.value.trim();
  const passwordValue = password.value.trim();

  if (!inputValue || !passwordValue) {
    return alert(`Empty!`);
  } else {
    left.style.cssText = "display: none;";
    right1.style.cssText = "display: none;";
    second.style.cssText = "display: flex;";
  }
});

secondInput.addEventListener("dblclick", (submit) => {
  left.style.cssText = "display: flex;";
  right1.style.cssText = "display: flex;";
  second.style.cssText = "display: none;";
});
