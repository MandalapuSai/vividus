import React from 'react'

import Vision_Img from '../assets/vision.png';
import Mission_Img from '../assets/mission.jpg';


export default function About() {
  return (
    <div className='container'>
      <div className="my-5">
        {/* Vision Section */}
        <div className="row mb-5">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2 className="mb-3">Our Vision</h2>
              <p>
                To be a global leader in scientific innovation by delivering impactful, sustainable, and reliable solutions.
                We envision a future where science and technology work together to create a better, smarter, and healthier world.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Vision_Img} alt="Vision" className="img-fluid rounded" />
          </div>
        </div>

        {/* Mission Section */}
        <div className="row">
          <div className="col-md-6 order-md-2 d-flex align-items-center">
            <div>
              <h2 className="mb-3">Our Mission</h2>
              <p>
                Our mission is to empower industries through high-quality research, innovation, and collaboration.
                We aim to deliver excellence in every project, ensuring our clients succeed with integrity, trust, and precision.
              </p>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <img src={Mission_Img} alt="Mission" className="img-fluid rounded" />
          </div>
        </div>
      </div>


    </div>
  )
}
