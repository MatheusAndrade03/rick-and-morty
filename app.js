// Variaveis

// vinculando a variavel no conteiner character
const charConteiner= document.querySelector(".chars-container");
// vinculando  o select species
const speciesFilter= document.querySelector("#species")
// vinculando  o select gender
const genderFilter = document.querySelector("#gender")
// vinculando  o select status
const statusFilter = document.querySelector("#status")
// vinculando o input de pesquisa
const searchFilter = document.querySelector("#search")

const loadMore = document.querySelector("#load-more")


const API="https://rickandmortyapi.com/api";
// objeto com o filtro dos atributos 
const defaultFilters={
    name:'',
    species:'',
    gender: '',
    status:'',
    page:1
}


// Functions

// Pegar todos os personagens, acessando a API
async function getCharacters({name, species, gender, status, page=1}){
    const response = await fetch(`${API}/character?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`)
    
    const character = await response.json()

    return character.results;
}



// Renderizar os personagens na tela
async function render({characters}){

    characters.forEach((character) => {

        return charConteiner.innerHTML+= `
        
        <div class="char">
            <img src="${character.image}" alt="">
            <div class="char-info">
              <h3>${character.name}</h3>
              <span>${character.species}</span>
              <span>${character.status}</span>
            </div>
          </div>
        `  
    });


}




// função pra inicializar




function addListeners(){


// selecionar
    speciesFilter.addEventListener('change', async (event)=>{

        defaultFilters.species = event.target.value
        charConteiner.innerHTML=''

        const characters = await getCharacters(defaultFilters)
        render({characters})
})

genderFilter.addEventListener('change', async (event)=>{

        defaultFilters.gender = event.target.value
        charConteiner.innerHTML=""
        const characters = await getCharacters(defaultFilters)
        render({characters})

})

statusFilter.addEventListener('change', async (event)=>{
    defaultFilters.status = event.target.value
    charConteiner.innerHTML=""
    const characters = await getCharacters(defaultFilters)
    render({characters})



})

searchFilter.addEventListener('keyup', async (event)=>{
    defaultFilters.name =  event.target.value

    charConteiner.innerHTML=''
    const characters = await getCharacters(defaultFilters)
    render({characters})
})


loadMore.addEventListener('click', async (event)=>{

    defaultFilters.page += 1 
    const characters = await getCharacters(defaultFilters)
    render({characters})



})


}


async function main(){
    const characters = await getCharacters(defaultFilters)

    addListeners()
    render({characters})


}


main();
