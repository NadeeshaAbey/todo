import React, { useState } from "react";
import Modal from "./Modal";
import dayjs from "dayjs";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false);

  const [text, setText] = useState("");
  const [day, setDay] = useState(dayjs(new Date()));
  const [time, setTime] = useState(dayjs(new Date()));

  const projects = [
    {
      id: 1,
      name: 'personal',
      numberOfTodos: 0
    },
    {
      id: 2,
      name: 'work',
      numberOfTodos: 1
    },
    {
      id: 3,
      name: 'other',
      numberOfTodos: 2
    }
  ]

  function handleSubmit() {

  }
  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>Add Task</button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm 
          handleSubmit={handleSubmit}
          heading="Add New Task"
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
}

export default AddNewTodo;
