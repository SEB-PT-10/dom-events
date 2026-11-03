// VARIABLES --------------------------
let count = 0

// CACHED ELEMENTS ---------------------
const likeButtonElement = document.querySelector('#like-button')
const h3El = document.querySelector('h3')
const commentButtonElement = document.querySelector('#comment-button')
const commentListElement = document.querySelector('ul')
const inputElement = document.querySelector('input')

// EVENT LISTENERS ---------------------
likeButtonElement.addEventListener('click', () => {
    console.log('you clicked me!')
    count++
    console.log(count)
    h3El.textContent = count
})

commentButtonElement.addEventListener('click', () => {
    const commentElement = document.createElement('li')
    commentElement.textContent = inputElement.value
    commentListElement.appendChild(commentElement)
    console.log(inputElement.value)
})