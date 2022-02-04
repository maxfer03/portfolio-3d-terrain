var singleContainer = document.querySelector(".singleLetter");

var titles = [
  "Fullstack Web developer",
  "Musician",
  "Blockchain enthusiast",
  "Comic Reader",
  "History buff",
  "3D lover",
  "Scyfy fan",
];

let currentIndex = 0;

var possible = "0123456789!@#$%^&*(アイウエオカキクコ";

function randomLetter() {
  var lettersArray = possible.split("");
  var letter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
  
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
    let char = titles[currentIndex][i]
    char ? 
      string += titles[currentIndex][i] 
      : 
      string += ''
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
