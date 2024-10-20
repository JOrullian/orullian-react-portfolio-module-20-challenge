import { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasMenu({
  title = "Navigation Menu",
  content = "Placeholder text for the offcanvas navigation menu",
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 offcanvas-btn">
        Open Menu
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        className="fullscreen-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{content}</Offcanvas.Body>
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
