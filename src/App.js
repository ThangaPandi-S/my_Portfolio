import './App.css';
import React from 'react'
import { Header } from './components/Headers/Header';
import { TopContainer } from './components/top-container/TopContainer';
import { SkillContainer } from './components/skillContainer/SkillContainer';
import { ProjectContainer } from './components/ProjectContainer/ProjectContainer';
import { Experience } from './components/exp/Experience';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <Experience/>
      <Contact/>

    </div>
  );
}

export default App;
