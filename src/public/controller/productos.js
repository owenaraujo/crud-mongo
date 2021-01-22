
const proveedor_id = document.querySelector("#proveedor_id");
const categoria = document.querySelector("#categoria");
const tabla = document.querySelector("#tabla");
const alerta = document.querySelector("#alerta");

const formAdd = document.querySelector("#formAdd");
const alertas = (data) => {
  if (data.value === false) {
    datos = {
      mensaje: data.message,
      estado: "alert_danger",
    };
  }
  if (data.value === null) {
    datos = {
      mensaje: data.message,
      estado: "alert_warning",
    };
  }

  if (data.value === true) {
    datos = {
      mensaje: data.message,
      estado: "alert_success",
    };
  }
  body = /*html*/ `
  <div   role="alert"class="alert ${datos.estado} ">
    <div class="alert--icon">
    <i class="fas fa-bell"></i>
    </div>
    <div class="alert--content text-center">
    ${datos.mensaje}
    </div>
    <div data-dismiss="alert"
    aria-label="Close" class="alert--close">
    <i class="far fa-times-circle"></i>
    </div>
    </div>
  `;
  alerta.innerHTML += body;
};
const searchProduct = async (el)=>{
  const data= await axios.get(`/productos/searchFromDelete/${el.value}`)
console.log(data);
}
const addProducto = async () => {

  if (proveedor_id.value === "0")return proveedor_id.classList.add("is-invalid");
  if (categoria.value === "0") return categoria.classList.add("is-invalid");
  if (nombre.value === "") return nombre.classList.add("is-invalid");
  if (codigo.value === "") return codigo.classList.add("is-invalid");
  if (precioUnitario.value === "")return precioUnitario.classList.add("is-invalid");
  if (cantidad.value === "") return cantidad.classList.add("is-invalid");
  if (unidadMedida.value === "0")return unidadMedida.classList.add("is-invalid");
  if (descripcion.value === "") return descripcion.classList.add("is-invalid");

  const datos = await axios.post(
    "productos",
    (data = {
      nombre: nombre.value,
      codigo: codigo.value,
      descripcion: descripcion.value,
      categoria: categoria.value,
      unidadMedida: unidadMedida.value,
      precioUnitario: precioUnitario.value,
      proveedor_id: proveedor_id.value,
      cantidad: cantidad.value,
    })
  );
  
alertas(datos.data);
  formAdd.reset();
  codigo.classList.remove("is-valid");
  codigo.classList.remove("is-invalid");
  getproductos();
};
const getproductos = async () => {
  const { data } = await axios.get("/productos/get");
  let body = ``;
  if (data.length === 0) {
    console.log("no hay productos registrados");
  }
  for (let i = 0; i < data.length; i++) {
    const datos = data[i];
    body += `
    
    <tr>
                <th scope="col">${i + 1}</th>
                <th scope="col">${datos.nombre}</th>
                <th scope="col">${datos.codigo}</th>
                <th scope="col">${datos.proveedor_id.nombre}</th>
                <th scope="col">${datos.categoria.nombre}</th>
                <th scope="col"></th>
              </tr>
    `;
  }
  tabla.innerHTML = body;
};
const getCategoriaProducto = async () => {
  try {
    const { data } = await axios.get("/system/categoriaProducto");
    let body = ``;
    if (data.length === 0) {
      console.log("no hay nada");
    }
    
    for (let i = 0; i < data.length; i++) {
      const datos = data[i];
      body += /*html*/ `<option value="${datos._id}">${datos.nombre}</option>`;
      body2 = /*html*/ `<option selected disabled value="0">selecciona una categoria</option>`;
    }
    categoria.innerHTML = body2 + body;
  } catch (error) {
    console.log(error);
  }
};

const getProveedores = async () => {
  const { data } = await axios.get("/proveedores/get");
  let body = ``;
  if (data.length === 0) {
     return console.log("no hay nada");
  }
  
  for (let i = 0; i < data.length; i++) {
    const datos = data[i];
    body += /*html*/ `<option value="${datos._id}">${datos.nombre}</option>`;
    body2 = /*html*/ `<option selected disabled value="0">selecciona un proveedor</option>`;
  }
  proveedor_id.innerHTML = body2 + body;
};
window.onload = async () => {
  await getProveedores();
  await getCategoriaProducto();
  await getproductos()
  document.querySelector("#load").classList.add("d-none");

  document.querySelector("#scroll").classList.remove("scroll");
};
