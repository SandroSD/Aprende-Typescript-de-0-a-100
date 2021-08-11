const nombre: string = "Pepe";
const numero: number = 1;

// Evitar usar tipo de dato any.
let noLose: any = "Alguien";

function mostrar(dato: string): string {
  return dato;
}

console.log(mostrar("Roberto"));

// Funciones genéricas
function mostrarGenerica<T>(dato: T): T {
  return dato;
}

console.log(mostrarGenerica(11));

// Clases genéricas
class Persona<T> {
  nombre: string;
  edad: T;

  mostrar(param: T): T {
    return param;
  }
}

const obj = new Persona();

// Interfaces genéricas
interface Persona4<T> {
  nombre: T;
}

let obj3: Persona4<string> = { nombre: "Rob" };
let num3: Persona4<number> = { nombre: 12 };
