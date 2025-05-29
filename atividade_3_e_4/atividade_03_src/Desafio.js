//Lê os valores de entrada
const ValorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//calcula o imposto atraves da funçao *calcularimposto*
const valorImposto = calcularImposto(valorSalario);

//calcula e imprime a saida (com 2 casa decimais)
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));

//funcao util para o calculo do imposto (baseado nas aliquotas)
function calcularImposto(Salario){
  let aliquota;
  if(salario >= 0 && salario <= 1100){
    aliquota = 0.05;
  }else if(salario >= 1101.01 && salario <= 2500){
    aliquota = 0.10;
  }else{
    aliquota = 0.15;
  }

  return aliquota * salario;
  
}


/*

// Importa o módulo 'readline' para ler a entrada do console
const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array para armazenar as linhas de entrada
const inputLines = [];

// Evento disparado quando uma linha de entrada é lida
rl.on('line', (line) => {
    inputLines.push(line);
});

// Evento disparado quando todas as linhas de entrada foram lidas (fim da entrada)
rl.on('close', () => {
    // Agora processamos as entradas como faríamos com gets()
    const ValorSalario = parseFloat(inputLines[0]);
    const valorBeneficios = parseFloat(inputLines[1]);

    // calcula o imposto atraves da funçao *calcularimposto*
    const valorImposto = calcularImposto(ValorSalario); // Corrigido para ValorSalario com 'V' maiúsculo

    // calcula e imprime a saida (com 2 casa decimais)
    const saida = ValorSalario - valorImposto + valorBeneficios; // Corrigido para ValorSalario com 'V' maiúsculo
    console.log(saida.toFixed(2)); // Usamos console.log() em vez de print()

    // Não se esqueça de fechar a interface de leitura
    rl.close();
});


// funcao util para o calculo do imposto (baseado nas aliquotas)
function calcularImposto(Salario) { // Parâmetro 'Salario' com 'S' maiúsculo
    let aliquota;
    // Corrigi aqui também as variáveis para 'Salario' com 'S' maiúsculo para consistência
    if (Salario >= 0 && Salario <= 1100) {
        aliquota = 0.05;
    } else if (Salario >= 1100.01 && Salario <= 2500) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }

    return aliquota * Salario; // Corrigido para Salario com 'S' maiúsculo
}

*/
