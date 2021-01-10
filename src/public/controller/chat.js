let username = document.querySelector('#username')
let escribiendo = document.querySelector('#escribiendo')
let message = document.querySelector('#message')
let chat = document.querySelector('#chat')
const socket = io()
const messagePersonal = /*html*/ `<div class="card bg-primary rounded w-75 float-right z-depth-0 mb-1">
<div class="card-body p-2">
  <p class="card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit voluptatem cum eum tempore.</p>
</div>
</div>`
const chatOtro= /*html*/` 
<div class="card bg-light rounded w-75 z-depth-0 mb-1 message-text">
                  
<div class="card-body p-2">
  <p class="card-text black-text">Nostrum minima cupiditate assumenda, atque cumque hic voluptatibus at corporis maxime quam harum.</p>
</div>
</div>`

const sendChat = async()=>{
if (username.value === '') return
// username.classList.add('d-none')
 


    socket.emit('chat:Mensaje', {
        mensaje: message.value,
        username: username.value
    })

    const datos = await axios.post('/chat',(
      data= {
    mensaje: message.value,
    usuario_id: id.value
    
    
    
      }
    ))

    message.value= ``
}
socket.on('chat:Mensaje',(data)=>{

escribiendo.innerHTML =``
    if (data.username === username.value) {
      if(data.username === username.value ){
        
      }
        chat.innerHTML+= /*html*/ `
        <div class="card cuarto float-right rounded w-75  z-depth-0  message-text mb-4">
        <div class="card-body p-2">
          <p class="card-text text-white">${data.mensaje}</p>
        </div>
        </div>`
    }
    else{
      
        chat.innerHTML += ` 
        <div class="card bg-light rounded w-75 z-depth-0 message-text mb-4 ">
        <div class="header ml-1">
    <strong class="primary-font">${data.username}</strong>
    
  </div>  
        <div class="card-body p-2">
          <p class="card-text black-text">${data.mensaje}</p>
        </div>
        </div>
        `
    }

})
message.addEventListener('keydown',()=>{
    socket.emit('escribiendo', username.value)
})
socket.on('escribiendo', (data)=>{
                escribiendo.innerHTML = `
                
                <p  class="activity text-muted mb-0">${data} esta escribiendo...</p>
                
                `
})
const variableCHat = ()=>{
  const dbMensajes  = dataFromServidor
  if (dbMensajes._id === idUser) {
    colorAndPositio = 'chat azul'
  }
  if (dbMensajes._id != idUser) {
    colorAndPositio= 'chat blanco'
    
  }
  const NewMessage = {
    message: dbMensajes.message,
    color: colorAndPosition
  }
  body += `
        <div class="card ${NewMessage.color}rounded w-75  z-depth-0 mb-1 message-text">
        <div class="card-body p-2">
          <p class="card-text text-white">${NewMessage.message}</p>
        </div>
        </div>`
        chat.innerHTML = body
}

const getChat = async()=>{

  const {data} = await axios.get('/chat')
  printChat(data)
}
const printChat = (data)=>{
console.log(data.length);


if (data.length === 0) {
  chat.innerHTML = ``;
}
let body = ``;

for (let i = 0; i < data.length; i++) {

  
  
  const datos = data[i]
  
if (datos.usuario_id._id === id.value){var clase = 'cuarto float-right text-white' ;var estado =``; var fontColor =`text-white` }

  
  else {var clase = 'bg-light '
var fontColor =`black-text`

var estado =` <div class="header ml-1">
<strong class="primary-font">${datos.usuario_id.username}</strong>

</div> `}

  body +=`
<div class="card ${clase} rounded w-75 z-depth-0 message-text mb-4 ">
        ${estado}
        <div class="card-body p-2">
          <p class="card-text ${fontColor} ">${datos.mensaje}</p>
        </div>
        </div>`
        chat.innerHTML = body
}





}




    window.onload = async () => {
 await getChat()
  document.querySelector("#load").classList.add("d-none");

  document.querySelector("#scroll").classList.remove("scroll");
};
 