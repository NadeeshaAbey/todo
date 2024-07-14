import React from 'react'

function ProjectForm({heading, value, setValue, handleSubmit, setShowModal, confirmButtonText}) {
  return (
    <div>
        <form onSubmit={handleSubmit} className='ProjectForm'>
            <h3>{heading}</h3>
            <input 
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Project Name"
                autoFocus
            />
            <button className='cancel' role='button' onClick={()=> setShowModal(false)}>
                Cancel
            </button>
            <button className='confirm'>
                {confirmButtonText}
            </button>
        </form>
    </div>
  )
}

export default ProjectForm