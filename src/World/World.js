import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createCube } from "./components/objects/cube.js";
import { createScene } from "./components/scene.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { createSphere } from "./components/objects/sphere.js";
import { createTorus } from "./components/objects/torus.js";
import { createPlane } from "./components/objects/plane";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    let ambientColor = "#ffb000";

    let randomVals = [];

    for (let i = 0; i < 12675; i++) {
      randomVals.push(Math.random() -0.5);
    }

    const planeWire = createPlane({
      color: ambientColor, 
      randVertexArr: randomVals,
      yOffset: 0, 
      wire: true, 
      transparent: true,
    });
    const planeSolid = createPlane(
      {color: '#121212', 
      randVertexArr: randomVals,
      yOffset: -0.05,
      flatShading: true,
      transparent: true,
      
    });

    const { light, lightHelper } = createLights(ambientColor);

    loop.updatables.push(controls);
    loop.updatables.push(planeWire);
    loop.updatables.push(planeSolid);
    loop.updatables.push(light);


    scene.add(light, planeSolid, planeWire );

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
