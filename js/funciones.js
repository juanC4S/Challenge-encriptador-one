
// document.addEventListener("DOMContentLoaded", function() {
    
// });

// definiendp variables con los clases y ids del html y expresiones regulares
const txtdelusuario = document.getElementById('txt1');
const mensaje = document.getElementById("txt2");
const textArea = document.querySelector(".mensaje"); 
const muñeco = document.querySelector(".muñecoPng");
const miniinfo = document.querySelector(".informacion");

// Expresión regular para validar la entrada ya que permite solo letras 
// sin acentos, números y espacios
const regex = /[^a-zA-Z0-9\s]/g;


const spam = document.querySelector(".Alerta");




function btnEncriptar(){

   
    const textEncriptado = Encriptar(txtdelusuario.value.replace(regex, ""));
    mensaje.value = textEncriptado;
    txtdelusuario.value = "";
    
    
    muñeco.style.display = "none";
    spam.style.display = "none";
    miniinfo.style.display = "block";
}
function btnDesencriptar(){
    
    const textDesencriptado = Desencriptar(txtdelusuario.value.replace(regex, ""));
    mensaje.value = textDesencriptado;
    txtdelusuario.value = "";
    
    muñeco.style.display = "none";
    spam.style.display = "none";
    miniinfo.style.display = "block";
}
function btnCopiar(){
    // Selecciona el texto en el elemento
    mensaje.select();
    // Para dispositivos móviles
    mensaje.setSelectionRange(0, 99999); 

    // Copia el texto seleccionado al portapapeles
    document.execCommand('copy');

    // para que muestre una alerta cuando se copie el texto del id mensaje
    alert('Texto copiado: ' + mensaje.value);
}

//funciones encriptar y descencriptar
function Encriptar(stringEncriptado){
     

    let matrizVocales = [["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]];
stringEncriptado = stringEncriptado.toLowerCase();
for(let i = 0; i<matrizVocales.length; i++) {
if(stringEncriptado.includes(matrizVocales[i][0])) {}
stringEncriptado = stringEncriptado.replaceAll(matrizVocales[i][0], matrizVocales[i][1]);
}

let muñeco = document.querySelector(".muñecoPng");
let textArea = document.querySelector(".mensaje");
let spam = document.querySelector(".informacion");
spam.style.display = "none";
muñeco.style.display = "none";
textArea.style.display = "block";

return stringEncriptado;

}
function Desencriptar(stringDesencriptado){
    
   
    let matrizVocales = [["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i = 0; i<matrizVocales.length; i++) {
    if(stringDesencriptado.includes(matrizVocales[i][1])) {}
    stringDesencriptado = stringDesencriptado.replaceAll(matrizVocales[i][1], matrizVocales[i][0]);
    }
    let muñeco = document.querySelector(".muñecoPng");
    let textArea = document.querySelector(".mensaje");
    let spam = document.querySelector(".informacion");
    spam.style.display = "none";
    muñeco.style.display = "none";
    textArea.style.display = "block";

    return stringDesencriptado;
}

