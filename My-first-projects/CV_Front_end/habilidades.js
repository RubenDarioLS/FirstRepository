const btnLenguajes = document.getElementById("item-7");
const btnBases = document.getElementById("item-9");
const btnAptitudes = document.getElementById("item-11");



    btnLenguajes.addEventListener("click", ()=>{
        document.getElementById("aparecer-lenguajes").classList.toggle("mostrar");
    });


    btnBases.addEventListener("click", ()=>{
        document.getElementById("aparecer-bases").classList.toggle("mostrar");
    });

    btnAptitudes.addEventListener("click", ()=>{
        document.getElementById("aparecer-aptitudes").classList.toggle("mostrar");
    });

    
