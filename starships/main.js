import { starships } from '../data/starships.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

console.log(starships.length)

const nav = document.querySelector('nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.shipView')

function populateNav(starships) {
    starships.forEach((starship) => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', () => populateShipView(starship))
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
    })
}

function populateShipView(shipData) {
    removeChildren(shipView)
    let shipNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipImage.addEventListener('error', (err) => {
        console.log(`Oops! Image doesn't exist.`)
        shipImage.hidden = true
    })
    shipView.appendChild(shipImage)
}

function addStarField(element, numStars) {
    element.style.setProperty('background-color', '#000')
}

addStarField(document.querySelector('body'), 1000)

populateNav(starships)

populateShipView()