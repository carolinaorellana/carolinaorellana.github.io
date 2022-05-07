//Navbar con cambio de color en background 
/*Bootstrap 5.1 y Jquery*/
var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.pageYOffset >100){
        nav.classList.add('bg-info', 'shadow');
    }else{
        nav.classList.remove('bg-info', 'shadow');
    }
})

//tooltip (en cards) 
/*Bootstrap 5.1*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*Evento Enviar Comentario Formulario*/
/* ECMAScrip 6*/
let enviarCorreo = document.getElementById("enviarMensaje");
enviarCorreo.addEventListener("click",() => {
    alert("El mensaje fue enviado correctamente...");
});
