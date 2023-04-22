import React, {useState} from 'react';
import Image from 'next/image';

import {
  OtherContainer,
  OtherTitle,
  OtherTile,
  OtherTileContainer,
  OtherTilePreviewContainer,
  OtherDescription,
  OtherPicture,
  OtherFileView,
  OtherFileModal,
  OtherFileEmbed,
  ExitButton
} from './OtherElements'

import deepqPreview from '../../assets/deep_q_paper.png'
import hvacPreview from '../../assets/hvac.png'
import inversePreview from '../../assets/inverse_quad_preview.jpg'

// import hvacDoc from '../../assets/papers/hvac.pdf'
// import deepDoc from '../../assets/papers/deepq.pdf'

const hvacDesc = 'This was a design project me and my partners completed as our capstone project. We designed an automatic HVAC zoning system that could save money and control the temperature of each room.'
const deepqDesc = 'In this project me and my partner designed a task scheduling algorithm that uses a Deep Q-Network to determine execution order.'
const inverseDesc = 'A short research paper covering the topic of inverse quadratic interpolation, a root finding algorithm. Includes details of the algorithm and implementation in Matlab.'


const OtherTileFcn = ({src, desc, doc}) => {
  const [hidden, setHidden] = useState(true)

  const openFile = () => {
    setHidden(false)
  }
  
  const closeFile = (event) => {
    if(event.target.id === 'entireModal'){
      setHidden(true)
    }
  }

  return (
    <>
      <OtherTile>
        <OtherTilePreviewContainer onClick={openFile}>
          <OtherPicture>
            <Image src={src} unoptimized/>
          </OtherPicture>
        </OtherTilePreviewContainer>

        <OtherFileModal hidden={hidden} onClick={closeFile} id='entireModal'>
          <OtherFileView id='fileView'>
            <OtherFileEmbed src={doc}/>
          </OtherFileView>
          <ExitButton id='entireModal'>X</ExitButton>
        </OtherFileModal>

        <OtherDescription>
          {desc}
        </OtherDescription>
      </OtherTile>
    </>
  )
}


const OtherSection = () => {

  return (
    <>

    {/* add a breaker section between this section and the one above */}
      <OtherContainer id={'other'}>

        <OtherTitle>other work</OtherTitle>
        <OtherTileContainer>
          <OtherTileFcn src={hvacPreview} desc={hvacDesc} doc={'../../assets/papers/hvac.pdf'}></OtherTileFcn>
          <OtherTileFcn src={deepqPreview} desc={deepqDesc} doc={'../../assets/papers/deepq.pdf'}></OtherTileFcn>
          <OtherTileFcn src={inversePreview} desc={inverseDesc} doc={'../../assets/papers/hvac.pdf'}></OtherTileFcn>
        </OtherTileContainer>

      </OtherContainer>
    </>
  )
}

export default OtherSection