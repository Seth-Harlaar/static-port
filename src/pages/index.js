import HeroSection from '../components/HeroSection';

import { ThemeProvider } from 'styled-components';
import {dogWaterTheme, goodTheme} from '../styles/themes.js'


export default function Home() {
  return (
    <main>

      <ThemeProvider theme={goodTheme}>
        <HeroSection></HeroSection>

      </ThemeProvider>


    </main>
  )
}
