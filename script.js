let menuVisible=false
//funtcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true
    }
}

function seleccionar(){
    //oculta el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}



// contacto form

 const scriptURL = "https://script.google.com/macros/s/AKfycby1hU7kzH0XTqTGkp_reOQ-Glxl8P5i_sZZ6YihGpcArY8ucyfp6q1uBbMYQK9X8EkXGA/exec"
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById("msg")

form.addEventListener("submit", e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Mensaje enviado!"
      setTimeout(function(){
          msg.innerHTML = ""
      }, 4000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
