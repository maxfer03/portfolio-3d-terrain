import {
  PlaneBufferGeometry,
  MathUtils,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
} from "three";

function createPlane(color = "white", yOffset = 0, wire = false, transparent = false) {
  const loader = new TextureLoader();
  const textureUrl =
    "https://images.unsplash.com/photo-1603077747884-b458237de736?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const heightUrl =
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/PerlinNoise2d.png";
    const alphaUrl =
    "https://cdnb.artstation.com/p/assets/images/images/017/608/583/large/alexander-pham-t-point-of-light.jpg";
  let texture = loader.load(textureUrl);
  let height = loader.load(heightUrl);
  let alpha = loader.load(alphaUrl);


  const geometry = new PlaneBufferGeometry(40, 40, 64, 64);

  let material = new MeshStandardMaterial({
    color,
    //map: texture,
    //flatShading: true,
    displacementMap: height,
    displacementScale: 4,
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
