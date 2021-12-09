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

const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Input Error Message
function mostrarError(input, message) {
  const controlForm = input.parentElement;
  controlForm.className = "control-form error";
  const small = controlForm.querySelector("small");
  small.innerText = message;
}

// Show Input Success Message
function mostrarExito(input) {
  const controlForm = input.parentElement;
  controlForm.className = "control-form exito";
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    mostrarExito(input);
  } else {
    mostrarError(input, "El email no es valido");
  }
}

// Check required fields

function verificarRequerido(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      mostrarError(input, "Este campo es requerido");
    } else {
      mostrarExito(input);
    }
  });
}

// Check Input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    mostrarError(input, `Ingrese mas de ${min} caracteres`);
  } else if (input.value.length > max) {
    mostrarError(input, `Maximo ${max} caracteres`);
  } else {
    mostrarExito(input);
  }
}

// Check Password Match
function VerificarPasswords(password, password2) {
  if (password.value !== password2.value) {
    mostrarError(password2, "Las contraseñas no coinciden");
  }
}

// Event Listeners
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  verificarRequerido([usuario, email, password, password2]);
  checkLength(usuario, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  VerificarPasswords(password, password2);
});
