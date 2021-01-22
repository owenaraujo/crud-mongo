// querys
const alerta = document.querySelector("#alerta");
const resultadoDelete = document.querySelector("#resultadoDelete");
const informacionDelete = document.querySelector("#informacionDelete");
const formSearchDelete = document.querySelector("#formSearchDelete");
const form = document.querySelector("#formAdd");
const tabla = document.querySelector("#tabla");
const busqueda = document.querySelector("#busqueda");
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
  <div   role="alert"class="alert ${datos.estado}" :class="{'': !dark, 'color-secondary' : dark}">
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
    // form.reset();
    codigo.classList.remove("is-valid");

    getProveedores();
  } catch (error) {
    console.log("no hay respuesta del servidor");
  }
};
const cancelDelete = async()=>{
  searchFromDelete.value =''
  busqueda.classList.remove('d-none')
  resultadoDelete.innerHTML= ``
  informacionDelete.innerHTML= ``


}
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
                      <td>${datos.codigo}</td>
                      <td>${datos.telefono}</td>
                      <td>${datos.correo}</td>

                      
                    </tr>
        `;

    tabla.innerHTML = body;
  }
};
const deleteProveedor = async (id) => {
  busqueda.classList.remove('d-none')
  informacionDelete.innerHTML= ``
  const { data } = await axios.delete(`/proveedores/delete/${id}`);
  alertas(data);
  getProveedores();
};
const innerdataEdit= async (id)=>{
  searchFromEdit.value =''
  busquedaEdit.classList.add('d-none')
  resultadoEdit.innerHTML= ``

  const {data}= await axios.get(`/proveedores/get/${id}`)
 
body = /*html*/`

<form id="formEdit" class="">
          <div class="form-group mb-2">
            <input
              required
              type="text"
              value="${data.nombre}"
              onkeyup="validateNombre(this)"
              id="nombreEdit"
              name="nombre"
              placeholder="nombre"
              class="form-control mt-3"
              autocomplete="off"
            />
            <input
              required
              value="${data.codigo}"

              type="text"
              onkeyup="validateCod(this)"
              style="text-transform: uppercase"
              id="codigoEdit"
              name="codigo"
              placeholder="codigo"
              class="form-control mt-3"
              autocomplete="off"
            />
            <input
            value="${data.descripcion}"
            
              required
              type="text"
              onkeyup="validateDescripcion(this)"
              id="descripcionEdit"
              name="descripcion"
              placeholder="descripcion"
              class="form-control mt-3"
              autocomplete="off"
            />
            <div class="d-flex">
              <input
              value="${data.correo}"
              
                required
                type="email"
                onkeyup="validateCorreo(this)"
                id="correoEdit"
                name="correo"
                placeholder="correo"
                class="form-control mt-3 mr-2"
                autocomplete="off"
              />
              <input
              value="${data.telefono}"

                required
                type="number"
                onkeyup="validateTelefono(this)"
                id="telefonoEdit"
                name="telefono"
                placeholder="telefono"
                class="form-control mt-3 ml-2 w-75"
                autocomplete="off"
              />
            </div>
            <input
            value="${data.direccion}"

              required
              type="text"
              onkeyup="validateDireccion(this)"
              id="direccionEdit"
              name="direccion"
              placeholder="direccion"
              class="form-control mt-3"
              autocomplete="off"
            />
           
          </div>
        </form>
        <div class="d-flex">

<div onclick="sendEditProveedor('${data._id}')" class="btn c-hand btn-block  color-primary mr-2">guardar</div><div style="width: 50px; height: 40px; border-radius: 2px;" class=" c-hand red-alert  d-flex align-items-center justify-content-center"><i class="fas fa-trash-alt"></i></div>

</div>
        

`
informacionEdit.innerHTML= body
}
const innerdataDelete= async (id)=>{
  searchFromDelete.value =''
  busqueda.classList.add('d-none')
  resultadoDelete.innerHTML= ``
  const {data}= await axios.get(`/proveedores/get/${id}`)
body = /*html*/`
<div id="contenedorDelete">
<h4>${data.nombre}</h4>
<p>${data.descripcion}
</p>
<div class="d-flex justify-content-center">
<p  class="h5"> ${data.telefono}</p> <p class=" h5 ml-3">${data.telefono}</p>

</div>
<div class="d-flex justify-content-center">
<div onclick="deleteProveedor('${data._id}')"
class="text-center boton-cuadrado color-primary c-hand text-white mt-3 mr-5"
>

<i class="fas fa-check"></i> <br />
borrar

</div>
<div onclick="cancelDelete()"
class="text-center boton-cuadrado red-alert c-hand text-white mt-3 ml-5"
>

<i class="fas fa-times"></i> <br />
cancelar

</div>



</div>
</div>
`
informacionDelete.innerHTML= body
}
const searchProveedorFromEdit = async () => {

if(searchFromEdit.value === '') return
  
   const {data}=await axios.get(`/proveedores/get/${searchFromEdit.value}/${parametroEdit.value}`);
   
   if (data.length === 0) return resultadoEdit.innerHTML = `  <div class="c-hand div-search mb-3">
   <div class="text-center w-100"> no se ha encontrado nada</div>
 </div>`
   let body= ``
   for (let i = 0; i < data.length; i++) {
     const datos = data[i];
     
     
     body += /*html*/`
     <div class="c-hand div-search mb-3">
              <div onclick="innerdataEdit('${datos._id}')" class="text-center w-100">${datos.nombre} ${datos.codigo}</div>
            </div>
     
     `
     resultadoEdit.innerHTML= body
   }
  

};
const searchProveedorFromDelete = async () => {

if(searchFromDelete.value === '') return resultadoDelete.innerHTML =``
  
   const {data}=await axios.get(`/proveedores/get/${searchFromDelete.value}/${parametroDelete.value}`);
   
   if (data.length === 0) return resultadoDelete.innerHTML = `  <div class="c-hand div-search mb-3">
   <div class="text-center w-100"> no se ha encontrado nada</div>
 </div>`
   let body= ``
   for (let i = 0; i < data.length; i++) {
     const datos = data[i];
     
     
     body += /*html*/`
     <div class="c-hand div-search mb-3">
              <div onclick="innerdataDelete('${datos._id}')" class="text-center w-100">${datos.nombre} ${datos.codigo}</div>
            </div>
     
     `
     resultadoDelete.innerHTML= body
   }
  

};
const EditProveedor = async (id) => {
  const { data } = await axios.get(`/proveedores/get/${id}`);
console.log(data);
};
const sendEditProveedor = async (id) => {
  try {
    if (!nombreEdit.value) return nombreEdit.classList.add("is-invalid");
    if (!codigoEdit.value) return codigoEdit.classList.add("is-invalid");
    if (!descripcionEdit.value) return descripcionEdit.classList.add("is-invalid");
    if (!correoEdit.value) return correoEdit.classList.add("is-invalid");
    if (!telefonoEdit.value) return telefonoEdit.classList.add("is-invalid");
    if (!direccionEdit.value) return direccionEdit.classList.add("is-invalid");

    const datos = await axios.put(
      `/proveedores/put/${id}`,
      (data = {
        nombre: nombreEdit.value,
        codigo: codigoEdit.value,
        descripcion: descripcionEdit.value,
        correo: correoEdit.value,
        telefono: telefonoEdit.value,
        direccion: direccionEdit.value,
      })
    );
    if (datos.data.value === false) return alertas(datos.data);
    alertas(datos.data);
    busquedaEdit.classList.remove('d-none')
  informacionEdit.innerHTML= ``

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









