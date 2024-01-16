import {
    PlaneGeometry,
    MeshStandardMaterial,
    Mesh,
    TextureLoader,
   } from "three";
   
    
   export default function createTerrain(props) {
    const loader = new TextureLoader();
    const height = loader.load("textures/height.png");

    
    //                                        w    h 
    const geometry = new PlaneGeometry (150, 150, 64, 64);
    
    const material = new MeshStandardMaterial({
      color: props.color,
      flatShading: true,
      displacementMap: height,
      displacementScale: 5,
    });
    
    const plane = new Mesh(geometry, material);
    plane.position.set(0, 0, 0);
    plane.rotation.x -= Math.PI * 0.35;
    
    let frame = 0;
    plane.tick = (delta) => {
    
    };
    
    return plane;
   }

   export { createTerrain };