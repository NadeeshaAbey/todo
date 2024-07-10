import React, { useState } from "react";
import Modal from "./Modal";

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>Add Task</button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>Hello</div>
        <button onClick={() => setShowModal(false)}>X</button>
      </Modal>
    </div>
  );
}

export default AddNewTodo;
