

const formContainer = document.querySelector(".formContainer");
const nameError = document.querySelector("#nameError");
const phoneError = document.querySelector("#phoneError");
const mailError = document.querySelector("#mailError");
const messageError = document.querySelector("#messageError");
const error = document.querySelector("#error");
const button = document.querySelector("#bt1");

function checkName() {
  let inputName = document.querySelector("#fullName").value;
  const nameParts = inputName.split(" ");

  if (inputName.length === 0) {
    nameError.innerHTML = `name is required`;
    return false;
  } else if (nameParts.length < 2) {
    
    nameError.innerHTML = `full name required`;
    return false;
  } else {
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    nameError.style.color = "green";
    return true;
  }
}
function checkPhone() {
  let inputPhone = document.querySelector("#phoneNumber").value;
  if (inputPhone.length == 0) {
    phoneError.innerHTML = `number is required`;
  } else if (inputPhone.length < 10 || inputPhone.length > 10) {
    error.innerHTML = `please fix error`;
  } else {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    phoneError.style.color = "green";
  }
}
function checkEmail() {
  let inputEmail = document.querySelector("#userName").value;

  if (inputEmail.length == 0) {
    mailError.innerHTML = `mail required`;
  } else if (
    inputEmail.includes("@gmail.com") ||
    inputEmail.includes("@outlook.com")
  ) {
    mailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    mailError.style.color = "green";
  } else {
    mailError.innerHTML=`invalid mail`;
    // error.innerHTML = `please fix error`;
  }
}

function checkMessage() {
  let message = document.querySelector("#message").value;

  let maxCount =30;
  let count=maxCount-message.length;

  if (message.length === 0) {
    messageError.innerHTML = ` write your message`;
  }
   else if(message.length < 30) {
    error.innerText = ` word count not reached`;
    error.style.display = "block";
    messageError.innerText =count+" "+`need more characters`
  }
  else if (message.length >= 30 ) {
    error.style.display = "none";
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    messageError.style.color="green";
    
  }
}

function checkAll(){
    if(!checkName() || !checkPhone() || !checkEmail() || !checkMessage()){
        error.innerHTML=`please fix error to submit`;
    }
}
button.addEventListener("click", () => {
  checkAll();

});

formContainer.addEventListener("submit", function (e) {
  e.preventDefault();
});
