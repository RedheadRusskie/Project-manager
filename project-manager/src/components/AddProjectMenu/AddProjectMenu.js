import './AddProjectMenu.css';

import { useState } from 'react';

export default function AddProjectMenu({ setAddMenu, addProject }) {
  const [title, setTitle] = useState(null);
  const [type, setType] = useState('personal');
  const [description, setDescription]  = useState(null);

  const dropdown = document.getElementById('typeSelect');

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddMenu(false);

    const id = Math.floor(Math.random() * 100);

    if (title != null ) {   
      
      const project = {
        id: id,
        title: title,
        description,
        type: type,
        completion_status: 0
      }

      console.log(project);
      addProject(project);
    } else {
      console.log('null title');
    }

  }

  const recordType = () => {
    setType(dropdown.value);
  }

  return (
    <form className="backdrop" onSubmit={handleSubmit}>
      <div className="event-form">
        <h3>Add a project</h3>
        <label>
          <span className="field-label">Title</span>
          <input onChange={e => setTitle(e.target.value.trim())} className="field" type="text" id="title"></input>
        </label>
        <label>
          <span className="field-label">Description</span>
          <input onChange={e => setDescription(e.target.value)}className="field" type="text"></input>
        </label>
        <span className="select-label">Type</span>
        <select onChange={e => recordType} className="selector" id="typeSelect">
            <option value="personal">Personal</option>
            <option value="work">Work</option>
        </select>
        <div className="buttons">
          <button className="cancel-btn">Cancel</button>
          <button type="submit" className="submit-btn">Add</button>
        </div>
      </div>
    </form>
  )
}