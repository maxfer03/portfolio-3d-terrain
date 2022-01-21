import { World } from "./World/World.js";
import "./styles/style.css";
import { adjustLetters } from "./scripts/decodeText.js";

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
const toggle = document.querySelector('.toggle input')


subtitleContainer.onclick = () => {
  adjustLetters(subtitleContainer);
};


toggle.addEventListener('click', () => {
    onOff.textContent = toggle.checked ? 'ON' : 'OFF'
})

// main();
