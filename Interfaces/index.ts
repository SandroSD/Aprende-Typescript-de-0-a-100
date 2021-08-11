interface Persona {
  nombre: string;
}

function caminar(persona: Persona): void {
  console.log(`La persona ${persona.nombre} está caminando.`);
}

const nuevaPersona = { nombre: "Manuel" };
caminar(nuevaPersona);

// Parámetros opcionales

interface Persona2 {
  altura: number;
  peso: number;
  nombre?: string;
}

function mostrarPersona(persona: Persona2): string {
  let mediaPeso: number = persona.altura / persona.peso;
  if (persona.nombre) {
    return `${persona.nombre} tiene una media de ${mediaPeso}`;
  } else {
    return `No se quien eres pero tiene una media de ${mediaPeso}`;
  }
}

let persona2: Persona2 = { altura: 2, peso: 120 };

console.log(mostrarPersona(persona2));

// Parámetros de solo lectura
interface Persona3 {
  readonly nombre: string;
  readonly apellido: string;
}

let persona3: Persona3 = { nombre: "Seba", apellido: "Lero" };
// Como la propiedad está definida como readonly no puede ser modifcada.
// persona3.nombre = "Robs";
console.log(persona3);

// Interfaces para funciones
interface General {
  (nombre: string, apellido: string, edad: number): void;
}

let funcionGeneral: General = function (
  nombre: string,
  apellido: string,
  edad: number
): void {
  console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`);
};

funcionGeneral("Pepe", "Sandoval", 17);
