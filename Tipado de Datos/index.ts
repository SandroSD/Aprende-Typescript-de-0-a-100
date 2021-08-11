// Se puede modificar el valor.
let variable1 = "valor 1";
variable1 = "valor 2";

// No se puede modificar el valor.
const variable2 = 30;
// variable2 = 33;

// ----------------------------

// Tipo string
let nombre: string = "Sandro";

// Tipo boolean
let si: boolean = true;
let no: boolean = false;

// Tipo numéricas
let numero: number = 10;

// Tipo array
let numeros: number[] = [1, 2, 3, 4];
let nombres: string[] = ["Sandro", "Pepe", "Roberto"];

let coleccionNumeros: Array<number> = [1, 2, 3, 4];
let coleccionNombres: Array<string> = ["Sandro", "Pepe", "Roberto"];
let booleanos: Array<boolean> = [true, true, false, true, false];

// Tipo tupla
let tupla: [number, string, boolean];
tupla = [23, "Pepe", true];

// ver valores de tupla
/**
 * Permite meter distinto tipo de datos a comparación del array,
 * pero hay que definirlos.
 */
console.log(tupla[0]); // devuelve 23
console.log(tupla[1]); // devuelve Pepe
console.log(tupla[2]); // devuelve true
