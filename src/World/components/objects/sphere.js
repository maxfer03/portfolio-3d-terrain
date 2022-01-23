import {
  SphereBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MathUtils,
  Vector3
} from "three";


function createSphere(color = "white") {
  const radiansPerSecond = MathUtils.degToRad(10);

  // create a geometry
  const geometry = new SphereBufferGeometry(2, 15, 7);

  // create a default (white) Basic material
  let material = "";

  material = new MeshBasicMaterial({ color, wireframe:true });

  // material = new MeshBasicMaterial({ color, wireframe: true });
  // create a Mesh containing the geometry and material
  const sphere = new Mesh(geometry, material);


  var axis = new Vector3(0,0.5,0)

  //sphere.rotation.z = 0.5;
  sphere.position.set(0, 5, 0);
  


  sphere.tick = (delta) => {
    // increase the sphere's rotation each frame
    //sphere.rotateOnAxis(axis, radiansPerSecond * delta)
    sphere.rotation.y += radiansPerSecond * delta

  };

  return sphere;
}

export { createSphere };
