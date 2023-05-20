
let b1 = document.getElementById('boton1');
let b2 = document.getElementById('boton2');
let ta = document.getElementById("textarea");
let h2 = document.getElementById("h2");
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");
let b3 = document.getElementById("boton3");


//Funcionamiento de los botos
b1.addEventListener("click", function () {
    if (ta.value.length == 0) {
        alert("Por favor, ingrese un mensaje.");
    } else {
        let dfd = ta.value;
        h2.innerHTML = "El mensaje ha sido Encriptado!";
        h2.style.color = "red";
        muñeco.style.display = "none";
        parrafo.innerHTML = Encriptar(dfd);
        parrafo.style.marginBottom = "440px";
        b3.style.display = "initial";
        ta.value = "";
        ta.focus();
    }
});

b2.addEventListener("click", function () {
    if (ta.value.length == 0) {
        alert("Por favor, ingrese un mensaje.");
    } else {
        let dfd = ta.value;
        h2.innerHTML = "El mensaje ha sido Desencriptado!";
        h2.style.color = "green";
        muñeco.style.display = "none";
        parrafo.innerHTML = Desencriptar(dfd);
        parrafo.style.marginBottom = "440px";
        b3.style.display = "initial";
    }
});

//Declaracion de las funciones para encritar y desencriptar
function Encriptar(texto) {
    texto = texto.toLocaleLowerCase();
    
    texto = texto.replace(/e/igm, "enter");
    texto = texto.replace(/i/igm, "imes");
    texto = texto.replace(/o/igm, "ober");
    texto = texto.replace(/a/igm, "ai");
    texto = texto.replace(/u/igm, "ufat");
    console.log("Texto Encriptado: ", texto);
    
    return texto;
}

function Desencriptar(txt) {
    txt = txt.toLocaleLowerCase();
    
    txt = txt.replace(/enter/igm, "e");
    txt = txt.replace(/imes/igm, "i");
    txt = txt.replace(/ober/igm, "o");
    txt = txt.replace(/ai/igm, "a");
    txt = txt.replace(/ufat/igm, "u");
    console.log("Texto Desencriptado: ", txt);
    
    return txt;
}

//Declaracion de funcion COPIAR

function Copiar() {
    navigator.clipboard.writeText(parrafo.textContent);
}

b3.addEventListener("click", Copiar);

onload(ta.focus());

