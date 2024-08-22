



// let vocal;
// let vocales;
// switch(vocales){
//     case 1: "a"== "enter";
//     break;
//     case 2: "e" == "imes";
//     break;
//     case 3: "i"== "ai";
//     break;
//     case 4: "o" == "ober";
//     break;
//     case 5: "u"== "ufat";
//     break;
// }

// function encriptar(){
//     let txtdelusuario = document.getElementById('txt1').value;
//     vocales = txtdelusuario.split("");
    
//     // let reemp = vocales;
//     // switch(reemp){
//     //     case 1: "a"== "enter";
//     //     break;
//     //     case 2: "e" == "imes";
//     //     break;
//     //     case 3: "i"== "ai";
//     //     break;
//     //     case 4: "o" == "ober";
//     //     break;
//     //     case 5: "u"== "ufat";
//     //     break;
    
//     // }
//     reemp="";

//     for (let i = 0; i < vocales.length; i++){
        
//         if (vocales[i] == "a"){
//             vocales[i]= vocales[i].replace("a","enter");
//         }else if(vocales[i]== "e"){
//             vocales[i]= vocales[i].replace("e","imes");
//         }else if(vocales[i]== "i"){
//             vocales[i] = vocales[i].replace("i","ai");
//         }else if(vocales[i]=="o"){
//             vocales[i]= vocales[i].replace("o","ober");
//         }else if(vocales[i]== "u"){
//             vocales[i] = vocales[i].replace("u","ufat");
//         }
       
//         reemp += vocales[i];
//         // let encriptados = new Array(vocales[i])
//         // let txt = encriptados.join("");
        
        
        
//     }
    
//     console.log(reemp);
//     document.getElementById("txt2").value = reemp;
// }
function desencriptar(){
    let txtdelusuario = document.getElementById('txt1').value;
    vocales = txtdelusuario.split("");
    
    // let reemp = vocales;
    // switch(reemp){
    //     case 1: "a"== "enter";
    //     break;
    //     case 2: "e" == "imes";
    //     break;
    //     case 3: "i"== "ai";
    //     break;
    //     case 4: "o" == "ober";
    //     break;
    //     case 5: "u"== "ufat";
    //     break;
    
    // }
    reemp="";

    for (let i = 0; i < vocales.length; i++){
        console.log(vocales[i]);
        
        if (vocales[i] == "enter"){
            vocales[i]= vocales[i].replace("enter","a");
        }else if(vocales[i]== "imes"){
            vocales[i]= vocales[i].replace("imes","e");
        }else if(vocales[i]== "ai"){
            vocales[i] = vocales[i].replace("ai","i");
        }else if(vocales[i]=="ober"){
            vocales[i]= vocales[i].replace("ober","o");
        }else if(vocales[i]== "ufat"){
            vocales[i] = vocales[i].replace("ufat","u");
        }
       
        reemp += vocales[i];
        // let encriptados = new Array(vocales[i])
        // let txt = encriptados.join("");
        
        
        
    }
    
    console.log(reemp);
    document.getElementById("txt2").value = reemp;
}
