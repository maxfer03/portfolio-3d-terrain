import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MathUtils } from "three";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  //enable controls?
  controls.enabled = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.2;

  // control limits
  controls.minPolarAngle = MathUtils.degToRad(40); // default
  controls.maxPolarAngle = MathUtils.degToRad(65);

  //smooth camera:
  // remember to add to loop updatables to work
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.enablePan = false;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
