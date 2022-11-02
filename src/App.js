import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { FlyControls, OrbitControls, PerspectiveCamera, Stars, Text, Text3D} from '@react-three/drei'
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

    
    <div className='bottom-site'>
      <div className='spacer wave'> </div>
      <div className='cushion'> </div>

        <div className='about'> 
          <div className='table'>
          <h1>About me</h1>
          

          <p>I am a current Computer Science and History undergrad at the University of North Carolina, Charlotte (UNCC). I am also a current professional cyclist for the Serbian based 
            Ferei CCN-Metalac UCI Continental team and I am a coach at Ignition Coach Co.</p>
            <p>I was born in San Luis Obispo, California but quickly moved to Mooresville, North Carolina. It was in Mooresville that I found my passion for cycling and computers.
            I became a professional cyclist when I was 18 and I started school at UNCC that same year. Since then I have traveled to Asia Minor, Europe and South America to race my bike,
            all while pursuing a B.A. in History and a B.S. in Computer Science with a concentration in Data Science . As a Professional Cyclist, 
            I have come to know explicitly that the quantity and quality of my work directly affects my outcome. 
            I chase opportunities to learn and do so quickly. 
            I have a deep passion for computers and software and I am looking for any opportunity to learn more about them!  
          </p>
          </div>
            <div className='img-div'></div>
        </div>

        <div className='connect'>
          <h1> Connect with me </h1>
          <a href="#" className="social-icons">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="#" className="social-icons">
            <ion-icon name="logo-github"></ion-icon>
          </a>

        </div>



        <div className='bottom'> </div>
          
        </div>
    </div>
  )
}
