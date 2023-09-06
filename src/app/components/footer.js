import React from 'react';
import Image from 'next/image';
function Footer() {
  return (
    <div className="container text-white">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 text-decoration-none">
          <Image
                src="/logo-engracol.png"
                alt="Bootstrap Themes"
                width={70}
                height={70}
                className="img-fluid"
                priority
              />
          </a>
          <p className="text-white">© {new Date().getFullYear()}</p>
        </div>

        <div className="col mb-3">

        </div>

        <div className="col mb-3">
          <h5>Servicios</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Inicio</a></li>
            <li className="nav-item mb-2"><a href="/mecanizado" className="nav-link p-0 text-white">Mecanizado</a></li>
            <li className="nav-item mb-2"><a href="/soldadura" className="nav-link p-0 text-white">soldadura</a></li>
            <li className="nav-item mb-2"><a href="/diseno" className="nav-link p-0 text-white">Diseño</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Contacto</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="https://wa.me/573246826740" className="nav-link p-0 text-white">Jhon Tobar - 324 682 6740</a></li>
            <li className="nav-item mb-1"><a href="https://wa.me/573215071534" className="nav-link p-0 text-white">Ivan Restrepo - 321 507 1534</a></li>
            <li className="nav-item mb-1"><b className="nav-link p-0 text-white">engranajesdecolombia@gmail.com</b></li>
            <li className="nav-item mb-1"><b className="nav-link p-0 text-white">Calle 28 #4-22</b></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
