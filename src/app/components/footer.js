"use client"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white mx-auto" style={{ backgroundColor: 'transparent' }}>
      <section>
        <Container fluid className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </Col>
            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset text-white">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Vue</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Laravel</a>
              </p>
            </Col>
            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset text-white">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Help</a>
              </p>
            </Col>
            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                New York, NY 10012, US
              </p>
              <p>
                info@example.com
              </p>
              <p>
                + 01 234 567 88
              </p>
              <p>
                + 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: 'transparent' }}>
        © {new Date().getFullYear()} Company name:
        <a className="text-reset fw-bold text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
