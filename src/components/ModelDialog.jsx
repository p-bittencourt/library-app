// NOT CURRENTLY IN USE

import React from "react";
import { Modal } from "react-bootstrap";

function ModelDialog() {
  const [isShown, invokeModal] = React.useState(true);
  const initModal = () => {
    return invokeModal(!isShown);
  };

  return (
    <>
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
