import { getUsers, setUsers } from "../db/db";

const minusAlphabet = /[a-z]/;
const mayusAlphabet = /[A-Z]/;
const alphanumeric = /[0-9a-zA-Z]/;
const numbers = /[0-9]/;

export const chequearVacio = () => {
  if (document.getElementById("comentario").value == "") {
    alert("No se permiten comentarios sin contenido");
    return false;
  } else {
    return true;
  }
};

export const chequearAlfanumericos = () => {
  for (let i = 0; i < document.getElementById("comentario").value.length; i++) {
    if (!cadena[i].match(alphanumeric) && !(cadena[i] = " ")) {
      alert("Por favor, use solo caracteres alfanumericos");
      return false;
    }
  }
  return true;
};

/*==================================Register========================================*/

const validatePsw = (password) => {
  let upper = false;
  let under = false;
  let number = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i].match(numbers)) {
      number = true;
    }
    if (password[i].match(minusAlphabet)) {
      under = true;
    }
    if (password[i].match(mayusAlphabet)) {
      upper = true;
    }
  }
  return upper && under && number;
};

const equalsPasswords = (password, passwordConfirmation) => {
  return password === passwordConfirmation;
};

const checkPswLength = (password) => {
  return password.length > 6;
};

const checkUsernameLength = (username) => {
  return username.length > 5;
};

const validateUsernameAlphanumeric = (username) => {
  let ok = true;
  for (let i = 0; i < username.length; i++) {
    if (!username[i].match(alphanumeric)) {
      ok = false;
    }
  }
  return ok;
};

const validateEmail = (email) => {
  const emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
  return emailRegex.test(email);
};

/* Call in RegisterScreen*/
export const validateRegister = (password, passwordConfirmation, username, email, handleUser) => {
  let errors = [];
  if (password !== "" && username !== "" && email !== "" && passwordConfirmation !== "") {
    if (!checkPswLength(password)) {
      errors.push("La contraseña debe ser mayor a 6 caracteres");
    } else {
      if (!validatePsw(password, passwordConfirmation)) errors.push("La contraseña debe tener por lo menos una mayuscula");
      if (!equalsPasswords(password, passwordConfirmation)) errors.push("Las contraseñas no coinciden");
    }
    if (!checkUsernameLength(username)) errors.push("El nombre de usuario debe ser mayor a 5 caracteres");
    if (!validateUsernameAlphanumeric(username)) errors.push("El nombre de usuario solo puede tener caracteres alfanumericos");
    if (!validateEmail(email)) errors.push("Por favor verifique la direccion de mail ingresada");
  } else {
    errors.push("Por favor, complete todos los campos");
  }
  if (errors.length === 0) agregarUsuarios(email, username, password, errors, handleUser);
  return errors;
};

const agregarUsuarios = (email, username, password, errors, handleUser) => {
  let usersData = getUsers();
  const id = usersData.length + 1;
  const found = usersData.some((user) => user.username === username);
  if (!found) {
    setUsers({ id, email, username, password });
    handleUser({ id, email, username });
  } else {
    errors.push(`El usuario ${username} ya se encuentra registrado`);
  }
  return errors;
};

/*==================================Login========================================*/

export const validateLogin = (username, password, handleLogin) => {
  let errors = [];
  if (password !== "" && username !== "") {
    let usersData = getUsers();
    let found = false;
    let userIs;
    for (let index = 0; index < usersData.length; index++) {
      if (usersData[index].username === username) {
        found = true;
        userIs = usersData[index];
        break;
      }
    }
    if (found) {
      if (userIs.password === password) {
        let email = userIs.email;
        let id = userIs.id;
        handleLogin({ id, email, username });
      } else {
        errors.push("Contraseña incorrecta");
      }
    } else {
      errors.push("Por favor, verifique sus datos");
    }
  } else {
    errors.push("Por favor, complete todos los campos");
  }
  return errors;
};
