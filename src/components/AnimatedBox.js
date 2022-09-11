import React from "react";
import { MeshNormalMaterial } from "three";

export default function AnimatedBox() {
  return (
    <mesh rotation={[90, 0, 20]}> 
      <boxBufferGeometry attach="geometry" args={[2.35, 2.35, 2.35]}/>
      <meshNormalMaterial attach={"material"} />
    </mesh>
  )
}
