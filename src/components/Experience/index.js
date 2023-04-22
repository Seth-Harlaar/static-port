import React from 'react'

import {
  ExperienceTitle,
  ExperienceCard,
  ExperienceCardContainer,
  ExperienceContainer,
  WorkText,
  ExperienceCardWrapper,
  SchoolText,
  NonTechText,
  WorkDesc,
  ExperienceList,
  ExperienceMetaInfo,
  MetaInfoHeader
} from './ExperienceElements'

const title = {
  color: props => props.theme.highlight
};

const WorkExp = () => {
  return (
    <>
      <WorkDesc>
        <ExperienceMetaInfo>
          <MetaInfoHeader>Freelance Software Developer</MetaInfoHeader>
          <div>Cooklang Language Project</div>
          <div>Nov 21 - May 22</div>
        </ExperienceMetaInfo>

        Hired to build a custom C parser, with main functionality of converting formatted recipe texts into ASTs for use
        in future programs or applications. Used Flex to generate a lexical analyzer, and Bison to generate a parser for
        tokenized input. Collected parsed input into an AST via C linked lists. Built a custom Python C extension module
        to convert C linked list into Python object.
        <ExperienceList>
          <li>Built a 1-off custom parser used to process recipes that follow the Cooklang language spec</li>
          <li>Programmed a test harness in Python to automatically test the parser on updates</li>
          <li>Programmed a script to convert general-category-specific Unicode code points from list and convert 
            to Flex compatible regular expressions</li>
        </ExperienceList>
      </WorkDesc>
    </>
  )
}

const SchoolWork = () => {
  return (
    <>
      <WorkDesc>
        <ExperienceMetaInfo>
            <MetaInfoHeader>B.ENG, Computer Engineering</MetaInfoHeader>
            <div>University of Guelph</div>
            <div>Sept 2019 - Apr 2023</div>
          </ExperienceMetaInfo>
        Currently enrolled, 21 credits completed, expected graduation, April 2023.

      </WorkDesc>
    </>
  )
}

const NonTechWork = () => {
  return (
    <>
      <WorkDesc>
        <ExperienceMetaInfo>
          <MetaInfoHeader>Gas Pump Attendee</MetaInfoHeader>
          <div>Norm’s Esso Service</div>
          <div>March 2016 - June 2019</div>
        </ExperienceMetaInfo>

        
        Provided quality service to customers in a timely manner, including gas, cleaning, and light maintenance. Managed
        appointment bookings and car drop offs at front desk. Performed store opening and closing with responsibilities
        of accounting for cash, setup for next day, cleaning, and lockup tasks
        <ExperienceList>
          <li>Received compliments from employer on attitude, responsibility, and customer satisfaction</li>
        </ExperienceList>

        <ExperienceMetaInfo>
          <MetaInfoHeader>Skilled Labour</MetaInfoHeader>
          <div>Landex Group Inc.</div>
          <div>April 2020 - Present</div>
        </ExperienceMetaInfo>
        Collaborate with team members and supervisors to effectively complete tasks and meet project deadlines. Reading
        and interpreting blueprints, schematics, and instructions to accurately carry out construction plans. Ensuring that
        all safety procedures and protocols are followed.
        <ExperienceList>
          <li>Outperformed other labourers in terms of efficiency and throughput as per job completion time</li>
          <li>Consistently received compliments from site supervisors regarding work ethic, attitude, and timeliness</li>
        </ExperienceList>
      </WorkDesc>
    </>
  )
}





const ExperienceSection = () => {
  return (
    <>
      <ExperienceContainer id={'experience'}>
        <ExperienceTitle>experience</ExperienceTitle>

        <ExperienceCardContainer>
          
          <ExperienceCardWrapper>
            <ExperienceCard>
              <WorkExp></WorkExp>
            </ExperienceCard>
            <WorkText>work exp</WorkText>
          </ExperienceCardWrapper>

          <ExperienceCardWrapper>
            <ExperienceCard>
              <SchoolWork></SchoolWork>
            </ExperienceCard>
            <SchoolText>school</SchoolText>
          </ExperienceCardWrapper>

          <ExperienceCardWrapper>
            <ExperienceCard>
              <NonTechWork></NonTechWork>
            </ExperienceCard>
            <NonTechText>non-tech work</NonTechText>
          </ExperienceCardWrapper>

        </ExperienceCardContainer>
      </ExperienceContainer>
    </>
  )
}

export default ExperienceSection