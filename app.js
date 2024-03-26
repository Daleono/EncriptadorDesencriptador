function asignar_texto(id, texto){
    let elemento = document.getElementById(id);
    elemento.innerHTML = texto;
    return;
}

function inicializar(){
    asignar_texto("salida_h2", "Ningún Mensaje fue encontrado");
    asignar_texto("salida_p", "Ingresa el texto que desees encriptar o descencriptar.");
    document.getElementById("input_copiar").style.display = "none";
    if(window.innerWidth > 1300)
        document.getElementById("salida_img").style.display = "block";
}

function inputConInfo(texto){
    if(!(texto === "")){
        asignar_texto("salida_h2", "");
        document.getElementById("input_copiar").style.display = "block";
        if(screen.width > 1300)
            document.getElementById("salida_img").style.display = "none";
        return 1;
    }
    else{
        inicializar();
        return 0;
    }
}

function encriptar(){
    let texto_usuario = document.getElementById("entrada").value;
    document.getElementById("entrada").value = "";
    let texto_final = "";
    if(inputConInfo(texto_usuario) === 1){
        for(let i = 0 ; i < texto_usuario.length ; i++){
            if(texto_usuario[i] === 'a')
                texto_final = texto_final + "ai";
            else if(texto_usuario[i] === 'e')
                texto_final = texto_final + "enter";
            else if(texto_usuario[i] === 'i')
                texto_final = texto_final + "imes";
            else if(texto_usuario[i] === 'o')
                texto_final = texto_final + "ober";
            else if(texto_usuario[i] === 'u')
                texto_final = texto_final + "ufat";
            else
                texto_final = texto_final + texto_usuario[i];
        }
        asignar_texto("salida_p", texto_final);
    }
}

function descencriptar(){
    let texto_usuario = document.getElementById("entrada").value;
    document.getElementById("entrada").value = "";
    let texto_final = "";
    if(inputConInfo(texto_usuario) === 1){
        for(let i = 0 ; i < texto_usuario.length ; i++){
            if(texto_usuario.slice(i, i+2) === "ai"){
                texto_final = texto_final + 'a';
                i++;
            }
            else if(texto_usuario.slice(i, i+5) === "enter"){
                texto_final = texto_final + 'e';
                i = i + 4;
            }
            else if(texto_usuario.slice(i, i+4) === "imes"){
                texto_final = texto_final + 'i';
                i = i + 3;
            }
            else if(texto_usuario.slice(i, i+4) === "ober"){
                texto_final = texto_final + 'o';
                i = i + 3;
            }
            else if(texto_usuario.slice(i, i+4) === "ufat"){
                texto_final = texto_final + 'u';
                i = i + 3;
            }
            else{
                texto_final = texto_final + texto_usuario[i];
            }
        }
        asignar_texto("salida_p", texto_final);
    }
}

function copiar(){
    let texto_salida = document.getElementById("salida_p").textContent;
    navigator.clipboard.writeText(texto_salida);
}

inicializar();