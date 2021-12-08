// const basicData = {
//   columns: ["Nombre", "Posicion", "Numero", "Edad"],
//   rows: [
//     ["Cristian Hernandez", "Central", "11", "19"],
//     ["Alejandro Hernandez", "Central", "9", "19"],
//     ["Santiago Pachon", "Lateral", "5", "18"],
//     ["Sebastian Herrera", "Lateral", "20", "20"],
//     ["Luis Miguel", "Pivot", "8", "16"],
//   ],
// };

// new Datatable(document.getElementById("datatable"), basicData);

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Input Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Input Success Message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "El email no es valido");
  }
}

// Check required fields

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, "Este campo es requerido");
    } else {
      showSuccess(input);
    }
  });
}

// Check Input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `Ingrese mas de ${min} caracteres`);
  } else if (input.value.length > max) {
    showError(input, `Maximo ${max} caracteres`);
  } else {
    showSuccess(input);
  }
}

// Check Password Match
function checkPasswordMatch(password, password2) {
  if (password.value !== password2.value) {
    showError(password2, "Las contraseñas no coinciden");
  }
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
