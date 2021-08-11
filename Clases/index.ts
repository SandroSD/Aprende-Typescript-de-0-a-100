class Vehiculo {
  marca: string;
  fecha: string;
  puertas: number;

  constructor(_marca: string, _fecha: string, _puertas: number) {
    this.marca = _marca;
    this.fecha = _fecha;
    this.puertas = _puertas;
  }

  acelerar(): void {
    console.log("Acelerando...");
  }

  frenar(): void {
    console.log("Frenando...");
  }
}

const coche = new Vehiculo("Ford", "12/07/2018", 4);

// Ver propiedades
console.log(coche.marca);
console.log(coche.fecha);
console.log(coche.puertas);

// Usar métodos de la clase
console.log(coche.acelerar());
console.log(coche.frenar());

// Herencia
class Padre {
  nombre: string;
  edad: number;

  constructor(_nombre: string, _edad: number) {
    this.nombre = _nombre;
    this.edad = _edad;
  }

  mostrarNombre(): void {
    console.log(this.nombre);
  }
}

class Hijo extends Padre {
  apellido: string;

  constructor(_nombre: string, _edad: number, _apellido: string) {
    // Llama al constructor de la clase padre y le pasa los parámetros.
    super(_nombre, _edad);

    this.apellido = _apellido;
  }

  mostrarNombreHijo(): void {
    console.log(this.nombre);
  }
}

const hijo = new Hijo("Pepe", 15, "Robs");

// Ver propiedades
console.log(hijo.nombre);
console.log(hijo.edad);
console.log(hijo.apellido);

// Usar métodos
console.log(hijo.mostrarNombreHijo());

// Modificadores de acceso
/**
 * public: todos tienen acceso a esa propiedad o método.
 * private: propiedad o método solo accesible dentro de la clase.
 * protected: se puede acceder desde la clase o alguna clase heredada pero no desde afuera.
 */
class Animal {
  // Si no tienen modificadores explicitos, toma por defecto el modificador public.
  public nombre: string;
  public tamanio: number;

  public constructor(_nombre: string, _tamanio: number) {
    this.nombre = _nombre;
    this.tamanio = _tamanio;
  }

  public moverse(): void {
    console.log("Me estoy moviendo.");
  }
}

const animal = new Animal("Perro", 5);

// Si es publico puedo hacer esto.
console.log(animal.nombre);

// Si es privado no puedo hacer esto
console.log(animal.nombre);

// Si el atributo nombre fuera protected, no puedo hacer esto
console.log(animal.nombre);

// Get y Set
class Persona {
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  get getNombre(): string {
    return this.nombre;
  }

  set setNombre(nombre: string) {
    this.nombre = nombre;
  }
}

const persona = new Persona("Pepe");

console.log(persona.getNombre);
persona.setNombre = "Rob";
console.log(persona.getNombre);

// Clase abstracta
abstract class Padre2 {
  // Hay que definir la firma de los métodos, pero no implementarlos.
  abstract caminar(): void;
  abstract gatear(): void;

  saludar(saludo: string): string {
    return saludo;
  }
}

class Hijo2 extends Padre2 {
  caminar(): void {
    console.log("Caminando Hijo 2...");
  }
  gatear(): void {
    console.log("Gateando Hijo 2...");
  }
}

class Hijo3 extends Padre2 {
  caminar(): void {
    console.log("Caminando Hijo 3...");
  }
  gatear(): void {
    console.log("Gateando Hijo 3...");
  }
}
