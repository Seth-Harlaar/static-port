import styled from 'styled-components'
import {keyframes} from 'styled-components'
import { Link as LinkS } from 'react-scroll';

export const HeroContainer = styled.div`
  background: ${props => props.theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5vh 50px;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`

export const HeroPictureContainer = styled.div`
  flex-grow: 1;
  display:flex;
  justify-content: center;
`

export const HeroPicture = styled.div`
  max-width: 650px;
  
  @media screen and (max-width: 1500px) {
    max-width: 450px;
  }

  @media screen and (max-width: 768px) {
    max-width: 350px;
  }
`


export const HeroText = styled.div`
  flex-grow: 1;
`

export const HeroH1 = styled.h1`
  margin: 20px 0 10px 0;
  text-transform: uppercase;
  color: ${props => props.theme.highlight};
  font-size: 80px;


  @media screen and (max-width: 1500px) {
    font-size: 60px;
  }

  @media screen and (max-width: 768px){
    font-size: 40px;
  }

  @media screen and (max-width: 360px){
    font-size: 20px;
  }
`
export const HeroH2 = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.theme.light};
  font-size: 20px;
  
  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`
export const HeroH3 = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.theme.light};
  font-size: 40px;
  
  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`



const shiftBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  60% {
    background-position: 100% 50%;
  } 
  100% {
    background-position: 100% 50%;
  }  
`

export const HeroButton = styled(LinkS)`
  position: absolute;
  right: 10%;
  bottom: 10%;

  width: 300px;

  display: flex;
  align-items: center;
  padding: 15px 20px;

  background: ${props => 'linear-gradient(-45deg, '+ props.theme.highlight +' 0%,'+ props.theme.highlight + ' 48%,'+ props.theme.gradientSecond +  ' 50%,'+ props.theme.highlight + ' 52%,'+ props.theme.highlight + ' 100%)'};
  background-size: 1200%;

  font-size: 25px;
  font-weight: bold;
  color: ${props => props.theme.light};

  &:hover {
    cursor: pointer;
    animation: ${shiftBackground} 3s linear infinite;
  }

  @media screen and (max-width: 1500px) {
    font-size: 20px;
    width: 250px;
  }

  @media screen and (max-width: 1500px) {
    font-size: 15px;
    width: 180px;
  }
`




export const HeroArrow = styled.div`
  flex-grow: 1;
  text-align: right;
  transform: scale(1, -1);
`