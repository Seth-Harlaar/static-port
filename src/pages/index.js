import Image from 'next/image'
import { Inter } from 'next/font/google'

import HeroSection from '../components/HeroSection';

import { ThemeProvider } from 'styled-components';
import {dogWaterTheme, goodTheme} from '../styles/themes.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>

      <ThemeProvider theme={goodTheme}>
        <HeroSection></HeroSection>

      </ThemeProvider>


    </main>
  )
}
