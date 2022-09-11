import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls} from '@react-three/drei'
import Sphere from './components/AnimatedSphere';

import './app.css'


export default function App() {
  return (
    <div>


      <div className='hero-wrapper'>
        <div id='hero-header'> 
          Seth Jones
        </div>
        <div id='hero-description'>
          Computer Science Undergrad Professional Cyclist
        </div>
        <div id='banner-wrapper'>
            <Canvas>
              <OrbitControls enableZoom={false}/>
              <Suspense fallback={null}>
              <Sphere />
              </Suspense>
              <ambientLight intensity={.5} />
              <directionalLight position={[-2,5,2]} intensity={1} />
            </Canvas>
        </div>
      </div>



     <div className='spacer wave'> </div>


      
      <div className='about-container'> 
        <div id='about-header'>
          About Me 
        </div>

        <div id='about-picture'> 
        
        </div>
        
        <div id='about-picture'>
          Place holder
        </div>

        <div id='about-description'>
          Seth started competitive cycling in 2014 when he raced at his local MTB series and started Road racing in 2015.
          Seth struggled in the early parts of his cycling career but he would eventually find his footing and join his first professional team at 18. 
          While Seth was out training in early 2020 he was hit by a car which would cause 8 compound fractures and muscle/tissue loss in his left leg, 2 fractured vertebrae, and a TBI caused by an intracranial hemorrhage. 
          He spent a total of 22 days in the hospital, and started racing again in February of 2021. 
          Since then he has raced across the world soaking up all the experience he could find. 
          During his travels, Seth has been pursuing a BA in History and a BS in Computer Science with minors in Data Science and Bioinformatics at UNC Charlotte. 
          Seth currently lives in Mooresville, North Carolina with his fiance, Hannah, and his cat, Honey.
          He currently races for the Ferei-CCN-Metalac Pro team but is itching to get back into Mountain Biking and is looking to branch out to Gravel!
        </div> 
      </div>


    </div>
  )
}
