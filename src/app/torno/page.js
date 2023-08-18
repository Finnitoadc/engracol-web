"use client"
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sinfin from '../components/sinfin';

function CenteredHero() {
  return (
    <>
      <Navbar />
      <div className="px-4 py-5 my-5 text-center">
        <Sinfin />
        <h1 className="display-5 fw-bold text-white">Torno</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-white">Ofrecemos servicios de mecanizado en torno para piezas de hasta 1 metro de diametro y 3 metros de longitud. Utilizamos maquinaria de ultima generacion para garantizar una alta precision en el acabado final.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-outline-light px-4 gap-3">
              <i className="bi bi-whatsapp"></i> Cotizar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CenteredHero;

