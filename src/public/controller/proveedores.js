// querys
const tabla = document.querySelector("#tabla");
const btnPost = document.querySelector("#btnPost");
// querys
const alertas = (data)=>{
  alert(data.message)
  return
}
const addProveedores = async () => {

  try {
    if (!nombre.value)  return alert('nombre necesario')
    if (!codigo.value)  return alert('codigo necesario')
    if (!descripcion.value)  return alert('descripcion necesario')
    if (!correo.value)  return alert('correo necesario')
    if (!telefono.value)  return alert('telefono necesario')
    if (!direccion.value)  return alert('direccion necesario')





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
    if(datos.data.value === false)return alertas(datos.data);
alertas({message: 'guardado con exito ', value: true})
    getProveedores();
  } catch (error) {
    console.log('no hay respuesta del servidor');
  }
};
btnPost.addEventListener("click", (e) => {
  e.preventDefault();
  addProveedores();
});
const getProveedores = async () => {
  const { data } = await axios.get("/proveedores/get");
if (data.value === false) return alertas(data)
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
const deleteProveedor = async(id)=>{
   await axios.delete(`/proveedores/delete/${id}`)
// console.log(data)
getProveedores()
}


window.onload = async () => {
  await getProveedores();
  document.querySelector("#load").classList.add("d-none");

  document.querySelector("#scroll").classList.remove("scroll");
};
