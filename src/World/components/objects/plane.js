import {
  PlaneBufferGeometry,
  MathUtils,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
} from "three";

function createPlane(color = "white", yOffset = 0, wire = false, transparent = false) {
  const loader = new TextureLoader();
  const heightUrl =
    "http://localhost:8000/assets/textures/height.png";
    // ALTERNATE HEIGHTMAP -> "https://upload.wikimedia.org/wikipedia/commons/8/8b/PerlinNoise2d.png";
    const alphaUrl =
    "http://localhost:8000/assets/textures/alpha.png"
    let height = loader.load(heightUrl);
  let alpha = loader.load(alphaUrl);


  const geometry = new PlaneBufferGeometry(50, 50, 64, 64);

  let material = new MeshStandardMaterial({
    color,
    //map: texture,
    //flatShading: true,
    displacementMap: height,
    displacementScale: 3,
    wireframe: wire,
    wireframeLinewidth: 2,
    transparent,
    alphaMap: alpha
  });

  const plane = new Mesh(geometry, material);
  plane.position.set(0,-3,0)
  plane.rotation.x = MathUtils.degToRad(-90);
  plane.position.y = 0 + yOffset;

  const radiansPerSecond = MathUtils.degToRad(0.2);
  plane.tick = (delta) => {
    // increase the plane's rotation each frame
    //plane.rotation.z += radiansPerSecond * delta;
  };

  return plane;
}

export { createPlane };
