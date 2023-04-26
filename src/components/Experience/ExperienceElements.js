import styled from 'styled-components'



export const ExperienceTitle = styled.div`
  padding-bottom: 100px;
  text-align: right;
  font-size: 140px;
  font-weight: normal;
  color: ${props => props.theme.moreVis};
`


// floating text
export const WorkText = styled.h1`
  position: absolute;
  top: -85px;
  left: -60px;

  text-transform: uppercase;
  transition: 0.5s;
  
  font-weight: normal;
  font-size: 120px;
  color: ${props => props.theme.barelyVis};
  z-index: 1;
  
  @media screen and (max-width: 1500px) {
    position: static;
    font-size: 70px;
    color: ${props => props.theme.superVis};
  }
`
export const SchoolText = styled.h1`
  position: absolute;
  top: calc(100% - 40px);
  left: -100px;

  text-transform: uppercase;
  transition: 0.5s;
  
  font-weight: normal;
  font-size: 100px;
  color: ${props => props.theme.barelyVis};
  z-index: 1;
  
  @media screen and (max-width: 1500px) {
    position: static;
    font-size: 70px;
    color: ${props => props.theme.superVis};
  }
`
export const NonTechText = styled.h1`   
  position: absolute;
  top: calc(100% - 50px);
  left: -150px;
  
  text-transform: uppercase;
  transition: 0.5s;
  
  font-weight: normal;
  font-size: 100px;
  color: ${props => props.theme.barelyVis};
  z-index: 1;
  
  @media screen and (max-width: 1500px) {
    position: static;
    font-size: 70px;
    color: ${props => props.theme.superVis};
  }
`


export const ExperienceContainer = styled.div`
  background: ${props => props.theme.background};
  padding-bottom: 150px;
`


// cards
export const ExperienceCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;

  @media screen and (max-width: 1500px) {
    display: block;
    margin: auto;
    max-width: 900px;
  }
`

export const ExperienceCardWrapper = styled.div`
  position: relative;
  
  min-height: 40vh;
  width: 43%;

  // large
  @media screen and (max-width: 1500px) {
    min-height: 0;
    width: 100%;
  }


  &:hover {
  scale: 1.08;
  }

  &:hover ${WorkText}{
    color: ${props => props.theme.superVis};
    top: -125px;
  }

  &:hover ${SchoolText}{
    color: ${props => props.theme.superVis};
    top: -125px;
  }

  &:hover ${NonTechText}{
    color: ${props => props.theme.superVis};
    top: 100%;
  }
  // xl
  @media sreen and (min-wdith: 1500px) {
  }
`

export const ExperienceCard = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  padding: 0 30px 20px 30px;

  // large
  @media screen and (max-width: 1500px) {
    position: static;
    min-height: 0;
  }
  
  background-color: ${props => props.theme.dark};
  color: ${props => props.theme.light};
  z-index: 2;
`

// Descriptions
export const WorkDesc = styled.div`
  text-align: justify;
  text-justify: inter-word;
  font-size: 15;
  line-height: 1.3;
`

export const ExperienceList = styled.ul`
  padding-left: 20px;
`

export const ExperienceMetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-weight: normal;
  // font-size: 2vh;

  font-size: 20px;

  @media screen and (max-width: 1500) {
    font-size: 17px;
  }

  text-align: center;
`
export const MetaInfoHeader = styled.h1`
  color: ${props => props.theme.highlight};
`
