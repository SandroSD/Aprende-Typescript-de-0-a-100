class Persona {
  nombre: string;
  edad: number;
  altura: number;

  constructor(nombre: string, edad: number, altura: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
  }

  mostrar(): void {
    console.log(`El nombre es ${this.nombre}`);
  }
}

export default Persona;
