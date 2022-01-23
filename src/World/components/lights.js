import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  DirectionalLightHelper,
} from "three";

function createLights(color) {
  const light = new DirectionalLight(color, 4);
  const lightHelper = new DirectionalLightHelper(light, 0);
  //light.position.set(-5, 4, 3)
  light.position.set(0, 10, 2);

  light.tick = (delta) => {
   
  };

  return { light, lightHelper };
}

export { createLights };
