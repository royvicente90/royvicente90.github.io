//window.setTimeout(function () {
//    window.location.reload();
//  }, 10000);


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
    })