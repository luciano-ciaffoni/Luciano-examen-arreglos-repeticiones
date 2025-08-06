//punto 1

let temperatura = [21, 23, 29, 27, 28, 24, 30, 25];
let Suma = 0;


for (let i = 0; i < temperatura.length; i++) {
    Suma += temperatura[i];
}


let  sumaTemp = Suma / temperatura.length;

console.log("El promedio del clima " + sumaTemp); 

//punto 2

let numeros = []

//punto 4 
let precios = [100, 250, 80, 300, 150];
let Iva = [];

for (let i = 0; i < precios.length; i++) {
    Iva.push(precios[i] * 1.21);
}

console.log("El iva es " + Iva); 
