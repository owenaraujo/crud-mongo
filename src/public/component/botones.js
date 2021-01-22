Vue.component('botones',{
template :/*html*/`

      <div class="d-flex">
        <div
          class="text-center boton-cuadrado quinto c-hand text-white mt-3"data-toggle="modal" data-target="#modalAdd"
        >
          
            <i class="fas fa-plus"></i> <br />
            nuevo
          
        </div>

        <div
          class="text-center boton-cuadrado yellow-danger c-hand text-white mt-3 ml-3"
          data-toggle="modal" data-target="#modalEdit"
        >
          
            <i class="fas fa-pencil-alt"></i> <br />
            editar
          
        </div>
        <div style="position: absolute; right: 15px;"
          class="text-center boton-cuadrado red-alert c-hand text-white mt-3 ml-3"data-toggle="modal" data-target="#modalDelete"
        >
         
            <i class="fas fa-trash-alt"></i> <br />
            borrar
         
        </div>
      </div>
    

`

})