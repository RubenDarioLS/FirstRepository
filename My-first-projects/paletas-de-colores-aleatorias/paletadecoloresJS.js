// seleccion de cada paleta de color

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');

// seleccion de cada rario button

const radio1 = document.getElementById("radioPaleta1");
const radio2 = document.getElementById("radioPaleta2");
const radio3 = document.getElementById("radioPaleta3");
const radio4 = document.getElementById("radioPaleta4");

// seleccion de span

let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");

//boton para generar colores

const botonColor = document.getElementById('coloresNuevos');


// Lineas para que aparezca el color 1 por defecto.

color1.style.backgroundColor = generarColor();
    span1.innerHTML = generarColor();




// Boton que genera colores nuevos 
// Con condicionales para que no se generen colores si el candado esta cerrado
botonColor.addEventListener("click", () => {

    
    if(botonAbrir1.classList == "imgAbierto"){

        let colorAleatorio1 = color1.style.backgroundColor = generarColor();
        span1.innerHTML = colorAleatorio1;

    }
    
    

    if(botonAbrir2.classList == "imgAbierto"){

    let colorAleatorio2 = color2.style.backgroundColor = generarColor();
        span2.innerHTML = colorAleatorio2;
    
    }

    if(botonAbrir3.classList == "imgAbierto"){
    
    let colorAleatorio3 = color3.style.backgroundColor = generarColor();
    span3.innerHTML = colorAleatorio3;
    
    }
    
    if(botonAbrir4.classList == "imgAbierto"){

    let colorAleatorio4 = color4.style.backgroundColor = generarColor();
    span4.innerHTML = colorAleatorio4;
    
    }
});

// funcion que elige letras y numeros al azar para formar el color hexadecimal
function generarLetra() {

    let letras = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let numero = Math.floor(Math.random() * letras.length);

    return letras[numero];

}

// funcion que genera los 6 digitos para el color con la funcion anterior y devuelve el color listo
function generarColor() {

    let colorNuevo = "";

    for ( let i = 0; i < 6; i++ ) {

        
        colorNuevo += generarLetra();
    }
        return "#" + colorNuevo;
    
}



// configuarcion para los botones radio y la aparicion de la cantidad de divs con colores

    radio2.addEventListener("click", () => {

        color2.style.display = "block";
        color2.classList.toggle("colorB");
        color2.style.backgroundColor = generarColor();
        span2.innerHTML = generarColor();
        color3.style.display = "none";
        color4.style.display = "none";
        
        
    });

    radio3.addEventListener("click", () => {

        color2.style.display = "block";
        color3.style.display = "block";
        color2.classList.toggle("colorB");
        color3.classList.toggle("colorC");
        color2.style.backgroundColor = generarColor();
        span2.innerHTML = generarColor();
        color3.style.backgroundColor = generarColor();
        span3.innerHTML = generarColor();
        color4.style.display = "none";
        
        
    });

    radio4.addEventListener("click", () => {

        color2.style.display = "block";
        color3.style.display = "block";
        color4.style.display = "block";
        color2.classList.toggle("colorB");
        color3.classList.toggle("colorC");
        color4.classList.toggle("colorD");
        color2.style.backgroundColor = generarColor();
        span2.innerHTML = generarColor();
        color3.style.backgroundColor = generarColor();
        span3.innerHTML = generarColor();
        color4.style.backgroundColor = generarColor();
        span4.innerHTML = generarColor();
        
        
    });



    radio1.addEventListener("click", () => {

        color2.style.display = "none";
        color3.style.display = "none";
        color4.style.display = "none";

    });


    /*candados para bloquear un color y que los demas se muevan*/

    /* boton 1 */
    const botonCerrar1 = document.getElementById("botonCandadoCerrado1");
    const botonAbrir1 = document.getElementById("botonCandadoAbierto1");

    botonAbrir1.addEventListener("click",()=>{
    
        botonCerrar1.classList.toggle("imgCerradoPantalla");
        botonAbrir1.classList.toggle("imgAbiertoInvisible");

        delete color1.generarColor();
    });

    botonCerrar1.addEventListener("click",()=>{
    
        botonCerrar1.classList.toggle("imgCerradoPantalla");
        botonAbrir1.classList.toggle("imgAbiertoInvisible");
    });

    /*boton 2 */

    const botonCerrar2 = document.getElementById("botonCandadoCerrado2");
    const botonAbrir2 = document.getElementById("botonCandadoAbierto2");

    botonAbrir2.addEventListener("click",()=>{
    
        botonCerrar2.classList.toggle("imgCerradoPantalla");
        botonAbrir2.classList.toggle("imgAbiertoInvisible");
    });

    botonCerrar2.addEventListener("click",()=>{
    
        botonCerrar2.classList.toggle("imgCerradoPantalla");
        botonAbrir2.classList.toggle("imgAbiertoInvisible");
    });

    /*boton 3 */

    const botonCerrar3 = document.getElementById("botonCandadoCerrado3");
    const botonAbrir3 = document.getElementById("botonCandadoAbierto3");

    botonAbrir3.addEventListener("click",()=>{
    
        botonCerrar3.classList.toggle("imgCerradoPantalla");
        botonAbrir3.classList.toggle("imgAbiertoInvisible");
    });

    botonCerrar3.addEventListener("click",()=>{
    
        botonCerrar3.classList.toggle("imgCerradoPantalla");
        botonAbrir3.classList.toggle("imgAbiertoInvisible");
    });

    /*boton 4 */

    const botonCerrar4 = document.getElementById("botonCandadoCerrado4");
    const botonAbrir4 = document.getElementById("botonCandadoAbierto4");

    botonAbrir4.addEventListener("click",()=>{
    
        botonCerrar4.classList.toggle("imgCerradoPantalla");
        botonAbrir4.classList.toggle("imgAbiertoInvisible");
    });

    botonCerrar4.addEventListener("click",()=>{
    
        botonCerrar4.classList.toggle("imgCerradoPantalla");
        botonAbrir4.classList.toggle("imgAbiertoInvisible");
    });




    
    




