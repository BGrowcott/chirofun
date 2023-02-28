import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { SHOW_MODAL_EXAMPLE } from "../../utils/actions";
import { useGlobalContext } from "../../utils/GlobalState";

function ExampleModal() {
  const [state, dispatch] = useGlobalContext();

  function toggleModal() {
    dispatch({ type: SHOW_MODAL_EXAMPLE });
  }

  return (
    <Modal show={state.setModalExample} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Modal Body Text
      </Modal.Body>
    </Modal>
  );
}

export default ExampleModal;