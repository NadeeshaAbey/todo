import React from 'react'
import User from './User'
import Sidebar from './Sidebar'
import Main from './Main'
import AddNewTodo from './AddNewTodo'
import Calendar from './Calendar'
import Projects from './Projects'
import Todos from './Todos'
import EditTodo from './EditTodo'

function Container() {
  return (
    <div className='Container'>
        <User />
        <Sidebar />
        <Main /> 
    </div>
  )
}

export default Container