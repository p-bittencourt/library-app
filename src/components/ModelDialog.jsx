import React from "react";
import { Modal } from "react-bootstrap";

function ModelDialog() {
  const [isShown, invokeModal] = React.useState(false);
  const initModal = () => {
    return invokeModal(!isShown);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={initModal}>
        Open Modal
      </button>
      <Modal show={isShown}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={initModal}>
            Close
          </button>
          <button className="btn btn-dark" onClick={initModal}>
            Store
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelDialog;
