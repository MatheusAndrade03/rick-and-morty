// Variaveis
const charConteiner= document.querySelector(".chars-container");

const API="https://rickandmortyapi.com/api";




// Functions

async function getCharacters({name, species, gender, status, pahe=1}){



}


fetch("https://rickandmortyapi.com/api/character/2")
.then((res)=>res.json())
.then((data)=> console.log(data.name))