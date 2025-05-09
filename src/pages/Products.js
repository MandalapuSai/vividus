import React, { useState, useEffect } from 'react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const modalElement = document.getElementById('staticBackdrop');
    if (modalElement) {
      const onHidden = () => {
        document.activeElement?.blur(); // Remove focus if stuck
      };
      modalElement.addEventListener('hidden.bs.modal', onHidden);

      return () => {
        modalElement.removeEventListener('hidden.bs.modal', onHidden);
      };
    }
  }, []);

  const tabletsData = {
    cardiac: [
      "Glimedus-M1/M2", "Glimedus-M1/M2 Forte", "Glimedus-MV1/MV2", "Glimedus-MP1/MP2",
      "Tenenorm-20", "Tenenorm-M500", "PREGADUS-M75", "Gabadus-NT",
      "Sitaphil-M 50/500", "Sitaphil-DM 100/10/500", "Dapadus-10", "Dapadus-M 10/500",
      "M-COBAL CD", "Vigor-OD"
    ],
    orthopedics: [
      "TRYPSEE", "TRYPSEE PLUS", "TRYPSEE BR", "JOINT LITE",
      "FRACZERO", "TENDOFORCE", "Calcidus", "VIVI LIFE"
    ],
    ent: [
      "Rabedus-DSR", "Esogast DSR", "PREGADUS-M 75", "Gabadus-NT", "Vigor-OD", "M-COBAL CD",
      "Cefponorm CV 200/125", "Ludus M", "AB NORM-100", "D3 Max 60k"
    ],
    urology: [
      "TRYPSEE", "TRYPSEE PLUS", "TRYPSEE BR", "URIPACE-D", "CRANFAST-D",
      "ASSURE-m", "Argidus", "ViviFer", "VIVILIFE", "Calcidus"
    ]
  };

  const categoryLabels = {
    cardiac: { title: "Cardiac & Diabetic Tablets", color: "primary" },
    orthopedics: { title: "Orthopedics Tablets", color: "success" },
    ent: { title: "ENT & Physician Tablets", color: "warning" },
    urology: { title: "Urology & General Tablets", color: "danger" }
  };

  return (
    <div className="container py-5">
      <div className="brand-title text-primary mb-4">Vividus Life Sciences Pvt. Ltd</div>

      {/* Cards */}
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div
            className="card border-primary blink-hover"
            onClick={() => setSelectedCategory('cardiac')}
            style={{ cursor: 'pointer' }}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <div className="card-body">
              <h5 className="card-title text-primary">
                <i className="bi bi-heart-pulse-fill"></i> Cardiac & Diabetic
              </h5>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div
            className="card border-success blink-hover1"
            onClick={() => setSelectedCategory('orthopedics')}
            style={{ cursor: 'pointer' }}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <div className="card-body">
              <h5 className="card-title text-success">
                <i className="bi bi-person-walking"></i> Orthopedics
              </h5>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div
            className="card border-warning blink-hover2"
            onClick={() => setSelectedCategory('ent')}
            style={{ cursor: 'pointer' }}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <div className="card-body">
              <h5 className="card-title text-warning">
                <i className="bi bi-ear"></i> ENT & Physician
              </h5>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div
            className="card border-danger blink-hover3"
            onClick={() => setSelectedCategory('urology')}
            style={{ cursor: 'pointer' }}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <div className="card-body">
              <h5 className="card-title text-danger">
                <i className="bi bi-droplet-half"></i> Urology & General
              </h5>
            </div>
          </div>
        </div>
      </div>


      {/* Modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{categoryLabels[selectedCategory]?.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="row g-4">
                {tabletsData[selectedCategory]?.map((tablet, i) => (
                  <div className="col-md-6 col-lg-4 mb-2" key={i}>
                    <div
                      className={`card border-${categoryLabels[selectedCategory].color} card-animation`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="card-body">
                        <h6 className={`text-${categoryLabels[selectedCategory].color} fw-bold`}>{tablet}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
