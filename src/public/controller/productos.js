const selectProveedores = document.querySelector('#selectProveedores')
const getProveedores =async ()=>{
  const data = await axios.get('/proveedores/get')
  console.log(data);
}
window.onload= async()=>{
await getProveedores()
  document.querySelector("#load").classList.add("d-none");

  document.querySelector("#scroll").classList.remove("scroll");
}
