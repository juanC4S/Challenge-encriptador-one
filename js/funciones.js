//funciones encriptar y descencriptar

function encriptar(){
    let txtdelusuario = document.getElementById('txt1').value;

    // Aquí use split() que  la cadena se divide en un array donde cada elemento 
    // es un carácter individual de la cadena original.
    vocales = txtdelusuario.split("");
    
    
    reemp="";

    for (let i = 0; i < vocales.length; i++){
        
        if (vocales[i] == "a"){
            vocales[i]= vocales[i].replace("a","enter");
        }else if(vocales[i]== "e"){
            vocales[i]= vocales[i].replace("e","imes");
        }else if(vocales[i]== "i"){
            vocales[i] = vocales[i].replace("i","ai");
        }else if(vocales[i]=="o"){
            vocales[i]= vocales[i].replace("o","ober");
        }else if(vocales[i]== "u"){
            vocales[i] = vocales[i].replace("u","ufat");
        }
       
        reemp += vocales[i];
        // let encriptados = new Array(vocales[i])
        // let txt = encriptados.join("");
        
        
        
    }
    
    console.log(reemp);
    document.getElementById("txt2").value = reemp;
}
function desencriptar(){
    let txtdelusuario = document.getElementById('txt1').value;
   
    //en esta parte investigue sobre las expresiones regulares y aisle los textos a remmplazas : (/enter/g)
    //  y asi susesivamente para las demas donde la g indica que es global, es decir, reemplazará todas 
    //las apariciones de la cadena "enter" en el texto, no solo la primera.
    // Como use arriba use el  replace() a cada llamada toma el resultado del reemplazo 
    //anterior y aplica el siguiente.
    txtdelusuario = txtdelusuario
    .replace(/enter/g, "a")
    .replace(/imes/g, "e")
    .replace(/ai/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
   
    
    console.log(txtdelusuario);
    
    document.getElementById("txt2").value = txtdelusuario;
}
