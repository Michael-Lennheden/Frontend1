const start = document.querySelector('.start')
const arena = document.querySelector('.arena')
const scoreParagraph = document.querySelector('.score')
const livesParagraph = document.querySelector('.lives')
let score = 0
let lives = 3


start.addEventListener('click', () => {

    const ourDiv = document.createElement('div')
    ourDiv.classList.add('target')
/*
    ourDiv.addEventListener('click', (event) => {
        score++
        scoreParagraph.textContent = score
        ourDiv.remove()
    })
    */
    arena.appendChild(ourDiv)
})


arena.addEventListener('click', (event) =>{
    console.log(event)
    if(event.target.className === 'arena'){
       lives--
        livesParagraph.textContent = 'liv: ' +lives
    }
    else if(event.target.className){
        score++
        scoreParagraph.textContent = 'poäng: ' +score
        event.target.remove()
    }
})

/*
function hejFunction(){
    console.log('Hej')
    requestAnimationFrame(hejFunction)
}

requestAnimationFrame(hejFunction)
 */