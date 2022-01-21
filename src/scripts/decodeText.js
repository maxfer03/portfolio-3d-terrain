var singleContainer = document.querySelector(".singleLetter");

var titles = [
  "Web Developer",
  "Fullstack",
  "Musician",
  "Blockchain enthusiast",
  "3d Lover",
  "Scyfy fan",
];

let currentIndex = 0;

var possible = "0123456789!@#$%^&*(アイウエオカキクコ";

function randomLetter() {
  var lettersArray = possible.split("");
  var letter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
  
  console.log(letter)

  return letter
}

function changeIndex() {
  if (currentIndex === titles.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
}

function randomString(len) {
  var string = "";
  for (var i = 0; i < len; i++) {
    string += randomLetter();
  }
  return string;
}

function getTitle(len) {
  var string = "";
  for (var i = 0; i < len; i++) {
    string += titles[currentIndex][i];
  }
  return string;
}

function adjustLetters(container, title) {
  var currentPosition = 0;
  changeIndex();
  var title = titles[currentIndex];
  for (var i = 0, len = title.length; i <= len; i++) {
    constructTitle(title, i, container);
  }
}

function constructTitle(title, index, container) {
  setTimeout(function () {
    var rand = randomString(title.length - index);
    var merged = getTitle(index) + rand;
    container.innerHTML = merged;
  }, index * 50);
}

// Adjust character length
function adjustLength() {
  var title = titles[currentIndex];
  var prevTitleLength = titles[currentIndex].length;
  changeIndex();
  for (var i = prevTitleLength; i < titles[currentIndex].length; i++) {
    setTimeout(function () {
      title += randomLetter();
      var titlePlaceholder = randomString(title.length);
      container.innerHTML = titlePlaceholder;
    }, (i - prevTitleLength) * 50);
  }
}

export {
  randomLetter,
  changeIndex,
  randomString,
  getTitle,
  adjustLetters,
  constructTitle,
  adjustLength,
};
