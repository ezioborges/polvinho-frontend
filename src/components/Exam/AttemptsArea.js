import { attemptsArr } from "../../data/attemptsArr.js";
import newElement from "../../utils/newElement.js";

const AttemptsArea = () => {
    const attemptsContent = newElement('ul')
    attemptsContent.classList.add('attempts-list')
    
    attemptsArr.forEach(({ id, score, response }) => {
        const attemptItem = newElement('li')
        attemptItem.classList.add('attempt-item')
        
        const attemptId = newElement('div')
        attemptId.classList.add('attempt-area-item')
        attemptId.classList.add('textMd')
        attemptId.style.color = 'var(--stone-700)'
        attemptId.innerHTML = `<span>${id}º Tentativa: </span>`
        
        const attemptScore = newElement('div')
        attemptScore.classList.add('attempt-area-item')
        attemptScore.classList.add('textMdBold')
        attemptScore.style.color = 'var(--stone-700)'
        attemptScore.innerHTML = `<span>${score}/10</span>`
        
        const attemptResponse = newElement('div')
        attemptResponse.classList.add('attempt-area-item')
        attemptResponse.classList.add('textMd')
        attemptResponse.style.color = 'var(--indigo-700)'

        const linkResults = newElement('a')
        linkResults.innerHTML = `<a>${response}</a>`
        linkResults.href = `/results`

        attemptResponse.appendChild(linkResults)

        attemptItem.appendChild(attemptId)
        attemptItem.appendChild(attemptScore)
        attemptItem.appendChild(attemptResponse)

        attemptsContent.appendChild(attemptItem)
    })

    return attemptsContent
}

export default AttemptsArea;