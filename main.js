/*actividad 1*/
array = [0,1,2,3,4,5,6,7,8,9];
function tareaEjercicio1(array){
array.shift();
return array;
}
/*actividad 2*/
let listaNums = [];
let entrada = prompt("Ingrese un número");

while (entrada !== null) {
    listaNums.push(Number(entrada));
    entrada = prompt("Ingrese otro número (Cancelar para terminar)");
}

function tareaEjercicio2(listaNums){
    if(listaNums.length > 5){
        for(let i = 0; i < 3; i++){
            listaNums.pop();
        }
        return listaNums; // ✅ clave
    } else {
        console.error("Error: arreglo demasiado corto");
    }
}

console.log(tareaEjercicio2(listaNums));
/*actividad 3*/
array2 = [1,2,3,4,5,6,7,8,9,10];
num = 2;
function tareaEjercicio3(array2, num){
for(let i = 0; i<array2.length; i++){
    array2[i]+=num;
}
return array2;
}
console.log(tareaEjercicio3(array2, num));
