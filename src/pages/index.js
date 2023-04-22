import React, {useState} from 'react';

import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/Experience'
import OtherSection from '../components/Other'
import SkillsSection from '../components/Skills';

import { ThemeProvider } from 'styled-components';
import {dogWaterTheme, goodTheme} from '../styles/themes.js';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <main>

      <ThemeProvider theme={goodTheme}>
        <HeroSection />
        <ExperienceSection />
        <OtherSection/>
        <SkillsSection/>
      </ThemeProvider>
    </main>
  )
}
