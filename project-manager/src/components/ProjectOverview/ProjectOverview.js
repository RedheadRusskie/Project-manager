import img from '../../assets/img2.jpg';
import './ProjectOverview.css';

export default function ProjectOverview ({handleOverview}) {
  
  const handleCompletionChange = () => {

  }
  
  return (
    <div className="overview-backdrop">
      <div className="project-overview">
        <h3>project name here</h3>
        <div className="type-tag">Personal</div>
        <div className="overview">
          <div className="overview-container">
            <img className="proj-img" src={img}></img>
            <p>Lorem ipsum dolor sit amet. Et rerum ducimus non accusantium beatae eos nemo quos sit repellendus aspernatur et asperiores laboriosam a labore excepturi quo tempora repellendus</p>
          </div>
          <div className="progress">
            <p>Progress</p>
            <input onChange={handleCompletionChange} className="slider" type="range" min="1" max="100" value="50" id="myRange"></input>
            <label>50%</label>
          </div>
        </div>
        <div className="buttons">
            <button onClick={handleOverview} className="cancel-btn">Close</button>
            <button className='submit-btn'>test</button>
          </div>
      </div>
    </div>
  );
 }