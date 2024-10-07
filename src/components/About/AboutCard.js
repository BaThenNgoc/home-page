import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">Stupid Room 203 </span>
            from <span className="purple"> HCM City, VIETNAM.</span>
            <br />
            We have 5 members, 4 of whom study IT and 1 of whom study economics.
            <br />
            We are currently working on a long-term startup project, 
            although the results may not be positive, we still hope for a better future.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">We team Stupid Room</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
