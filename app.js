window.onload=onloadFunction;

/*CACHEAMENTO DE DADOS */
const texto = document.getElementById("texto");
const decBtn = document.getElementById("dec-Btn");
const resetBtn = document.getElementById("reset-Btn");
const incBtn = document.getElementById("inc-Btn");
const randomBtn = document.getElementById("randomBtn");

/*ADICIONANDO EVENTOS A CADA BOTAO */
decBtn.addEventListener("click", decreaseFunction);
resetBtn.addEventListener("click",resetFunction);
incBtn.addEventListener("click", increaseFunction)
randomBtn.addEventListener("click",randomFunction)
let currentNumber = 0;

function onloadFunction(){
  texto.innerHTML = currentNumber;
  texto.style.color="black";
  texto.style.fontSize = "18pt";
}

function decreaseFunction(){
  currentNumber--;
  texto.innerHTML = currentNumber;
  texto.style.fontSize = "18pt";
  if(currentNumber < 0) {
    texto.style.color = "red";
  }else{
    if(currentNumber === 0) {
      texto.style.color = "black";
