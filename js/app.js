// VARIABLES --------------------------
let count = 0

// CACHED ELEMENTS ---------------------
const likeButtonElement = document.querySelector('#like-button')
const dislikeButtonElement = document.querySelector('#dislike-button')
const h3El = document.querySelector('h3')
const commentButtonElement = document.querySelector('#comment-button')
const commentListElement = document.querySelector('ul')
const inputElement = document.querySelector('input')


// FUNCTIONS ---------------------------
const handleAddComment = () => {
    if (inputElement.value) {
        const commentElement = document.createElement('li')
        commentElement.textContent = inputElement.value
        commentListElement.appendChild(commentElement)
        inputElement.value = ''
    } 
}

// const handleLike = () => {
//     count++
//     h3El.textContent = count
//     likeButtonElement.textContent = `${count} likes.  Like this post!`
//     dislikeButtonElement.textContent = `${count} likes.  Dislike this post!`
// }

// const handleDislike = () => {
//     count--
//     if (count < 0) {
//         count = 0
//     }
//     h3El.textContent = count
//     dislikeButtonElement.textContent = `${count} likes.  Dislike this post!`
//     likeButtonElement.textContent = `${count} likes.  Like this post!`
// }

// let myObjt = {
//     name: 'a',
//     val: 'b'
// }

// 'a' === myObjt

const handleReaction = (event) => {
    // console.dir(event.target.id)
    // console.log(likeButtonElement)
    // console.log(likeButtonElement.id)
    if (event.target.id === 'like-button') {
        count++
    } else {
        count--
        // guard statement
        if (count < 0) {
            count = 0
        }
    }
    likeButtonElement.textContent = `${count} likes.  Like this post!`
    h3El.textContent = count
    dislikeButtonElement.textContent = `${count} likes.  Dislike this post!`
}

// EVENT LISTENERS ---------------------
likeButtonElement.addEventListener('click', handleReaction)
dislikeButtonElement.addEventListener('click', handleReaction)


commentButtonElement.addEventListener('click', handleAddComment)

