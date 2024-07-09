import React from 'react'
import User from './User'
import Sidebar from './Sidebar'
import Main from './Main'

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