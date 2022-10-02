import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { FlyControls, OrbitControls, PerspectiveCamera} from '@react-three/drei'
import Sphere from './components/AnimatedSphere';

import './app.css'
import { Camera } from 'three';


export default function App() {
  return (
    <div>


      <div className='hero-wrapper'>
        <div id='hero-header'> 
          Seth Jones
        </div>
        <div id='hero-description'>
          Computer Science Undergrad
        </div>
        <div class= 'banner-wrapper'>
            <Canvas class = "morph-ball">
              <OrbitControls enableZoom={false} enableDamping={true} target={[0,0,0]} enablePan={false} />
              <PerspectiveCamera makeDefault
              position={[500,1,2]}
              fov={70}
              zoom={100}/>
              <Suspense fallback={null}>
              <Sphere />
              </Suspense>
              <ambientLight intensity={.5} />
              <directionalLight position={[-2,5,2]} intensity={1} />
            </Canvas>
        </div>
      </div>



     <div className='spacer wave'> </div>


    </div>
  )
}
