import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, we are <span className="purple">Lymantech LLC.</span>
            <br />
            We love to transform ideas into reality using code.
            <br />
            Motivated designer and developer with experience creating
            custom websites with Nodejs, Pyhtong, Django, Java/Spring, React, Angular
            and Mobile App using React-native.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
