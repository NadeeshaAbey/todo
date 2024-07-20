import React, {useContext, useState} from 'react'
import AddNewProject from './AddNewProject'
import Project from './Project'
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons'
import { TodoContext } from '../context'

function Projects() {

  const  [showMenu, setShowMenu] = useState(true)
  const [edit, setEdit] = useState(false)
  const pencilColor = edit ? '#1EC94C' : '#8A8BA5'

  //CONTEXT
  const {projects} = useContext(TodoContext)
  return (
    <div className='Projects'>
        <div className="header">
          <div className="title">
            <Palette size='18' />
            <p>Projects</p>
          </div>
          <div className="btns">
            {
              showMenu && projects.length > 0 &&
              <span className='edit' onClick={() => setEdit(edit => !edit)}>
              <PencilFill size='18' color={pencilColor} />
            </span>
            }
            <AddNewProject />
            <span className='arrow'> 
              <CaretUp size='20' />
            </span>
          </div>
        </div>
        <div className="items">
          {
            projects.map((project) => (
              <Project 
                project={project}
                key={project.id}
                edit={edit}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Projects