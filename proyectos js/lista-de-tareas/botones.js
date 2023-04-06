const btnAgregar = document.getElementById('boton-agregar');   // id de un button
const tareaAgregar = document.getElementById('tarea');  // id del input
const listaPendientes = document.getElementById('lista-pendientes'); // id de UL

function agregarItem(){
    let li = document.createElement('li');
    let texto = tareaAgregar.value;
    let textoDefinitivo = textoMayuscula(texto);
    li.innerText = textoDefinitivo;
    li.className=" ps-3 ms-0 pe-0 me-0 col-md-12 col-sm-12 col-12";
    listaPendientes.appendChild(li);
    const btnDelete= document.createElement('button');
    btnDelete.textContent="X";
    btnDelete.className=" btn btn-danger col-md-2 col-sm-2 col-2 ";
    btnDelete.addEventListener('click', () => deleteItem(li));
    li.appendChild(btnDelete);
    
    tareaAgregar.value = "";

}

function deleteItem(li) {
    
    li.remove()   
}

function textoMayuscula(palabra) {
    let mayuscula = palabra[0].toUpperCase();
    let palabraSinInicial = palabra.slice(1);
    let textoFinal = mayuscula + palabraSinInicial;
    return textoFinal;
  }

  tareaAgregar.addEventListener("keyup", (e) => {
    if (e.key === "Enter"){
        agregarItem();
    }
});


  btnAgregar.addEventListener('click', agregarItem);
  



  