const resultado = document.getElementById("resultado");
const resultadoDos = document.getElementById("resultado-dos");
let operandoA;
let operandoB;
let operacion;

function teclaPulsada(numero){
  resultado.textContent = numero;
}

function sumar(){
  operandoA = resultado.textContent;
  operacion = "+";
  resultadoDos.textContent = operandoA + " +";
}

function restar(){
  operandoA = resultado.textContent;
  operacion = "-";
  resultadoDos.textContent = operandoA + " -";
}

function multiplicar(){
	operandoA = resultado.textContent;
	operacion = "*";
  resultadoDos.textContent = operandoA + " x";
}

function dividir(){
  operandoA = resultado.textContent;
	operacion = "/";
  resultadoDos.textContent = operandoA + " ÷";
}

function reset(){
  resultado.textContent = "";
  operandoA = 0;
  operandoB = 0;
  operacion = "";
}

function igual(){
  if(operacion == "+"){
    operandoB = resultado.textContent
    let respuesta = parseInt(operandoA) + parseInt(operandoB);
    resultado.textContent = respuesta;
    resultadoDos.textContent = "";
  }else if(operacion == "-"){
    operandoB = resultado.textContent
    let respuesta = parseInt(operandoA) - parseInt(operandoB);
    resultado.textContent = respuesta;
    resultadoDos.textContent = "";
  }else if(operacion == "*"){
    operandoB = resultado.textContent
    let respuesta = parseInt(operandoA) * parseInt(operandoB);
    resultado.textContent = respuesta;
    resultadoDos.textContent = "";
  }else if(operacion == "/"){
    operandoB = resultado.textContent
    let respuesta = parseInt(operandoA) / parseInt(operandoB);
    resultado.textContent = respuesta;
    resultadoDos.textContent = "";
  }
}