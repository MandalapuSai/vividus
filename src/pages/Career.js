import React from 'react'


export default function Career() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">Careers at Vividus Science</h2>
        <p className="text-muted">Join us in shaping a smarter, healthier, and more innovative tomorrow.</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src='https://nkindustriesltd.com/wp-content/uploads/2021/02/careers.jpg' alt="Careers" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h4 className="fw-semibold">Why Work With Us?</h4>
          <ul className="list-unstyled">
            <li>✔️ Dynamic work environment</li>
            <li>✔️ Continuous learning and growth</li>
            <li>✔️ Research-driven innovation</li>
            <li>✔️ Meaningful contributions to science & society</li>
          </ul>
        </div>
      </div>

      <div className="bg-light p-4 rounded shadow-sm">
        <h5 className="fw-semibold mb-3">Current Openings</h5>
        <div className="mb-4">
          <h6>🔬 Research Associate</h6>
          <p className="text-muted mb-1">Location: Hyderabad | Experience: 2+ Years</p>
          <p>We are looking for passionate researchers to join our biotech innovation team.</p>
          <button type="button" class="btn btn-primary">Apply Now</button>
        </div>
        <div className="mb-4">
          <h6>💻 System Operator</h6>
          <p className="text-muted mb-1">Location: Remote | Experience: 1–3 Years</p>
          <p>Help us build responsive, user-friendly dashboards and interfaces.</p>
          <button type="button" class="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  )
}
