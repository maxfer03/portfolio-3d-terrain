import {
  PlaneBufferGeometry,
  MathUtils,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
} from "three";

function createPlane(
  color = "white",
  randVertexArr,
  yOffset = 0,
  wire = false,
  transparent = false
) {
  const loader = new TextureLoader();
  const heightUrl = "http://localhost:8000/assets/textures/height.png";
  // ALTERNATE HEIGHTMAP -> "https://upload.wikimedia.org/wikipedia/commons/8/8b/PerlinNoise2d.png";
  const alphaUrl = "http://localhost:8000/assets/textures/alpha.png";
  let height = loader.load(heightUrl);
  let alpha = loader.load(alphaUrl);

  const geometry = new PlaneBufferGeometry(50, 50, 64, 64);

  let material = new MeshStandardMaterial({
    color,
    //map: texture,
    //flatShading: true,
    displacementMap: height,
    displacementScale: 2.5,
    wireframe: wire,
    wireframeLinewidth: 2,
    transparent,
    alphaMap: alpha,
  });

  const plane = new Mesh(geometry, material);
  plane.position.set(0, -3, 0);
  plane.rotation.x = MathUtils.degToRad(-90);
  plane.position.y = 0 + yOffset;

  plane.geometry.attributes.position.originalPosition =
    plane.geometry.attributes.position.array;

  let { array } = plane.geometry.attributes.position;
  for (let i = 0; i < array.length; i++) {
    randVertexArr.push(Math.random());
  }

  plane.geometry.attributes.position.randomValues = randVertexArr;


  let frame = 0;
  plane.tick = (delta) => {
    frame += 0.01;
    // increase the plane's rotation each frame
    //plane.rotation.z += MathUtils.degToRad(2) * delta;
    const { array, originalPosition, randomValues } =
      plane.geometry.attributes.position;
    for (let i = 0; i < array.length; i += 3) {
      // array[i] =
      //   originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.0025;
      // array[i + 1] =
      //   originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.0025;
      array[i + 2] =
        originalPosition[i + 2] + Math.cos(frame + (randomValues[i + 2])) * 0.001;
    }
    plane.geometry.attributes.position.needsUpdate = true;
  };

  return plane;
}

export { createPlane };
