import './App.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import ProjectList from './components/ProjectList/ProjectList';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(prev => !prev);

    if (showItem) {
      //scroll animation;
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Hero>
        <button onClick={handleClick}className="main-btn">{!showItem? "Open Projects" : "Close Projects"}</button>
      </Hero>
      {showItem && <ProjectList></ProjectList>}
    </div>
  );
}

export default App;
