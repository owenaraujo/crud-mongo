const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  numeros: /^\[0-9]$/, // 7 a 14 numeros.
  cod: /^([A-Z]{2})\-([\d]{1})/i, // 7 a 14 numeros.
  serial: /([a-z0-9])/g,
};
const validateCorreo = (el) => {
  let correo = document.querySelector("#correo");
  if (el.value != "") correo.classList.remove("is-invalid");
};
const validateTelefono = (el) => {
  let telefono = document.querySelector("#telefono");
  if (el.value != "") telefono.classList.remove("is-invalid");
};
const validateDireccion = (el) => {
  let direccion = document.querySelector("#direccion");
  if (el.value != "") direccion.classList.remove("is-invalid");
};


const validateDescripcion = (el)=>{
  let descripcion = document.querySelector('#descripcion')
  if (el.value != "") 
  descripcion.classList.remove("is-invalid");
}
const validateCantidad  =(el)=>{
  let cantidad = document.querySelector('#cantidad')
  let strig = cantidad.value
  el.value = strig.replace(/\D/g, "").replace(/^([0-9])/, "$1");
 
  
}
const validatePrecioUnitario  =(el)=>{
  let precioUnitario = document.querySelector('#precioUnitario')
  let strig = precioUnitario.value
  el.value = strig.replace(/\D/g, "").replace(/^([0-9])/, "$1");
 
  
}
const validateProveedor = (el)=>{
  let proveedorId = document.querySelector('#proveedor_id')
  if (el.value != "0") 
  proveedorId.classList.remove("is-invalid");
}
const validateCategoria = (el)=>{
  let categoria = document.querySelector('#categoria')
  if (el.value != "0") 
  categoria.classList.remove("is-invalid");
}
const validateUnidad = (el)=>{
  let unidadMedida = document.querySelector('#unidadMedida')
  if (el.value != "0") 
  unidadMedida.classList.remove("is-invalid");
}
const validateNombre = (el)=>{
  let nombre = document.querySelector('#nombre')
  if (el.value != "") 
  nombre.classList.remove("is-invalid");
}
const validateUser = (el) => {
  let msg = document.querySelector("#msgUser");

  if (el.value === "") {
    msg.textContent = "Completa este campo";
    return;
  }

  if (!expresiones.usuario.test(el.value)) {
    msg.textContent = "Formato de Usuario no valido";
    return;
  }
  msg.textContent = "";
};
const validateEmpty = (el) => {
  let msg = document.querySelector("#msgPass");

  if (el.value === "") {
    msg.textContent = "Completa este campo";
    return;
  }

  if (!expresiones.password.test(el.value)) {
    msg.textContent = "Formato de constraseña no valido";
    return;
  }
  msg.textContent = "";
};

const replaceNumber = (el) => {
  let str = el.value;
  el.value = str.replace(/\D/g, "").replace(/^([0-9]{2})/, "+$1 ");
};
// validate codificacion
const validateCod2 = (el) => {
  let msg = document.querySelector("#codigo");
  let str = el.value;
  el.value = str
    .replace(/^([A-Z]{2})([0-9]{2})/, "$1-$2")
    .replace(/^([A-Z]{3})/, "")
    .replace(/^([0-9]{1})/, "")
    .toUpperCase();

  if (el.value === "") {
    msg.classList.remove("is-invalid");
    msg.classList.remove("is-valid");
    return;
  }

  if (!expresiones.cod.test(el.value)) {
    msg.classList.add("is-invalid");
    return;
  }
  msg.classList.remove("is-invalid");
  msg.classList.add("is-valid");
};


const data = {
  _id: null,
  prodcutos:[{_id: null, producto_id:[null], cantidad: null}],
  precio_total:null 
}
const validateCod = (el) => {
  let str = el.value;
  el.value = str
    .replace(/^([a-z]{2})([0-9]{2})/i, "$1-$2")
    .replace(/^([a-z]{3})/i, "")
    .replace(/^([0-9]{1})/, "")
    .toUpperCase();

  

};
// validate codificacion
const validateSer = (el) => {
  let msg = document.querySelector("#serial");
  let str = el.value;
  el.value = str.replace(/([a-z0-9]{4})/g, "$&-").replace(/(-{2})/g, "-");

  if (!expresiones.serial.test(el.value)) {
    msg.classList.add("is-invalid");
    msg.classList.remove("is-valid");
    return;
  }
  if (el.value === "") {
    msg.classList.remove("is-invalid");
    return;
  }
  msg.classList.remove("is-invalid");
  msg.classList.add("is-valid");
};
const setProviderModal = (id) => {
  const providerModal = document.querySelector("#providerModal");
  providerModal.value = id;
};
