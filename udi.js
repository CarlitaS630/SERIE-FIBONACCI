//-------------------------- Declaro e Inicializo variables----------------------------
let resultado = 0;
let j = 0;
let k = 1;
const BTEmpezar=document.getElementById("btEmpezar");

//const BTEmpezar=document.getElementById("btEmpezar").onclick= Sumar(j,k,resultado);
// -------------------------------- Proceso --------------------------

//Agrego evento al boton
BTEmpezar.addEventListener("click",function Sumar(){

//Calcula serie Fibonacci
    for (let i=0;i<6;i++)
    {
        resultado= j + k;    
        j=k;
        k=resultado;
        //Muestro------------------------
         document.writeln("Resultado: " + resultado +"<br>")
        //const resultado.innerHtml= 
        //comprobar correcto funcionamiento
        /*console.log("result: "+ resultado);
        console.log("j:"+ j);
        console.log("k: "+ k);*/

}
});
