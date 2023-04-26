import React, {useState} from 'react';

import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/Experience'
import OtherSection from '../components/Other'
import SkillsSection from '../components/Skills';
import NavBar from '../components/NavBar';

import { ThemeProvider } from 'styled-components';
import {themes} from '../styles/themes.js';


export default function Home() {
  const [theme, updateTheme] = useState(0);
  
  function setNewTheme(newThemeIndex){
    updateTheme(newThemeIndex);
  }


  return (
    <ThemeProvider theme={themes[theme]}>
      <main>
        <NavBar thmFcn={setNewTheme}/>
        <div id='content'>
          <HeroSection />
          <ExperienceSection />
          <OtherSection/>
          <SkillsSection/>
        </div>
      </main>
    </ThemeProvider>
  )
}
