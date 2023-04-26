import styled from 'styled-components'

export const SkillsTitle = styled.h1`
  font-size: 140px;
  font-weight: normal;
  color: var(--barely-visible);
  color: ${props => props.theme.moreVis};
`

export const SkillContainer = styled.div`
  background: ${props => props.theme.background};
  padding: 0 20px 100px 20px;
`

export const SkillsColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 30px;

  width: 600px;
  color: ${props => props.theme.light};

  @media screen and (max-width: 1500px){
    width: 400px;
  }
`

export const SkillCard = styled.div`
  position: relative;
  background: #1C1F22;
  // flex-grow: ${({ small }) => (small ? 3 : 7)};
  height: ${({ small }) => (small ? '30%' : '65%')};
  background: ${props => props.theme.dark};
  transition: 0.5s;

  &:hover {
    cursor: pointer;
  }
`

export const SkillCardTitleContainer = styled.div`
  display: flex;
  align-items: center;
`


export const SkillCardImgWrapper = styled.div`
  height: 40px;
  width: 40px;
  background: ${props => props.theme.highlight};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SkillCardImg = styled.img`
  height: 80%;
`

export const SkillCardTitleWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`

export const SkillCardTitle = styled.h1`
  width: 80%;
  text-align: center;
  font-weight: normal;
  font-size: 20px;
  border-bottom: 4px solid ${props => props.theme.highlight};

  @media screen and (max-width: 1500px){
    font-size: 20px;
  }
`


export const SkillCardText = styled.div`
  text-align: justify;
  text-justify: inter-word;
  padding-bottom: 10px;
`

export const SkillCardTextShort = styled.h1`
  text-align: justify;
  text-justify: inter-word;
  padding: 10px 20px 0 20px;

  transition: 0.25s;
  font-size: 14px;
  transform: ${({ small }) => (small ? 'translateY(0px)' : 'translateY(-200px)')};
  opacity: ${({ small }) => (small ? '1' : '0')};

  @media screen and (max-width: 1500px){
    font-size: 14px;
  }
`

export const SkillCardTextLong = styled.h1`
  text-align: justify;
  text-justify: inter-word;
  padding: 0 20px;

  transition: 0.25s;
  font-size: 14px;
  transform: ${({ small }) => (small ? 'translateY(-200px)' : 'translateY(0)')};
  opacity: ${({ small }) => (small ? '0' : '1')};

  @media screen and (max-width: 1500px){
    font-size: 14px;
  }
`



export const SkillCardArrow = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  margin: 0px 20px 10px 0;
  flex-grow: 1;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.highlight};
  transform: scale(1, ${props => props.small ? -1 : 1});
  
  @media screen and (max-width: 1500px){
    font-size: 20px;
  }
`