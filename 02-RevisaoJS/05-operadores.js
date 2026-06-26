/*
Operadores relacionais (retorna verdadeiro ou falso)

== (igual a)
!= (diferente)
> (maior que)
< (menor que)
>= (maior ou igual)
<= (menor ou igual)

*/

console.log("========================\n OPERADORES RELACIONAIS \n========================")

let resultado = 10

let igual = 10 == resultado
console.log("Dez é igual a dez?", igual)

let diferente = 9 != resultado
console.log("Nove é diferente de dez?", diferente)

let maior = resultado > 8
console.log("Dez é maior que oito?", maior)

let menor = resultado < 11
console.log("Dez é menor que onze?", menor)

let maiorOuIgual = resultado >= 10
console.log("Dez é maior ou igual a dez?", maiorOuIgual)

let menorOuIgual = resultado <= 10
console.log("Dez é menor ou igual a dez?", menorOuIgual)

/* Operadores Lógicos (testa condições com true ou false) 

&& (e)
|| (ou)

*/
console.log("========================\n OPERADORES LÓGICOS \n========================")

let ambosIguais = 2 == 2 && 3 == 3
console.log("Dois é igual a dois e três é igual a três?", ambosIguais)

let umOuOutro = 2 == 2 || 3 == 4
console.log("Dois é igual a dois ou três é igual a quatro?", umOuOutro)

