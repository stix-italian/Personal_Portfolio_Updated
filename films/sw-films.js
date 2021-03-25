import { films } from '../data/films.js'
import { getLastNumber } from '../utils/index.js'


let filmList = document.querySelector('#filmList')


for (let i = 0; i < films.length; i++) {

    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())
    let posterFig = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement('figcaption')
    let figCaption2 = document.createElement('figcaption')

    figCaption.textContent = foundFilm.title
    figCaption2.textContent = "Director: "+foundFilm.director
    posterFig.appendChild(figImg)
    posterFig.appendChild(figCaption)
    posterFig.appendChild(figCaption2)
    


    filmList.appendChild(posterFig)
}
