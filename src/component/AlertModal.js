import React from "react";
import { Button, Modal } from "react-bootstrap";

// == AlertModal Component ==
function AlertModal(props) {
    const {message, show} = props;
  
  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Hello!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <strong className="row row-content ml-1">
          {message}
        </strong>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-primary" onClick={() => props.CloseModal()}>
          Understood
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertModal;
