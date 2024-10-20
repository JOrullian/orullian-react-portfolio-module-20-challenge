import { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
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
      >
        <Offcanvas.Body className="offcanvas-body-centered">
          <ul className="nav-menu-item" id="nav-menu-projects">
            Projects
          </ul>

          <ul className="nav-menu-item" id="nav-menu-about-me">
            About Me
          </ul>

          <ul className="nav-menu-item" id="nav-menu-contact">
            Contact
          </ul>
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
