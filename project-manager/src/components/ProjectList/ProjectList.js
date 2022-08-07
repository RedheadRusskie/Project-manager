import './ProjectList.css';
import ProjectMenu from '../ProjectMenu/ProjectMenu';
import ProjectOverview from '../ProjectOverview/ProjectOverview';


import { useState, useEffect, useCallback } from 'react';

export default function ProjectList() {
  const [src, setSrc] = useState('http://localhost:3000/projects');
  const [projects, setProjects] = useState([]);
  const [showOverview, setShowOverview] = useState(false);

  const getProjects = useCallback(async () => {
    const response = await fetch(src);
    const projects = await response.json();
    setProjects(projects);
  }, [src]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  const addProject = project => {
    setProjects((prevProjects => {
      return [...prevProjects, project];
    }));
  }

  const handleOverview = () => {
    setShowOverview(prev => !prev);
  }


  return (
    <div className="project-wrapper">
      {showOverview && <ProjectOverview handleOverview={handleOverview}></ProjectOverview>}
      <div className="project-container">
        <h2>Project List</h2>
        <ProjectMenu addProject={addProject} setSrc={setSrc} src={src}></ProjectMenu>
        <ul>
          {projects.map(project => (
            <li onClick={handleOverview} key={project.id}>
              <div className="card-container">
                <h3>{project.title}</h3>
                <div className="completion-label">{project.completion_status}% Complete</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}