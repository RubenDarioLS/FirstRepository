const textArea = document.getElementById('otros-aspectos-label');
const checkbox = document.getElementById('otro-label');




checkbox.addEventListener("change", () => {

    textArea.classList.toggle("aparece-aspectos-label");

});