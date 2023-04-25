import React from 'react'
import {
  HeroContainer,
  HeroPicture,
  HeroText,
  HeroH1,
  HeroH2,
  HeroH3,
  HeroPictureContainer,
  HeroButton,
  HeroArrow,
  Spacer
} from './HeroElements'

import Image from 'next/image'

import logo from '../../assets/asdf.jpg'


const HeroSection = () => {

  return (
    <>
      <HeroContainer id={'home'}>

        <HeroPictureContainer>
          <HeroPicture>
            <Image src={logo} unoptimized />
          </HeroPicture>
        </HeroPictureContainer>

        <HeroText>
          <HeroH2>hello, my name is</HeroH2>
          <HeroH1>seth harlaar</HeroH1>
          <HeroH3>i build software</HeroH3>
        </HeroText>

        <HeroButton to="experience"
          smooth={true} duration={500} spy={true}
          exact='true' offset={-80}
        >
          <div>
            More Info
          </div>

          <Spacer/>
          <HeroArrow>^</HeroArrow>

        </HeroButton>

      </HeroContainer>
    </>
  )
}

export default HeroSection
