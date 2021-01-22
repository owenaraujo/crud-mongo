


const addUser = async () => {
   

if (passwordPost.value != verifyPassword.value, passwordPost.value === '' ) return verifyPassword.classList.add('is-invalid')
    
if( usernamePost.value === '') return usernamePost.classList.add('is-invalid');  usernamePost.classList.add('is-invalid');;




  const datos = await axios.post(
    "/auth/signup",
    (data = {
      username: usernamePost.value,
      password: passwordPost.value,
      pregunta: pregunta.value,
      respuesta: respuesta.value,

    })
  );
  console.log(datos.data);
  
};

var username = document.querySelector('#usernamePost')



username.addEventListener('keyup', async()=>{

    const {data} = await axios.get(`/auth/${usernamePost.value}`)
    

    if(username.value.length < 4) {

        username.classList.add('is-invalid')
        username.classList.add('invalid')
        return
    }
    if (data.length > 0) {
        username.classList.add('is-invalid')
        username.classList.add('invalid')
        return
    }
    else{
        username.classList.remove('is-invalid')
        username.classList.remove('invalid')
        username.classList.add('valid')
    }
})
verifyPassword.addEventListener('keyup',()=>{
    if (passwordPost.value != verifyPassword.value) {
         verifyPassword.classList.add('is-invalid')
        return verifyPassword.classList.add('invalid')
    }
    verifyPassword.classList.remove('is-invalid')
    verifyPassword.classList.remove('invalid')
    verifyPassword.classList.add('valid')

})
