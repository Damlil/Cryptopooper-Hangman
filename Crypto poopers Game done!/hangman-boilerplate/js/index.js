
//  document.querySelector('figure').classList.add('scaffold')
//  document.querySelector('figure').classList.add('head')
//  document.querySelector('figure').classList.add('body')
//  document.querySelector('figure').classList.add('arms')
//  document.querySelector('figure').classList.add('legs')

/**
För att toggla SVG:en
document.querySelector('figure').classList.add('scaffold')
document.querySelector('figure').classList.add('head')
document.querySelector('figure').classList.add('body')
document.querySelector('figure').classList.add('arms')
document.querySelector('figure').classList.add('legs')
*/
const wrongLetters = document.querySelector('h3');
const gameOver = document.querySelector('h4');
const span = document.querySelector('span')
const startGame = document.querySelector('.startBtn')
const resetBtn = document.querySelector('.resetGame')
const resetBtn1 = document.querySelector('.resetGame1')
const displayCountry = document.querySelector('h1')
const gameOverSlide = document.querySelector('header')
const gameWonSlide = document.querySelector('article')
let unknownLetters = [];
let randomCountry = []
let country = []
let wrong = ''
let sameLetter = []
let numberTry = 0
let trueFalse = false
let numberWrong = 0
let endGame = false
let generateCountry = ''
let justSmalLetters = ('[a-z]')

let countries = [
  'sweden',
  'japan',
  'norway',
  'denmark',
  'croatia',
  'italy',
  'kazakhstan',
  'zimbabwe',
  'tchad',
  'india'
]
startGame.addEventListener('click', () => {
  if (country != 0) {
    return
  }

  let random = Math.floor(Math.random() * countries.length)

  generateCountry = countries[random];
  for (i = 0; i < generateCountry.length; i++) {
    country.push(generateCountry[i]);
    unknownLetters.push('-')
    displayCountry.innerHTML = unknownLetters.join('')
    startGame.style.opacity = 0


  }

  contains();



})

resetBtn.addEventListener('click', () => {
  console.log('yo');
  location.reload()

}
)

resetBtn1.addEventListener('click', () => {
  console.log('yo');
  location.reload()

}
)



function contains() {

  document.addEventListener('keyup', (e) => {
    if (endGame === true) {
      return
    } if (!e.key.match(justSmalLetters)){
      return;
    } else if (sameLetter.includes(e.code) === true) {
      alert('You have already used that letter')
    }
    else {
      
      for (let i = 0; i < country.length; i++) {
        if (country[i] === e.key) {
          unknownLetters.splice(i, 1, country[i])
          trueFalse = true
          displayCountry.innerHTML = unknownLetters.join('  ');
        }
      }


      if (trueFalse === false) {
        wrong += e.key
        wrongLetters.innerText += e.key;

        numberWrong += 1
        span.innerText = numberWrong;

        if (numberWrong === 1) {
          document.querySelector('figure').classList.add('scaffold')
        }
        if (numberWrong === 2) { document.querySelector('figure').classList.add('head') }
        if (numberWrong === 3) { document.querySelector('figure').classList.add('body') }
        if (numberWrong === 4) { document.querySelector('figure').classList.add('arms') }
        if (numberWrong === 5) { document.querySelector('figure').classList.add('legs') }



        if (numberWrong >= 5) {

          displayCountry.innerHTML = 'You lost!'
          gameOver.innerHTML = 'The country was' + " : " + generateCountry
          endGame = true
          setTimeout(() => {
            gameOverSlide.style.opacity = 1
            gameOverSlide.style.display = 'flex';
          }, 2500);
        }
      }



      numberTry += 1
      console.log(unknownLetters)

      if (unknownLetters.includes('-') === false) {
        displayCountry.innerHTML = 'You Won!'
        endGame = true
        setTimeout(() => {
          gameWonSlide.style.opacity = 1
          gameWonSlide.style.display = 'flex';
        }, 2500);
      }
      sameLetter.push(e.code)
      trueFalse = false

    }
  })
}
