// enquanto estiver atendendo a condição ele continua
/*
let contar = 0 
while(contar < 10){

    console.log(contar)

    contar+=1

}
*/

// diferente do while ele executa e depois valida
/*
do{
    console.log("Diga Oi!!")
}while(contar < 10)
*/

//For
//for(variavelControle; condicaoParada; incremento)
/*
for(let i = 0;i <10;  i+=1){

    console.log("oi")

}
*/
let nomes = ["Marcos", "Victor", "Walison", "Tiago"];

for(i = 0; i <= nomes.length; i++){
    console.log(nomes[i])
}