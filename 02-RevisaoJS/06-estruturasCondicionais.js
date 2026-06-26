/*
Estruturas Condicionais (if e else)
    - Verificar idade para entrar num site
    - Verificar se a compra é maior do que o mínimo
    - Verificar se tem acesso a recursos pagos
*/

console.log("========================\n Maior Idade \n========================")


let idade = 18;

if (idade < 18) {
  console.log("Você é menor de idade");
} 
else {
  console.log("Você é maior de idade");
}

console.log("========================\n Década \n========================")


let ano = 2020

if (ano >= 2020 && ano <= 2026)
{
    console.log("Você está na segunda década do século 21")
}

console.log("========================\n Desconto \n========================")


let idade2= 30
let compras = 300

if(idade2 >= 40 || compras >= 400){
    console.log("Desconto de 20%")
}
else{
    console.log("Você não possui idade ou preço de compra suficiente para receber o desconto")
}

console.log("========================\n Opções Banco \n========================")


let opcao = 1
if(opcao == 1)
{
    console.log("Saldo da conta")
}
else if(opcao == 2)
{
    console.log("Cartão de Crédito")
}
else{
    console.log("selecione uma das opções existentes")
}