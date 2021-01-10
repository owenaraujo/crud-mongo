// querys
// const btnPost = document.querySelector('#btnPost').addEventListener('click',(e)=>{
//   e.preventDefault()
// })
const alerta = document.querySelector("#alerta");
const form = document.querySelector("#form");
const tabla = document.querySelector("#tabla");
const formPost = /*html*/ `<div class="form-group">
<input
  required
  type="text"
  onkeyup="validateNombre(this)"

  id="nombre"
  name="nombre"
  placeholder="nombre"
  class="form-control mt-3"
  autocomplete="off"
/>
<input
  required
  type="text"
  onkeyup="validateCod(this)"
  style="text-transform: uppercase"
  id="codigo"
  name="codigo"
  placeholder="codigo"
  class="form-control mt-3"
  autocomplete="off"
/>
<input
  required
  type="text"
  onkeyup="validateDescripcion(this)"
  id="descripcion"
  name="descripcion"
  placeholder="descripcion"
  class="form-control mt-3"
  autocomplete="off"
/>
<input
  required
  type="text"
  onkeyup="validateCorreo(this)"
  id="correo"
  name="correo"
  placeholder="correo"
  class="form-control mt-3"
  autocomplete="off"
/>
<input
  required
  type="text"
  onkeyup="validateTelefono(this)"
  id="telefono"
  name="telefono"
  placeholder="telefono"
  class="form-control mt-3"
  autocomplete="off"
/>
<input
  required
  type="text"
  onkeyup="validateDireccion(this)"
  id="direccion"

  name="direccion"
  placeholder="direccion"
  class="form-control mt-3"
  autocomplete="off"
/>

<button
  type="button"
  onclick="addProveedores()"
  id="btnPost"
  class="text-white mt-3 btn btn-block green-success"
>
  guardar
</button>
</div>`;
// const btnPost = document.querySelector("#btnPost");
// querys
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
const addProveedores = async () => {
  try {
    if (!nombre.value) return nombre.classList.add("is-invalid");
    if (!codigo.value) return codigo.classList.add("is-invalid");
    if (!descripcion.value) return descripcion.classList.add("is-invalid");
    if (!correo.value) return correo.classList.add("is-invalid");
    if (!telefono.value) return telefono.classList.add("is-invalid");
    if (!direccion.value) return direccion.classList.add("is-invalid");

    const datos = await axios.post(
      "/proveedores/post",
      (data = {
        nombre: nombre.value,
        codigo: codigo.value,
        descripcion: descripcion.value,
        correo: correo.value,
        telefono: telefono.value,
        direccion: direccion.value,
      })
    );
    alertas(datos.data);
    if (datos.data.value === false) return;
    form.reset();
    codigo.classList.remove("is-valid");

    getProveedores();
  } catch (error) {
    console.log("no hay respuesta del servidor");
  }
};
// btnPost.addEventListener("click", (e) => {
//   e.preventDefault();
//   addProveedores();
// });
const getProveedores = async () => {
  const { data } = await axios.get("/proveedores/get");
  if (data.value === false) return alertas(data);
  let body = ``;
  if (data.length === 0) {
    tabla.innerHTML = ``;
  }
  for (let i = 0; i < data.length; i++) {
    const datos = data[i];
    body += /*html*/ `
        <tr class="table-active">
                      <th scope="row">${i + 1}</th>
                      <td>${datos.nombre}</td>
                      <td>${datos.correo}</td>
                      <td>${datos.telefono}</td>
                      <td>
                      
                      <div onclick="EditProveedor('${
                        datos._id
                      }')" class="boton-tabla-editar text-white c-hand yellow-danger">
                      <i class="fas fa-pencil-alt"></i></div></div>
                      
                      <div onclick="deleteProveedor('${
                        datos._id
                      }')" class="boton-tabla-delete text-white c-hand red-alert">
                      <i class="fas fa-trash"></i></div></div>
                      
                      
                      
                      </td>
                    </tr>
        `;

    tabla.innerHTML = body;
  }
};
const deleteProveedor = async (id) => {
  const { data } = await axios.delete(`/proveedores/delete/${id}`);
  alertas(data);
  getProveedores();
};

const EditProveedor = async (id) => {
  const { data } = await axios.get(`/proveedores/get/${id}`);

  form.innerHTML = /*html*/ `
  <div class="form-group">
                       
                       <input onkeyup="validateNombre(this)" value="${data.nombre}"  type="text" id="nombre" name="nombre" placeholder="nombre" class="form-control mt-3" autocomplete="off">
                       <input  onkeyup="validateCod(this)"
                style="text-transform: uppercase" value="${data.codigo}"  type="text" id="codigo" name="codigo" placeholder="codigo" class="form-control mt-3" autocomplete="off">
                       <input onkeyup="validateDescripcion(this)"  value="${data.descripcion}"  type="text" id="descripcion" name="descripcion" placeholder="descripcion" class="form-control mt-3" autocomplete="off">
                       <input onkeyup="validateCorreo(this)"  value="${data.correo}"  type="text" id="correo" name="correo" placeholder="correo" class="form-control mt-3" autocomplete="off">
                       <input onkeyup="validateTelefono(this)"  value="${data.telefono}"  type="text" id="telefono" name="telefono" placeholder="telefono" class="form-control mt-3" autocomplete="off">
                       <input onkeyup="validateDireccion(this)"  value="${data.direccion}"  type="text" id="direccion" name="direccion" placeholder="direccion" class="form-control mt-3" autocomplete="off">
                    
                      <button type="button" onclick="sendEditProveedor('${data._id}')"id="btnPost" class="text-white mt-3 btn btn-block green-success">guardar</button>
                   </div>
  `;
};
const sendEditProveedor = async (id) => {
  try {
    if (!nombre.value) return nombre.classList.add("is-invalid");
    if (!codigo.value) return codigo.classList.add("is-invalid");
    if (!descripcion.value) return descripcion.classList.add("is-invalid");
    if (!correo.value) return correo.classList.add("is-invalid");
    if (!telefono.value) return telefono.classList.add("is-invalid");
    if (!direccion.value) return direccion.classList.add("is-invalid");

    const datos = await axios.put(
      `/proveedores/put/${id}`,
      (data = {
        nombre: nombre.value,
        codigo: codigo.value,
        descripcion: descripcion.value,
        correo: correo.value,
        telefono: telefono.value,
        direccion: direccion.value,
      })
    );
    if (datos.data.value === false) return alertas(datos.data);
    alertas(datos.data);
    form.innerHTML = formPost;

    getProveedores();
  } catch (error) {
    console.log("no hay respuesta del servidor");
  }
};
window.onload = async () => {
  await getProveedores();
  document.querySelector("#load").classList.add("d-none");

  document.querySelector("#scroll").classList.remove("scroll");
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
