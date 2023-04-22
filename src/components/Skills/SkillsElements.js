import styled from 'styled-components'

export const SkillsTitle = styled.h1`
  font-size: 140px;
  font-weight: normal;
  padding-left: 200px;
  color: var(--barely-visible);
  color: ${props => props.theme.moreVis};
`

export const SkillContainer = styled.div`
  background: ${props => props.theme.background};
`

export const SkillsColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 0px 100px 50px 100px;
`

export const SkillColumn = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 30px;

  height: 60vh;
  width: 400px;
  color: ${props => props.theme.light};
`

export const SkillCard = styled.div`
  position: relative;
  background: #1C1F22;
  flex-grow: ${({ small }) => (small ? 3 : 7)};
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
  height: 11vh;
  width: 11vh;
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
  font-size: 3vh;
  border-bottom: 4px solid ${props => props.theme.highlight};
`


export const SkillCardText = styled.div`
  position: relative;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 20px 20px 20px;
  font-size: 2.5vh;
  height: 100%;
`

export const SkillCardTextShort = styled.h1`
  position: absolute;

  text-align: justify;
  text-justify: inter-word;
  padding: 10px 20px 0 20px;
  font-size: 2.5vh;

  transition: 0.25s;

  transform: ${({ small }) => (small ? 'translateY(0px)' : 'translateY(-100px)')};
  opacity: ${({ small }) => (small ? '1' : '0')};
`

export const SkillCardTextLong = styled.h1`
  position: absolute;
  
  text-align: justify;
  text-justify: inter-word;
  padding: 10px 20px 0 20px;
  font-size: 2.5vh;

  transition: 0.25s;

  transform: ${({ small }) => (small ? 'translateY(-100px)' : 'translateY(0)')};
  opacity: ${({ small }) => (small ? '0' : '1')};
`



export const SkillCardArrow = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  margin: 0px 20px 10px 0;
  flex-grow: 1;
  font-size: 3vh;
  font-weight: bold;
  color: ${props => props.theme.highlight};
  transform: scale(1, ${props => props.small ? -1 : 1});
`