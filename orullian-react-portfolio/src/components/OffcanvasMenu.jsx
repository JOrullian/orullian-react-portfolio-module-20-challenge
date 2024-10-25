import { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

function OffcanvasMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={show ? handleClose : handleShow}
        className="me-2 offcanvas-btn"
      >
        <img
          src={show ? "/assets/close-icon.png" : "/assets/hamburger-icon.png"}
          alt={show ? "open navigation menu" : "close navigation menu"}
          id="navigation-menu-icon"
        />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        className="fullscreen-offcanvas"
        scroll={true}
      >

        <Offcanvas.Body className="offcanvas-body-centered">
          <Nav.Item>
            <Nav.Link
              href="#projects-section"
              className="external-nav-menu-item"
              id="nav-menu-projects"
              onClick={handleClose}
            >
              Projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#about-me-section"
              className="external-nav-menu-item"
              id="nav-menu-projects"
              onClick={handleClose}
            >
              About Me
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="#contact-section"
              className="external-nav-menu-item"
              id="nav-menu-projects"
              onClick={handleClose}
            >
              Contact
            </Nav.Link>
          </Nav.Item>

          <div className="external-links">
            <Nav.Item>
              <Nav.Link
                href="https://github.com/JOrullian"
                id="nav-menu-github"
              >
                <img
                  className="external-nav-menu-item"
                  src="/assets/github-icon.png"
                  alt="Link to Jedediah's Github profile"
                />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/jedediah-orullian-1a4b71135/"
                id="nav-menu-linkedin"
              >
                <img
                  className="external-nav-menu-item"
                  src="/assets/linkedin-icon.png"
                  alt="Link to Jedediah's LinkedIn profile"
                />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="https://x.com/JOrullian94" id="nav-menu-x">
                <img
                  className="external-nav-menu-item"
                  src="/assets/twitter-icon.png"
                  alt="Link to Jedediah's X profile"
                />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="https://open.spotify.com/user/22dhstansphs5w6qooxt2xvma?si=7cd2c8c649704ec4" id="nav-menu-spotify">
                <img
                  className="external-nav-menu-item"
                  src="/assets/spotify-icon.png"
                  alt="Link to Jedediah's spotify profile"
                />
              </Nav.Link>
            </Nav.Item>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// Prop validation using PropTypes
OffcanvasMenu.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default OffcanvasMenu;
