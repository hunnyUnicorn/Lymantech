import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/developer.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                We're
                <strong className="main-name"> Daniel Andrei LLC</strong>
              </h1>

              <p className="heading-description blockquote">
                We are passionate about using Javascript and Animation Libraries
                to create awesome user experiences. With over five years of
                experience developing web applications using the latest
                front-end and back-end technologies.
              </p>

              {/* <div className="heading-type">
                <TypeWriter />
              </div> */}
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with us</strong>
              </p>
              <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
                <h3 style={{textAlign: 'right'}}>Email :</h3><h3 style={{textAlign: 'left'}}>&nbsp;danielandreillc@outlook.com</h3>
                <h3 style={{textAlign: 'right'}}>Phone :</h3><h3 style={{textAlign: 'left'}}>&nbsp;+1 225 257 9389</h3>
                <h3 style={{textAlign: 'right'}}>Address :</h3><h3 style={{textAlign: 'left'}}>&nbsp;760 EAST DR NUM R, BEAUMONT, TX, 77706</h3>
              </div>
              {/* <SocialMedia /> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
