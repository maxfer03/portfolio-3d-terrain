import {
    TorusBufferGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshStandardMaterial,
    MathUtils,
  } from "three";
  
  
  function createTorus(color = "white", size) {
    const radiansPerSecond = MathUtils.degToRad(10);
  
    const geometry = new TorusBufferGeometry(size[0], size[1], size[2], size[3]);
  
    let material = new MeshBasicMaterial({ color, wireframe: true });
  
    

    const torus = new Mesh(geometry, material);
  
  
    torus.rotation.x = MathUtils.degToRad(110);
    torus.rotation.y = MathUtils.degToRad(45);

    torus.position.set(0, 3, 0);
    

  
  
  
    torus.tick = (delta) => {
      // increase the torus's rotation each frame
      torus.rotation.z += radiansPerSecond * delta
      torus.rotation.y += Math.tan(radiansPerSecond * delta)

  
    };
  
    return torus;
  }
  
  export { createTorus };