
const Super_Token='965406261251332'
const BASE_URL=`https://superheroapi.com/api.php/${Super_Token}`

const getSuperHero= (id, name)=>{
    fetch(`${BASE_URL}/${id}`)
  .then(response=> response.json())
    .then(json=>{console.log(json)
        const superHero=json
      showHeroInfo(superHero)
       
        //this will show several images adding up without + only 1 imae wi
//  heroImagediv.innerHTML = `<img src="${json.image.url}" height=200 width=200/>` 
                })
}

const statToEmoji={
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: "✌",
    power: "📊",
    combat: "⚔"

}

//object.keys(para)..it take obj and convert it into array
const showHeroInfo=(character)=>{
    const name=`<h2>${character.name}</h2>`
    const img= `<img src="${character.image.url}" height=200 width=200/>`
  const stats=  Object.keys(character.powerstats).map(stat =>{
       return `<p> ${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')
    heroImagediv.innerHTML = `${name} ${img} ${stats}`
 
}

const getSearchedSuperHero=(name)=>{
console.log(searchinput.value)

    fetch(`${BASE_URL}/search/${name}`)
    .then(response=> response.json())
    .then(json=>{
        const hero=json.results[0]
              showHeroInfo(hero)

// //  heroImagediv.innerHTML = `<img src="${hero.image.url}" height=200 width=200/>` 
//   renderName.innerText=searchinput.value
                })
}



const getRandomImage=()=>{
  const getNoOfHeroes=731
  return Math.floor(Math.random() * getNoOfHeroes) +  1
}
const newheroBtn=document.getElementById('NewHeroBtn')

const heroImagediv=document.getElementById('heroImage')

const searchbutton=document.getElementById('Searchbtn')

const searchinput=document.getElementById('searchInput')

const renderName=document.getElementById('RenderName')

newheroBtn.onclick=()=> getSuperHero(getRandomImage())
searchbutton.onclick=()=> getSearchedSuperHero(searchinput.value)