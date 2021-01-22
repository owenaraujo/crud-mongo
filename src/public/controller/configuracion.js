const btnEdit = document.querySelector("#btnEdit");
const listCategoriasProducto = document.querySelector(
  "#listCategoriasProducto"
);

const btnEditActivate = /* html*/ `
<button onclick="editEmpresa()" class="btn btn-md red-alert mt-3">
editar datos de la empresa
</button>`;
const btnEditSend = /* html*/ `
<button onclick="editEmpresaSend()" class="btn btn-md yellow-danger mt-3">
guardar
</button>`;
const activateInputs = () => {
  document.querySelector("#nombreEmpresa").classList.remove("disabled");
  document.querySelector("#correo").classList.remove("disabled");
  document.querySelector("#telefono").classList.remove("disabled");
};
const disabledInput = () => {
  document.querySelector("#nombreEmpresa").classList.add("disabled");
  document.querySelector("#correo").classList.add("disabled");
  document.querySelector("#telefono").classList.add("disabled");
};
const editEmpresa = async () => {
  activateInputs();
  btnEdit.innerHTML = btnEditSend;
};
const editEmpresaSend = async () => {
  btnEdit.innerHTML = btnEditActivate;
  disabledInput();
};
const addCategoriaProducto = async () => {
  try {
    await axios.post(
      "/system/categoriaProducto",
      (data = {
        nombre: categoriaProducto.value,
      })
    );
    document.querySelector("#categoriaProducto").value = ``;
    getCategoriaProducto();
  } catch (error) {
    console.log(error);
  }
};
const getCategoriaProducto = async () => {
  try {
    const { data } = await axios.get("/system/categoriaProducto");
    listInnerCategoriasProducto(data);
  } catch (error) {
    console.log(error);
  }
};
const listInnerCategoriasProducto = (data) => {
  let body = ``;
  if (data.length === 0) {
    listCategoriasProducto.innerHTML = ``;
  }
  for (let i = 0; i < data.length; i++) {
    const datos = data[i];
    body += /*html */ `
    <div class="mini-card"><div class="ml-2">${datos.nombre}</div>
    <div onclick="deleteCategoriasProducto('${datos._id}')" class="boton-tipo-2 text-white c-hand red-alert">
    <i class="fas fa-trash"></i></div></div>
`;
    listCategoriasProducto.innerHTML = body;
  }
};
const deleteCategoriasProducto = async (id) => {
  const { data } = await axios.delete(`/system/categoriaProducto/${id}`);

  getCategoriaProducto();
};

window.onload= async()=>{
  
  await getCategoriaProducto()
    document.querySelector("#load").classList.add("d-none");
  
    document.querySelector("#scroll").classList.remove("scroll");
  }


  // vue 


  
  // vue 