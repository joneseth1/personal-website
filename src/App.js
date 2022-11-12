import React, {Suspense } from 'react';
import Sphere from './components/AnimatedSphere';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, PerspectiveCamera, Stars} from '@react-three/drei'
import './app.css'



export default function App() {
  return (
    <div>      
        <div className='hero-wrapper'>
          <div id='hero-header'> Seth Jones </div>
          <div id='hero-description'> Computer Science Undergrad </div>
          <div class= 'banner-wrapper'>
            {/* Starting the canvas for react-three, setting controls, zoom, position, and lighting */}
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

      
      <div id='main'>
        {/* The "moutain of waves" svg that is in the middle of the page */}
        <div className='spacer wave'> </div>
        <div className='cushion'> </div>

          <div className='about'> 
            <div className='table'>
              <h1>About me</h1>

              <p>
                I am a current Computer Science and History undergrad at the University of North Carolina, Charlotte (UNCC). I am also a current professional cyclist
                for the Serbian-based Ferei CCN-Metalac UCI Continental team
                and I am a coach at Ignition Coach Co.
              </p>

              <p>
                I was born in San Luis Obispo, California but quickly moved to Mooresville, North Carolina. It was in Mooresville that I found my passion for
                cycling and computers. I became a professional cyclist when I was 18 and I started school at UNCC that same year. Since then I have traveled to Asia Minor, 
                Europe, and South America to race my bike, all while pursuing a B.A. in History and a B.S. in Computer Science with a concentration in Data Science. 
                As a Professional Cyclist, I have come to know explicitly that the quantity and quality of my work directly affects my outcome. I chase 
                opportunities to learn and do so quickly. I have a deep passion for computers and software and I am looking for any opportunity to learn more 
                about them!
              </p>
            </div>
            <div className='img-div'></div>
          </div>


          <div className='courses'> 

            <h1> Courses and Interests </h1>
              <p> 
                I have a deep passion for learning, from Math to History and Philosophy. To chase this passion I have taken a wide variety of courses and I have done a 
                lot of supplementary learning on my own time. I truly love to learn! 
                Outside of learning, I love to stay active especially if it includes cycling, hiking, or running basically anything outside!
              </p>
            
              <h3>Intro to Artificial Intelligence:</h3> 
                <li>
                  I learned a lot about the basics of AI. I learned about heuristic and state space search, 
                  predicate logic, semantic nets, statistical and probabilistic reasoning, etc. This course sparked a deep interest 
                  in AI for me. This course inspired me to take a CS-focused version of Intro to Cognitive Science in Spring 2023, I'm super excited to learn 
                  more about AI and how it relates to the human mind. 
                </li>

              <h3>Intro to Data Mining: </h3>
                <li>
                    This was a challenging course since I did not take Linear Algebra yet but I loved every second of it. This course sparked 
                    my interest in anything data related. I got to learn about topics like Clustering, Graph/Network Analysis, Anomaly Detection, and Prediction Models. 
                </li>

              <h3>Data Structures and Algorithms: </h3>
                <li>
                  I loved this course!
                  This course made a lot of topics in CS that were mysterious to me make sense! I learned about stacks, queues, and various data structures. 
                </li>

              <h3>History Skills Seminar: </h3>
                <li>
                    This course was mandatory as a History BA. I learned so many writing skills that I know I can apply to my life post-
                    College. I had a wonderful professor that pushed us to write the best we could.
                </li>
          </div>
          
          {/* social media icons under the connect with me table */}
          <div className='connect'>
            <h1> Connect with me </h1>
            <a href="https://www.linkedin.com/in/seth-jones-980242249/" className="social-icons">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://github.com/joneseth1" className="social-icons">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
          <div className='bottom'></div>
      </div>
    </div>
  )
}
