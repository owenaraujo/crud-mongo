 new Vue({
  el: `#app`,
data (){
  return{
      datos: null,
      frutas: [],
      nuevaFruta: '',
      total: 0,
      
      dark: true
  }
  
},
methods:{
  
agregarFruta(){
this.frutas.push(
  {nombre: this.nuevaFruta, cantidad: 0},


)
this.nuevaFruta = ''
},
},
computed: {
  sumarFrutas (){
      this.total = 0
      for(fruta of this.frutas){
          this.total = this.total +fruta.cantidad
      }
      return this.total
  }
},
mounted() {
  if (localStorage.style) {
    this.dark = localStorage.style;
  }
},
watch: {
  style(newstyle) {
    localStorage.style = newstyle;
  }
}
})