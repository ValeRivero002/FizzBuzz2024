import generar_fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  
  it("deberia imprimir secuencia de un numero cadena", () => {
    expect(generar_fizzbuzz(2)).toEqual("2");
  });
});
