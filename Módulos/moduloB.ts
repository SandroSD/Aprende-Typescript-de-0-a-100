import { nombre, Persona, Humano, mostrar } from "./moduloA";
import * as paquete from "./moduloA";

console.log(nombre);
console.log(paquete.nombre);

const humano: Humano = { nombre: "Pedro" };
console.log(humano);

mostrar();
paquete.mostrar();
