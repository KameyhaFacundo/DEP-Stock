import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./footer.css";
import imgDefecto from "../../assets/sitiosImg/defecto.png";
import imgRIG from "../../assets/sitiosImg/RIG.png";
import imgIndec from "../../assets/sitiosImg/indec.png";
import imgDigituc from "../../assets/sitiosImg/digituc.png";
import imgIdet from "../../assets/sitiosImg/idet.png";
import imgOdsFranja from "../../assets/sitiosImg/odsFranja.png";

const Footer = () => {
  return (
    //Sitios de interes
    <footer className="bg-dark text-light pt-3">
      <Container fluid className="w-100">
        <h1 class="text-center val-round">Sitios web de interés</h1>
        <Row className="align-items-center">
          <aside className="col-sm-12 col-md-6 col-lg-3 text-center">
            <a
              className=""
              href="http://estadistica.tucuman.gov.ar/"
              target="_blank"
            >
              <img
                className="img-interes"
                onerror="this.onerror=null;this.src=`assets/img/picture.svg`"
                src={imgDefecto}
                alt="estadistica"
              />
            </a>
          </aside>

          <aside className="col-sm-12 col-md-6 col-lg-3 text-center mt-1">
            <a
              className=""
              href="http://planeamiento.tucuman.gob.ar/"
              target="_blank"
            >
              <img
                className="img-interes"
                onerror="this.onerror=null;this.src=`assets/img/picture.svg`"
                src={imgDefecto}
                alt="planeamiento"
              />
            </a>
          </aside>

          <aside className="col-sm-12 col-md-6 col-lg-3 text-center mt-1">
            <a
              className=""
              href="https://correorig.tucuman.gob.ar/"
              target="_blank"
            >
              <img
                className="img-interes"
                onerror="this.onerror=null;this.src=`assets/img/picture.svg`"
                src={imgRIG}
                alt="rig"
              />
            </a>
          </aside>

          <aside className="col-sm-12 col-md-6 col-lg-3 text-center mt-1">
            <a className="" href="https://sep.tucuman.gob.ar/" target="_blank">
              <img
                className="img-interes"
                onerror="this.onerror=null;this.src=`assets/img/picture.svg`"
                src={imgDefecto}
                alt="sep"
              />
            </a>
          </aside>
        </Row>
        <Row className="pt-2 align-items-center">
          <aside className="col-sm-12 col-md-6 col-lg-3 text-center mt-1">
            <a className="" href="https://www.indec.gob.ar/" target="_blank">
              <img
                className="img-interes"
                onerror="this.onerror=null;this.src=`assets/img/picture.svg`"
                src={imgIndec}
                alt="indec"
              />
            </a>
          </aside>

          <aside className="col-sm-12 col-md-6 col-lg-3 text-center mt-1">
            <a className="" href="https://digituc.gob.ar/" target="_blank">
              <img
                className="img-interes"
                onerror="this.onerror=null;this.src=`assets/img/picture.svg`"
                src={imgDigituc}
                alt="digituc"
              />
            </a>
          </aside>

          <aside className="col-sm-12 col-md-6 col-lg-3 text-center">
            <a className="" href="http://idet.tucuman.gob.ar/" target="_blank">
              <img
                className="img-interes bg-dark"
                onerror="this.onerror=null;this.src=`assets/img/picture.svg`"
                src={imgIdet}
                alt="idet"
              />
            </a>
          </aside>

          <aside className="col-sm-12 col-md-6 col-lg-3 text-center">
            <a
              className=""
              href="https://www.un.org/sustainabledevelopment/es/"
              target="_blank"
            >
              <img
                className="img-interes"
                onerror="this.onerror=null;this.src=`assets/img/picture.svg`"
                src={imgOdsFranja}
                alt="ods Franja"
              />
            </a>
          </aside>
        </Row>
      </Container>
    </footer>
    /*<div className='bg-footer pt-2'>
            <Container fluid>
                <Row>
                    <Col>Columna 1</Col>
                    <Col>Columna 2</Col>
                    <Col>Columna 3</Col>
                    <Col>Columna 4</Col>
                </Row>
            </Container>
        </div>*/
  );
};

export default Footer;
