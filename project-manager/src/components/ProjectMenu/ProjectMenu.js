import './ProjectMenu.css';
import AddProjectMenu from '../AddProjectMenu/AddProjectMenu';

import { useState } from 'react';

export default function ProjectMenu(props) {
  const [addMenu, setAddMenu] = useState(false);

  const handleClick = () => {
    setAddMenu(true);
  }
  
  const filterClick = criteria => {
    switch (criteria) {
      case "work":
        props.setSrc('http://localhost:3000/projects?type=work');
        break;
      case "personal":
        props.setSrc('http://localhost:3000/projects?type=personal');
        break;
      default:
        props.setSrc('http://localhost:3000/projects');
        break;
    }
  }

  return (
    <div className="navigate">
      <div className='nav-container'>
        <div className="toggle-buttons">
          <button onClick={() => filterClick()} className="tag-btn">All</button>
          <button onClick={() => filterClick('personal')} className="tag-btn">Personal</button>
          <button onClick={() => filterClick('work')} className="tag-btn">Work</button>
        </div>
        <div className='add-btn'>
          <button className='add' onClick={handleClick}><i className="fa fa-plus"></i></button>
        </div>
      </div>
      {addMenu && <AddProjectMenu setProjects={props.setProjects} setAddMenu={setAddMenu} addProject={props.addProject}/>}
    </div>
  );
}