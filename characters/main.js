import { people } from '../data/people.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

const mainElement = document.querySelector('#main')

const mainHeader = document.createElement('header')

document.body.insertBefore(mainHeader, mainElement)

const allButton = document.createElement('button')
allButton.textContent='All Characters'
mainHeader.appendChild(allButton)
allButton.addEventListener('click', ()=> populateDOM(allCharacters))

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)
maleButton.addEventListener('click', () => populateDOM(maleCharacters))

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)
femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

const othersButton = document.createElement('button')
othersButton.textContent = 'Other Characters'
mainHeader.appendChild(othersButton)
othersButton.addEventListener('click', () => populateDOM(otherCharacters))



const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const allCharacters = people.filter(person => person.gender !== '')
const otherCharacters = people.filter(person => {
    if (person.gender === 'n/a' ||
        person.gender === 'hermaphrodite') {
        return person
    }
const allCharacters = people.filter(person => person.gender === 'n/a')
})

function populateDOM(characters) {
    removeChildren(mainElement)
    characters.forEach((person) => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(person.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = person.name
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)

        mainElement.appendChild(charFigure)
    })
}

populateDOM(allCharacters)