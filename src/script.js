import { World } from "./World/World.js";
import "./styles/style.css";
import { adjustLetters } from "./scripts/decodeText.js";
import gsap from "gsap";
import { disableBG, enableBG } from "./scripts/anims/toggleBG.js";

// Starting threejs

function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // // 2. Render the scene
  // world.render();

  // produce a single frame (render on demand)
  // world.render();

  // start the loop (produce a stream of frames)
  world.start();
}







main();

// Misc js effects

const subtitleContainer = document.querySelector(".hero-subtitle-text");
const toggle = document.querySelector(".toggle input");
const logoContainer = document.querySelector("#logo-img");
const js = document.querySelector("#js");
const py = document.querySelector("#py");
const sol = document.querySelector("#sol");
const react = document.querySelector("#react");
const vue = document.querySelector("#vue");
const three = document.querySelector("#three");

const node = document.querySelector("#node");
const xprs = document.querySelector("#xprs");
const sqlz = document.querySelector("#sqlz");
const mongo = document.querySelector("#mongo");
const psql = document.querySelector("#psql");

let bg = window.localStorage.getItem('bg')
if(bg === null){
  window.localStorage.setItem('bg', true)
}
if(bg === 'false'){
  toggle.checked = false
  disableBG()
} else if(bg === 'true'){
  toggle.checked = true
}







const imgFadeIn = (imgContainer, name) => {
  imgContainer.src=`/logos/${name}`
  gsap.to('.tech-data-img', {
    opacity: 1
  })
}

const imgFadeOut = () => {
  gsap.to('.tech-data-img', {
    opacity: 0
  })
}

subtitleContainer.onclick = () => {
  adjustLetters(subtitleContainer);
};

toggle.addEventListener("click", () => {
  toggle.style.pointerEvents = "none";
  toggle.checked ? enableBG() : disableBG();
});



// would be GREAT if someone finds a way to automate this. I can think of something in react/vue, but
// not so sure in vanillaJS

js.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'js.png')
});
js.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

py.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'py.png')
});
py.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

sol.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'sol.svg')
});
sol.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

react.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'react.png')
});
react.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

vue.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'vue.png')
});
vue.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

three.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'three.png')
});
three.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

node.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'node.png')
});
node.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

xprs.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'xprs.png')
});
xprs.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

sqlz.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'sqlz.png')
});
sqlz.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

mongo.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'mongo.png')
});
mongo.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

psql.addEventListener("mouseenter", (e) => {
  imgFadeIn(logoContainer, 'psql.svg')
});
psql.addEventListener("mouseout", (e) => {
  imgFadeOut()
});

