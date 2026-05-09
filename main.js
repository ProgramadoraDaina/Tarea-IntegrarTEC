/*actividad 1*/
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function tareaEjercicio1(array) {
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

function tareaEjercicio2(listaNums) {
    if (listaNums.length > 5) {
        for (let i = 0; i < 3; i++) {
            listaNums.pop();
        }
        return listaNums; // ✅ clave
    } else {
        console.error("Error: arreglo demasiado corto");
    }
}

console.log(tareaEjercicio2(listaNums));
/*actividad 3*/
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 2;
function tareaEjercicio3(array2, num) {
    for (let i = 0; i < array2.length; i++) {
        array2[i] += num;
    }
    return array2;
}
console.log(tareaEjercicio3(array2, num));
/*Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del
número recibido.
El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n)*/
let num2 = 12;
function tareaEjercicio4(num2) {
    let resultado = [];
    for (let i = 0; i < num2; i++) {
        resultado.push(i);
    }
    return resultado;
}
console.log(tareaEjercicio4(num2));

/*Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una
 función que encuentre qué número es el distinto*/
let array3 = [0, 0, 0, 0, 0, 0, 0, 1, 0]
let distinto;
function tareaEjercicio5(array3, distinto) {
    let cont = {};
    for (let i = 0; i < array3.length; i++) {
        let valor = array3[i];
        if (cont[valor]) {
            cont[valor]++;
        } else {
            cont[valor] = 1;
        }
    }
    let pos;
    for (let j in cont) {
        if (cont[j] === 1) {
            distinto = Number(j);
        }
    }
    pos = array3.indexOf(distinto);
    if (pos !== -1) {
        array3.splice(pos, 1);
    }
    return {
        array: array3,
        distinto: distinto
    };
}
console.log(tareaEjercicio5(array3));
/*Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible
entre ellos.*/
let array4 = [1, 1, 2, 2, 3, 3, 4, 4, 0];
function tareaEjercicio6(array4) {
    let suma = [];
    let iteracion = 0;
    for (let i = 0; i < array4.length; i++) {
        for (let j = 0; j < array4.length; j++) {
            if (array4[i + 1] !== undefined) {
                suma[iteracion] = array4[i] + array4[j];
                iteracion++;
            }
        }
    }
    let comp = suma[0];
    for (let i = 0; i < suma.length; i++) {
        if (comp > suma[i]) {
            comp = suma[i];
        }
    }
    return {
        suma: suma,
        comp: comp
    }
}
console.log(tareaEjercicio6(array4));

/*Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes
y devuelva el valor de dicho producto*/
let array5 = [1, 5, 2, 2, 3, 3, 4, 4];
function tareaEjercicio7(array5) {
    let j = 1;
    let max = array5[0] * array5[1];
    let suma = [];
    for (let i = 0; i < array5.length; i++) {
        suma[i] = array5[i] * array5[j];
        j++
        if (max < suma[i]) {
            max = suma[i];
        }
    }
    return {
        suma: suma,
        max: max
    };
}
console.log(tareaEjercicio7(array5));
/*Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cuál se está por comer.

Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero.

Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.*/
array6 = ["sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "wolf", "sheep"];
function tareaEjercicio8(array6) {
    let ovejaPeligro = [];
    let a = 0;
    for (let i = 0; i < array6.length; i++) {
        if (array6[i] === "wolf") {
            let pos;
            if (i === array6.length - 1) {
                pos = 0;
            } else {
                pos = i + 1;
            }
            if (array6[pos] === "sheep") {
                console.log("el lobo se va a comer a la oveja numero " + pos);
                ovejaPeligro[a] = pos;
                array6.splice(pos, 1);
                i--;
                console.log(array6);
                console.log("ya no hay peligro!");
                a++;
            }
        }
    }
    return ovejaPeligro;
}
console.log(tareaEjercicio8(array6));
