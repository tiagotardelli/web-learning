/*
// document deixa você pegar qualquer elemento do html
document.getElementById("cor-texto")
document.getElementsByClassName("fundo-verde")
document.getElementsByTagName("p")

// traz um único valor, porém é o primeiro que ele encontrar
document.querySelector("h1") 
document.querySelector("#cor-texto") //pegando do css 

// traz vários valores em forma de lista
document.querySelectorAll("h1") 
*/

/*
// é possível criar elementos html a parir do JavaScript
let section = document.getElementById("cor-texto")
let p = document.createElement("p")
p.innerText = "Teste de JavaScript"
section.appendChild(p)
section.appendChild(p)
section.appendChild(p)
*/
//######################################################################
//div -> class linha
//div -> coluna especificar classe
//span
//div linha -> país + img+span
const arrayPaises = [
    {
        country: "Estados Unidos",
        flag: "us",
        flag_url: "https://www.countryflags.io/be/flat/24.png",
        id: 1,
        medal_bronze: 29,
        medal_gold: 46,
        medal_silver: 29
    },
    {
        country: "China",
        flag: "cn",
        flag_url: "https://www.countryflags.io/CN/shiny/64.png",
        id: 1,
        medal_bronze: 38,
        medal_gold: 27,
        medal_silver: 23
    }
]


let quadroMedalhas = document.querySelector(".quadro-medalhas")

function criarTemplateLinha(position, country, flag_url, medal_gold, medal_silver,medal_bronze) {
   
    let sum_medals = (medal_gold + medal_silver + medal_silver)
   
    // Criando linha do quadro
    let linha = document.createElement("div")
    // Adicionando classe para a div linha
    linha.classList.add("linha")

    // Coluna Rank
    let coluna_rank = criaColuna_rank(`${position}º`)
    let coluna_country = criaColuna_country(country, flag_url)
    let coluna_gold = criaMedal_gold(medal_gold)
    let coluna_silver = criaMedal_silver(medal_silver)
    let coluna_bronze = criaMedal_bronze(medal_bronze)
    let coluna_total = criaMedal_total(sum_medals)

    linha.appendChild(coluna_rank)
    linha.appendChild(coluna_country)
    linha.appendChild(coluna_gold)
    linha.appendChild(coluna_silver)
    linha.appendChild(coluna_bronze)
    linha.appendChild(coluna_total)

    quadroMedalhas.appendChild(linha)
    console.log(linha)
}
    
// Coluna rank
function criaColuna_rank(rank){

    // 1 Coluna - Rank
    let coluna_rank = document.createElement("div")
    coluna_rank.classList.add("coluna", "coluna-rank")
    
    // Criando span titulo Rank
    let coluna_rank_titulo = document.createElement("span")
    coluna_rank_titulo.innerText = rank
    coluna_rank.appendChild(coluna_rank_titulo)

    return coluna_rank
}

// Coluna Country
function criaColuna_country(country, url_image){
    
    // 1 Coluna - Country
    let coluna_country = document.createElement("div")
    coluna_country.classList.add("coluna", "country")

    // Criando span titulo country
    let coluna_country_titulo = document.createElement("span")
    coluna_country_titulo.innerText = country
    
    // Criando imagem country
    let coluna_country_imagem = document.createElement("img")
    coluna_country_imagem.src = url_image
    coluna_country_imagem.alt = country
    coluna_country.appendChild(coluna_country_imagem)

    coluna_country.appendChild(coluna_country_titulo)

    return coluna_country

}

// Coluna Medal Gold
function criaMedal_gold(gold){

    // 1 Coluna - Gold
    let coluna_gold = document.createElement("div")
    coluna_gold.classList.add("coluna", "medal_gold")
    
    // Criando span titulo Gold
    let coluna_gold_titulo = document.createElement("span")
    coluna_gold_titulo.innerText = gold
    coluna_gold.appendChild(coluna_gold_titulo)

    return coluna_gold
}

// Coluna Medal Silver
function criaMedal_silver(silver){

    // 1 Coluna - silver
    let coluna_silver = document.createElement("div")
    coluna_silver.classList.add("coluna", "medal_silver")
    
    // Criando span titulo silver
    let coluna_silver_titulo = document.createElement("span")
    coluna_silver_titulo.innerText = silver
    coluna_silver.appendChild(coluna_silver_titulo)

    return coluna_silver
}

// Coluna Medal Bronze
function criaMedal_bronze(bronze){

    // 1 Coluna - Rank
    let coluna_bronze = document.createElement("div")
    coluna_bronze.classList.add("coluna", "medal_bronze")
    
    // Criando span titulo Rank
    let coluna_bronze_titulo = document.createElement("span")
    coluna_bronze_titulo.innerText = bronze
    coluna_bronze.appendChild(coluna_bronze_titulo)

    return coluna_bronze
}

// Coluna Medal Total
function criaMedal_total(total){

    // 1 Coluna - Total
    let coluna_total = document.createElement("div")
    coluna_total.classList.add("coluna", "total")
    
    // Criando span titulo Total
    let coluna_total_titulo = document.createElement("total")
    coluna_total_titulo.innerText = total
    coluna_total.appendChild(coluna_total_titulo)

    return coluna_total
}



function tratarDadosMedalhas(array){

    let newArrayPaises = array.sort((a,b) => b.medal_gold - a.medal_gold)

    console.log(newArrayPaises)
    for(let i = 0 ; i<newArrayPaises.length; i++){
       criarTemplateLinha(
        i+1,
        newArrayPaises[i].country,
        newArrayPaises[i].flag_url,
        newArrayPaises[i].medal_gold,
        newArrayPaises[i].medal_silver,
        newArrayPaises[i].medal_bronze
        )    
    }

}

function somarTotal(pais){
    return  pais
}



tratarDadosMedalhas(arrayPaises)





