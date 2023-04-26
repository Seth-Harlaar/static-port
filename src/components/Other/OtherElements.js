import styled from 'styled-components';

export const OtherContainer = styled.div`
  background: ${props => props.theme.background};
  padding: 0 50px 0 50px;
  
`



export const OtherTitle = styled.h1`
  font-size: 140px;
  font-weight: normal;
  color: ${props => props.theme.moreVis};
`



export const OtherTileContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const OtherTile = styled.div`
  width: 30%;  
`

export const OtherTilePreviewContainer = styled.div`
  --wid: 5px;
  
  &:before {
    content:"";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9;

    width: var(--wid);
    height: 25%;
    background:linear-gradient(${props => props.theme.highlight} 50%, ${props => props.theme.highlight} 50%);
  }
  
  position: relative;

  height: 52vh;
  width: 40vh;
  margin: 0 auto 10px auto;
  overflow: hidden;
  scale: 1;
  
  background: white;
  border-bottom: var(--wid) solid ${props => props.theme.highlight};

  transition: 0.2s;
  transition-timing-function: ease-out;
  
  &:hover {
    cursor: pointer;
    scale: 1.07;
  }

  @media screen and (max-width: 1500px) {
    height: 325px;
    width: 250px;
  }

  &:after {
    content:"";
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 9;

    width: var(--wid);
    height: 50%;
    background:linear-gradient(${props => props.theme.highlight} 50%, ${props => props.theme.highlight} 50%);
  }
`


export const OtherDescription = styled.h1`
  width: 100%;  
  font-size: 25px;
  font-weight: normal;
  text-align: justify;
  text-justify: inter-word;
  color: ${props => props.theme.light};

  @media screen and (max-width: 1500px) {
    font-size: 15px;
  }
`

export const OtherPicture = styled.div`
  width: 100%;
  object position: 50% top;
  object-fit: cover;
  margin: auto;

`



export const OtherFileModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  displaY: ${props => (props.hidden ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: white;
  background: ${props => props.theme.superVis};
`

export const ExitButton = styled.div`
  position: fixed;
  top: 5vh;
  left: 95vw;
  font-size: 60px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`

export const OtherFileView = styled.div`
  height: 90vh;
  width: 50vw;
  background: white;
`

export const OtherFileEmbed = styled.embed`
  width: 100%;
  height: 100%;
`