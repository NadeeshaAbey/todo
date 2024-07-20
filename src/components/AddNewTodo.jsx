import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import dayjs from "dayjs";
import TodoForm from "./TodoForm";
import { TodoContext } from "../context";
import firebase from "../firebase";
import moment from "moment";
import randomColor from "randomcolor";
import { calendarItems } from "../constants";

function AddNewTodo() {
  //CONTEXT
  const {projects, selectedProject} = useContext(TodoContext);

  //STATE
  const [showModal, setShowModal] = useState(false);

  const [text, setText] = useState("");
  const [day, setDay] = useState(dayjs(Date()));
  const [time, setTime] = useState(dayjs(Date()));
  const [todoProject, setTodoProject] = useState(selectedProject);


  function handleSubmit(e) {
    e.preventDefault();

    if(text && !calendarItems.includes(todoProject)){
      firebase
        .firestore()
        .collection('todos')
        .add(
          {
            text: text,
            date: moment(day).format('MM/DD/YYYY'),
            day: moment(day).format('d'),
            time: moment(time).format('hh:mm A'),
            checked: false,
            color: randomColor(),
            projectName: todoProject,
          }
        )
      setShowModal(false)
      setText('')
      setDay(dayjs(Date()))
      setTime(dayjs(Date()))
    }
  }

  useEffect(() =>{
    setTodoProject(selectedProject)
  }, [selectedProject] )
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
          todoProject={todoProject}
          setTodoProject={setTodoProject}
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
}

export default AddNewTodo;
