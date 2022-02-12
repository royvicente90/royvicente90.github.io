document.getElementById("buttonContact").addEventListener('click', function(){

    var nombre = document.getElementById("nameInput").value;
    var email = document.getElementById("mailInput").value;
    var message = document.getElementById("messageInput").value;

    console.log(nombre);

    if ( (nombre === "") || (email === "") || (message === "") || (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)))){
        alert("Ha ingresado un carácter inválido o ha dejado algún campo vacío.");

    } else{

        console.log("Nombre: "+nombre);
        console.log("E-mail: "+email);
        console.log("Mensaje: "+message);
        alert("Su solicitud ha sido enviada.");

    }

});

window.addEventListener('load', function () {
    console.log('el contenido se ha cargado');
    var imagenes = [];
    imagenes[0] = 'img/Foto 1.png';
    imagenes[1] = 'img/Foto 2.png';
    imagenes[2] = 'img/Foto 3.png';
    
    var IndiceImagenes = 0;
    function cambiarImagenes(){
        document.slider.src = imagenes[IndiceImagenes];    
        if(IndiceImagenes < 2) {
            IndiceImagenes++
        } else {
            IndiceImagenes = 0;
        }
    }
    setInterval(cambiarImagenes, 10000);
});