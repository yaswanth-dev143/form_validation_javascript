let submit_butt = document
  .querySelector("#submit_butt")
  .addEventListener("click", (event) => {
    event.preventDefault();
    validateForm();
  });

let validateForm = () => {
  checkUsername();
  checkGmail();
  checkPassword();
  concheckPassword();
};

let checkUsername = () => {
  let input = document.querySelector("#username");
  let feedback = document.querySelector("#usrfeedback");
  let usrExp = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  if (usrExp.test(input.value)) {
    input.classList.add("its_true");
    input.classList.remove("its_false");
    feedback.classList.add("font_true");
    feedback.classList.remove("font_false");
    feedback.innerText = "Looks good";
  } else {
    input.classList.remove("its_true");
    input.classList.add("its_false");
    feedback.classList.remove("font_true");
    feedback.classList.add("font_false");
    feedback.innerText = "please enter the proper username";
  }
};
let checkGmail = () => {
  let input = document.querySelector("#gmail");
  let feedback = document.querySelector("#gmlfeedback");
  let usrExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (usrExp.test(input.value)) {
    input.classList.add("its_true");
    input.classList.remove("its_false");
    feedback.classList.add("font_true");
    feedback.classList.remove("font_false");
    feedback.innerText = "Looks good";
  } else {
    input.classList.remove("its_true");
    input.classList.add("its_false");
    feedback.classList.remove("font_true");
    feedback.classList.add("font_false");
    feedback.innerText = "please enter the proper email";
  }
};
let checkPassword = () => {
  let input = document.querySelector("#password");
  let feedback = document.querySelector("#psswdfeedback");
  let usrExp = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (usrExp.test(input.value)) {
    input.classList.add("its_true");
    input.classList.remove("its_false");
    feedback.classList.add("font_true");
    feedback.classList.remove("font_false");
    feedback.innerText = "Looks safe";
  } else {
    input.classList.remove("its_true");
    input.classList.add("its_false");
    feedback.classList.remove("font_true");
    feedback.classList.add("font_false");
    feedback.innerText = "please enter the strong password";
  }
};
let concheckPassword = () => {
  let psswd = document.querySelector("#password");
  let input = document.querySelector("#conpasswd");
  let feedback = document.querySelector("#conpsswdfeedback");
  let usrExp = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (usrExp.test(input.value) && input.value === psswd.value) {
    input.classList.add("its_true");
    input.classList.remove("its_false");
    feedback.classList.add("font_true");
    feedback.classList.remove("font_false");
    feedback.innerText = "Looks safe and same";
  } else {
    input.classList.remove("its_true");
    input.classList.add("its_false");
    feedback.classList.remove("font_true");
    feedback.classList.add("font_false");
    feedback.innerText = "please enter the strong password";
  }
};

let autousr = document.querySelector("#username");
autousr.addEventListener("keyup", () => {
  checkUsername();
});

let autogmail = document.querySelector("#gmail");
autogmail.addEventListener("keyup", () => {
  checkGmail();
});
let autopsswd = document.querySelector("#password");
autopsswd.addEventListener("keyup", () => {
  checkPassword();
});
let conpasswd = document.querySelector("#conpasswd");
conpasswd.addEventListener("keyup", () => {
  concheckPassword();
});
