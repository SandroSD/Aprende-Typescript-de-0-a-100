// Forma 1
function sumar(a: number, b: number): number {
  return a + b;
}

const suma: number = sumar(2, 2);

console.log(suma);

// Forma 2
const sumar2 = (a: number, b: number): number => {
  return a + b;
};

const suma2: number = sumar2(2, 2);

console.log(suma2);

// Forma 3
const sumar3 = (a: number, b: number): number => a + b;

const suma3: number = sumar3(2, 2);

console.log(suma3);

// Parámetros opcionales (?)
const opcionales = (nombre: string, apellido: string, edad?: number) => {
  return `${nombre} ${apellido}`;
};

const parametrosOpcionales = opcionales("Sandro", "Dezerio", 30);

console.log(parametrosOpcionales);

// Parámetros por defecto
const porDefecto = (nombre: string, apellido: string, edad: number = 35) => {
  return `${nombre} ${apellido} ${edad}`;
};

const parametrosPorDefecto = porDefecto("Sandro", "Dezerio");
const parametrosPorDefecto2 = porDefecto("Roberto", "Funez", 58);

console.log(parametrosPorDefecto);
console.log(parametrosPorDefecto2);

// Parámetros REST

const rest = (postre: string, ...frutas: string[]): string => {
  return `El postre es ${postre} y tiene frutas ${frutas}`;
};

// Muestra: El postre es postre 1 y tiene frutas manzana, pera, banana.
const parametrosREST = rest("postre 1", "manzana", "pera", "banana");

console.log(parametrosREST);
