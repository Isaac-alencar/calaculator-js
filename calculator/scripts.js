//Buscando o display da calculadora
const display = document.querySelector("div.display");

//Buscando todas as teclas numéricas na página
const inputKeys = document.querySelectorAll("div#key");
inputKeys.forEach((item) => {
  //Adicionando uma função a cada click de tecla, que será exibir o valor ta tecla no display
  item.addEventListener("click", () => {
    //O valor do texto dentro do display será concatenado ao que foi digitado
    display.innerText += item.innerText;
  });
});

//Registrar operações a serem executadas
const operations = document.querySelectorAll("div#op");
operations.forEach((item) => {
  item.addEventListener("click", () => {
    display.innerText += item.innerText;
  });
});

//backspace function
const backSpace = document.querySelector("div.backspace");
backSpace.addEventListener("click", () => {
  /**
   * 1° transformar o valor do display num array, e separa por vírgulas cada item
   * 2° Remover o último valor, que vai representar a última tecla digitada
   * 3° unir o array em um só, com o join(), para que possa ser exibido novamente no display
   * sem o último dígito
   */
  const displayValue = display.innerText.split("");
  displayValue.pop();
  display.innerText = displayValue.join("");
});

//Usando a função eval do propŕio javascript para executar uma ação apartir de uma string
const equalsKey = document
  .querySelector("div#equals")
  .addEventListener("click", () => {
    const result = eval(display.innerText);
    display.innerText = result;
  });
