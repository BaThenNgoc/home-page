import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYTEAM
            </h1>
            <p className="home-about-body">
              <strong className="purple">Nguyen Luan:</strong>
              <span> Quần què gì của tao cũng là của tụi bây vậy</span>
              <br />
              <br />
              <strong className="purple">Van Nam:</strong>
              <span> Ông hoàng tuyên truyền cái lỏ, chỉ gì cũng lỏ</span>
              <br />
              <br />
              <strong className="purple">Vy Khoi:</strong>
              <span> Như cái tên công việc "Lào gì cũng tôn"</span>
              <br />
              <br />
              <strong className="purple">Phuc Thinh:</strong>
              <span> Em ở quê mới lên!, em không biết gì hết</span>
              <br />
              <br />
              <strong className="purple">Bao Chấn:</strong>
              <span> Hoàng đế bù nhìn, chiến thần quan sát, “kiểu gì chả có đứa làm giùm”.</span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND TEAM ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with team Stupid Room 203
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
