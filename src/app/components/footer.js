import React from 'react';

function Footer() {
  return (
    <div className="container text-white">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 text-decoration-none">
            <svg className="bi me-2" width="40" heigeht="32"><use xlinkHref="#bootstrap"></use></svg>
          </a>
          <p className="text-white">© {new Date().getFullYear()}</p>
        </div>

        <div className="col mb-3">

        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
