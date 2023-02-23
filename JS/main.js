var entrada =document.getElementById("input-texto"); 
var salida = document.getElementById("textoCodificado");

function encriptar (){
    var texto=entrada.value;
    var a, e, i, o, u;

e= texto.replaceAll("e", "enter");
i= e.replaceAll("i","imes");
a=i.replaceAll("a", "ai");
o=a.replaceAll("o", "ober");
u=o.replaceAll("u", "ufat");
    salida.innerHTML=u
}
       

function desencriptar (){
    var texto=entrada.value;
    var a, e, i, o, u;

e= texto.replaceAll("enter", "e");
i= e.replaceAll("imes","i");
a=i.replaceAll("ai", "a");
o=a.replaceAll("ober", "o");
u=o.replaceAll("ufat", "u");
salida.innerHTML=u
}   

    function copiar() {
    navigator.clipboard.writeText(salida.innerHTML)
    alert("copied!");
}
   