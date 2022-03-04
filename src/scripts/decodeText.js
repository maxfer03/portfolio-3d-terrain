// let singleContainer = document.querySelector('.singleLetter")

const titles = [
  'Fullstack Web developer',
  'Musician',
  'Blockchain enthusiast',
  'Comic Reader',
  'History buff',
  '3D lover',
  'Scyfy fan'
]

let currentIndex = 0

const possible = '0123456789!@#$%&(アイウエオカキクコ'
function randomLetter () {
  const lettersArray = possible.split('')
  const letter = lettersArray[Math.floor(Math.random() * lettersArray.length)]

  return letter
}

function changeIndex () {
  if (currentIndex === titles.length - 1) {
    currentIndex = 0
  } else {
    currentIndex++
  }
}

function randomString (len) {
  let string = ''
  for (let i = 0; i < len; i++) {
    string += randomLetter()
  }
  return string
}

function getTitle (len) {
  let string = ''
  for (let i = 0; i < len; i++) {
    const char = titles[currentIndex][i]
    char ? string += titles[currentIndex][i] : string += ''
  }
  return string
}

function adjustLetters (container, title) {
  // let currentPosition = 0
  changeIndex()
  title = titles[currentIndex]
  for (let i = 0, len = title.length; i <= len; i++) {
    constructTitle(title, i, container)
  }
}

function constructTitle (title, index, container) {
  setTimeout(function () {
    const rand = randomString(title.length - index)
    const merged = getTitle(index) + rand
    container.innerHTML = merged
  }, index * 50)
}

export {
  adjustLetters
}
