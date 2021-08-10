// usar o console.log() para exibir os resultados
/*
console.log(11)
console.log(12)
*/
//##########################################################################
// Criando variáveis 
/*
var = declara uma variável global (todo código acessa)
let = declara uma variável local (respeita o escopo criado)
const = declara uma variável local constante (não consigo reatribuir valor)
*/
/*
var numero = 10;
console.log(numero)

let segundoNumero = 20;
console.log(segundoNumero)

const terceiroNumero = 30;
console.log(terceiroNumero)
terceiroNumero = 40  // gera erro
*/
//#########################################################################
/* var deixar usar a mesma variável e atribui o novo
 valor sem problema */
/*
var primeiroNumero = 10;
console.log(primeiroNumero)

var primeiroNumero = 20;
console.log(primeiroNumero) */
//#########################################################################
/* let não deixa criar variáveis com o mesmo nome no mesmo contexto*/
// esse código abaixo da erro
/*
let primeiroNumero = 10
console.log(primeiroNumero)

let primeiroNumero = 20
console.log(primeiroNumero)
*/
//#########################################################################
/* let com escopos separados aceita variáveis com
o mesmo nome */
// esse código aceita
/*
let primeiroNumero = 10;
console.log(primeiroNumero)

{
    let primeiroNumero = 20;
    console.log(primeiroNumero)
}
*/
//#########################################################################
/*
let numero = 10; // variável numérica
console.log(numero)

let nome = "Tiago"; // variável texto
console.log(nome)

let booleano = true; // variável boolean (True/False)
console.log(booleano)

let listaItens = [1, 2, 3, 4, 5]; // variável array com números
console.log(listaItens)

let listaAlunos = ["Tiago", "Marcos", "Walison"]; //variável array com strings
console.log(listaAlunos)

let listaMista = ["Tiago", 9, true, "h"]; //variável array mista
console.log(listaMista)
*/
//##############################################################################
//soma: +
//subtração: -
//divisão: /
//mutiplicação: *

let soma = 2 + 4
console.log(soma)

let subtracao = 2 - 4
console.log(subtracao)

let divisao = 4 / 2
console.log(divisao)

let multiplicacao = 2 * 4
console.log(multiplicacao)




