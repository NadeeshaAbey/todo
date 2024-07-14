import React, {useState} from 'react'
import { Plus } from 'react-bootstrap-icons'
import ProjectForm from './ProjectForm'
import Modal from './Modal'

function AddNewProject() {

  const [showModal, setShowModal] = useState(false)
  const [projectName, setProjectName] = useState('')

  function handleSubmit() {
    
  }
  return (
    <div className='AddNewProject'>
      <div className="add-button">
        <span onClick={()=> setShowModal(true)}>
          <Plus size='20' />
        </span>
      </div>
      
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit = {handleSubmit}
          heading = 'Add New Project'
          value = {projectName}
          setValue = {setProjectName}
          setShowModal = {setShowModal}
          confirmButtonText = '+ Add a project'
        />
      </Modal>
    </div>
  )
}

export default AddNewProject