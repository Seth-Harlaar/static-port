import React, {useState} from 'react'

import  {
  SkillsTitle,
  SkillContainer,
  SkillsColumnContainer,
  SkillColumn,
  SkillCard,
  SkillCardTitleContainer,
  SkillCardText,
  SkillCardImg,
  SkillCardTitle,
  SkillCardImgWrapper,
  SkillCardTitleWrapper,
  SkillCardArrow,
  SkillCardTextShort,
  SkillCardTextLong
} from './SkillsElements.js'

import { skillData } from './Data.js';

// for skill cards
const SkillCardFcn = ({tog, col, data}) => {
  return (
    <SkillCard onClick={tog} small={col}>
      <SkillCardTitleContainer>
        
        {/* switch images to react-icons */}
        <SkillCardImgWrapper>
          {/* <SkillCardImg src={data.img}></SkillCardImg> */}
        </SkillCardImgWrapper>

        <SkillCardTitleWrapper>
          <SkillCardTitle>{data.title}</SkillCardTitle>
        </SkillCardTitleWrapper>

      </SkillCardTitleContainer>
        <SkillCardText>
          <SkillCardTextShort small={col}>{data.shortDesc}</SkillCardTextShort>
          <SkillCardTextLong small={col}>{data.longDesc}</SkillCardTextLong>
        </SkillCardText>
        

      <SkillCardArrow small={col}>
        ^
      </SkillCardArrow>
    </SkillCard>
  )
}



const SkillsSection = () => {
  const [col1, setCol1] = useState(true);
  const toggleCol1 = () => {
    setCol1(!col1)
  }

  const [col2, setCol2] = useState(false);
  const toggleCol2 = () => {
    setCol2(!col2)
  }

  const [col3, setCol3] = useState(true);
  const toggleCol3 = () => {
    setCol3(!col3)
  }
  
  return (
    <>

      <SkillContainer id={"skills"}>

        <SkillsTitle>skills</SkillsTitle>
        <SkillsColumnContainer>

          {/* Column 1 */}
          <SkillColumn>
            <SkillCardFcn tog={toggleCol1} col={col1} data={skillData.skills[0]}></SkillCardFcn>
            <SkillCardFcn tog={toggleCol1} col={!col1} data={skillData.skills[1]}></SkillCardFcn>
          </SkillColumn>

          {/* Column 2 */}
          <SkillColumn>
            <SkillCardFcn tog={toggleCol2} col={col2} data={skillData.skills[2]}></SkillCardFcn>
            <SkillCardFcn tog={toggleCol2} col={!col2} data={skillData.skills[3]}></SkillCardFcn>
          </SkillColumn>


          {/* Column 3 */}
          <SkillColumn>
            <SkillCardFcn tog={toggleCol3} col={col3} data={skillData.skills[4]}></SkillCardFcn>
            <SkillCardFcn tog={toggleCol3} col={!col3} data={skillData.skills[5]}></SkillCardFcn>
          </SkillColumn>

        </SkillsColumnContainer>
      </SkillContainer>
    </>
  )
}

export default SkillsSection