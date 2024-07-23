import React, { useContext, useEffect, useRef } from "react";
import AddNewTodo from "./AddNewTodo";
import Calendar from "./Calendar";
import Projects from "./Projects";
import { TodoContext } from "../context";

function Sidebar() {

  //CONTEXT
  const { setSelectedTodo } = useContext(TodoContext)

  //REF
  const sidebarRef = useRef()

  useEffect( () => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  const handleClick = (e) => {
    if(e.target === sidebarRef.current || sidebarRef.current.contains(e.target)){
      setSelectedTodo(undefined)
    }
  }
  return (
    <div 
      className="Sidebar side-main"
      ref = {sidebarRef}
    >
      <AddNewTodo />
      <Calendar />
      <Projects />
    </div>
  );
}

export default Sidebar;
