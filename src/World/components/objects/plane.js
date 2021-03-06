import {
  PlaneBufferGeometry,
  MathUtils,
  MeshStandardMaterial,
  Mesh,
  TextureLoader
} from 'three'

function createPlane (
  props
) {
  const loader = new TextureLoader()
  const height = loader.load('textures/height.png')
  const alpha = loader.load('textures/alpha.png')

  const geometry = new PlaneBufferGeometry(50, 50, 64, 64)

  const material = new MeshStandardMaterial({
    color: props.color,
    flatShading: props.flatShading,
    displacementMap: height,
    displacementScale: 2.5,
    wireframe: props.wire,
    wireframeLinewidth: 2,
    transparent: props.transparent,
    alphaMap: alpha
  })

  console.log(material)

  const plane = new Mesh(geometry, material)
  plane.position.set(0, -3, 0)
  plane.rotation.x = MathUtils.degToRad(-90)
  plane.position.y = 0 + props.yOffset

  plane.geometry.attributes.position.originalPosition =
    plane.geometry.attributes.position.array

  const { array } = plane.geometry.attributes.position
  for (let i = 0; i < array.length; i++) {
    props.randVertexArr.push(Math.random())
  }

  plane.geometry.attributes.position.randomValues = props.randVertexArr

  let frame = 0
  plane.tick = (delta) => {
    frame += 0.01
    // increase the plane's rotation each frame
    // plane.rotation.z += MathUtils.degToRad(2) * delta;
    const { array, originalPosition, randomValues } =
      plane.geometry.attributes.position
    for (let i = 0; i < array.length; i += 3) {
      // array[i] =
      //   originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.0025;
      // array[i + 1] =
      //   originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.0025;
      array[i + 2] =
        originalPosition[i + 2] + Math.cos(frame + (randomValues[i + 2])) * 0.002
    }
    plane.geometry.attributes.position.needsUpdate = true
  }

  return plane
}

export { createPlane }
