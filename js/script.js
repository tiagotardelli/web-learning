//VARIAVEIS//
//VAR
//LET
//CONST

//var nome     = "Tiago"
let nome1    = "Tiago Tardelli"
const nome3  = "Tiago Tardelli"





//----TIPO DE DADOS----//

//INT
//BOOLEAN
//ARRAY
//OBJETO

let numero  = 10
let numero2  = 1.0
let verdadeiro = true
let falso = false
let nome2    = "Tiago Tardelli"
let  arry  = [1,23,4]

let pessoa = {
  nome: "Tiago"
}












//----OPERADORES BÁSICOS----//
//SOMA (+)
//SUBTRAÇÃO  -
//DIVISÃO /
//MULTIPLICAÇÃO *
//shortcuts (+= E -+)
// %











//----ESTRUTURA CONDICIONAL---//

//operadores de coparação/relacionais:
//- == ou === //exatamente igual
//- > e ≥ //maior e maior ou igual
//- < e ≤ //menor e menor ou igual


//operadores lógicos:
//- E: &&
//- Ou: ||
//- Não/negação: !
//- 1 === 1 && 2 === 2 //retorno esperado: true
//- 1 === 1 || 2 === 3 //retorno esperado: true
//- !(1 === 1) //retorno esperado: false

if(2 == 2 && 2 == 4){
  
}else{
  
}








//----FUNÇÕES---//
//RETURN
//PARÂMETRO

function somar(numero1,numero2){
  return numero1 + numero2
  
}
somar(2,3)

console.log("Está Funcionando")







//----Estrutura de repetição---//
//WHILE
//DO WHILE
//FOR

for(let contador = 0;contador<10;contador++){
  console.log(contador)
}
