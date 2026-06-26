// O que é uma variável?
    /* Área de memória associada a um nome, 
    que pode armazenar valores de um determinado tipo */

// Como definir variáveis em js?

let nome = "Jamilton " // variável mutável
const PI = 3.14 // variável imutável

console.log(nome)
console.log(PI)


/*

Existe também a possibilidade de usar o modelo de declaração

var altura = 10

"let", a que usamos anteriomente ao criar nome,
é a forma mais recente de declarar uma variável e usaremos ela.

*/

/*
REGRAS PARA CRIAR VARIÁVEIS
1) Não podem ser iniciadas por números, apenas letras ou _
2) Nunca utilizar caracteres especiais (ç, á, é ...)
3) Utilizar uma das duas convenções para noemar variáveis:
    camelCase = camelCaseComecaComAPrimeiraLetraMinusculaEAsOutrasPrimeirasetrasMaiusculas
    snake_case = snake_case_usa_somente_palavras_minusculas_separadas_por_under_line
*/

let altura = 1.70
let peso = 70

let imc = peso / (altura * altura)

console.log("IMC de altura: %d e peso: %d é igual a %d ", altura, peso, imc)