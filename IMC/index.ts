// Función para calcular el IMC
function calcularIMC(peso: number, altura: number): string {
  const imc = peso / (altura * altura);

  let clasificacion = "";

  if (imc < 18.5) {
    clasificacion = "Bajo peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    clasificacion = "Peso Normal";
  } else if (imc >= 25 && imc < 29.9) {
    clasificacion = "Sobrepeso";
  } else {
    clasificacion = "Obesidad";
  }

  return `Tu IMC es ${imc.toFixed(
    2
  )} y estás en la categoría de: ${clasificacion}.`;
}
