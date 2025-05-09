import React from 'react'

import Vision_Img from '../assets/vision.png';
import Mission_Img from '../assets/mission.jpg';
import { FaLinkedin } from 'react-icons/fa';



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

        <section class="py-5 bg-light mt-5">
          <div class="container">
            <div class="text-center mb-5">
              <h2 class="fw-bold text-primary">Our Core Values</h2>
              <p class="text-muted">These values guide us in everything we do and define who we are.</p>
            </div>
            <div class="row g-4">
              <div class="col-md-4">
                <div class="card zoom-card h-100 border-0 text-center p-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Integrity" width="60" class="mb-3 mx-auto" />
                  <h5 class="fw-semibold text-dark">Integrity</h5>
                  <p class="text-muted">We act with honesty, transparency, and uphold strong moral principles in all we do.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card zoom-card h-100 border-0 text-center p-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="Innovation" width="60" class="mb-3 mx-auto" />
                  <h5 class="fw-semibold text-dark">Innovation</h5>
                  <p class="text-muted">We embrace creativity and constantly seek better ways to serve and evolve.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card zoom-card h-100 border-0 text-center p-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/190/190406.png" alt="Excellence" width="60" class="mb-3 mx-auto" />
                  <h5 class="fw-semibold text-dark">Excellence</h5>
                  <p class="text-muted">We strive to exceed expectations with quality and precision in every step.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-5 bg-light">
          <div class="container">
            <h2 class="text-center mb-5 fw-bold text-success">Our Leadership</h2>

            <div id="teamCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner text-center">

                <div class="carousel-item active">
                  <div class="card border-0 shadow mx-auto"  >
                    <div class="card-body">
                      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Reddy Sekhar" class="rounded-circle mb-3" width="120" height="120" />
                      <h5 class="fw-bold">Sekhar</h5>
                      <p class="text-primary mb-1">Chief Scientific Officer</p>
                      <p class="text-muted">
                        Leads the research and scientific strategy of the company.
                      </p>
                      <a href="#" class="text-decoration-none" style={{ fontSize: '25px' }}><FaLinkedin /></a>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="card border-0 shadow mx-auto" >
                    <div class="card-body">
                      <img src="https://randomuser.me/api/portraits/women/58.jpg" alt="Nisha Rao" class="rounded-circle mb-3" width="120" height="120" />
                      <h5 class="fw-bold">Nisha Rao</h5>
                      <p class="text-primary mb-1">Research & Innovation Lead </p>
                      <p class="text-muted">
                        Focuses on developing new scientific methods and technologies.
                      </p>
                      <a href="#" class="text-decoration-none" style={{ fontSize: '25px' }}><FaLinkedin /></a>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="card border-0 shadow mx-auto" >
                    <div class="card-body">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Nisha Rao" class="rounded-circle mb-3" width="120" height="120" />
                      <h5 class="fw-bold">Varma</h5>
                      <p class="text-primary mb-1">Bioinformatics Analyst</p>
                      <p class="text-muted">
                        Works on analyzing biological data using computational tools.
                      </p>
                      <a href="#" class="text-decoration-none" style={{ fontSize: '25px' }}><FaLinkedin /></a>
                    </div>
                  </div>
                </div>
              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#teamCarousel" data-bs-slide="prev" style={{ backgroundColor: '#e9b7b7' }}>
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#teamCarousel" data-bs-slide="next" style={{ backgroundColor: '#e9b7b7' }}>
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </section>






      </div>


    </div>
  )
}
