import React from 'react'
import './App.css'
import User from './components/User'
import Container from './components/Container'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {


  return (
    <div className="App">
      <Container>
        <User />
        <Sidebar>

        </Sidebar>
        <Main>
          
        </Main>
      </Container>
    </div>
  )
}

export default App
