import styled from 'styled-components'



export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  
  border-radius: 10px;
  background: white;
  padding-bottom: 10px;

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 25px solid transparent;
    border-right: 5px solid transparent;
    border-top: 12px solid transparent;
    border-bottom: 40px solid white;
    right: 20px;
    top: -50px;
  }
`



export const ThemeTitle = styled.div`
  padding: 10px 0 0 10px;
  font-size: 25px;
  color: ${props => props.theme.superVis};
`

export const ThemeMenu = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const ThemeItem = styled.div`
  display: flex;
  width: 80%;
  padding:  ${props => props.sel ? '10px' : '0 10px'};
  border:   ${props => props.sel ? '2px solid ' + props.theme.highlight  : 'none'};
  color:    ${props => props.sel ? props.theme.superVis : props.theme.barelyVis};

  &:hover {
    cursor: pointer;
  }
`

export const ThemeButton = styled.div`
  width: 35%;
  background: ${props => props.sel ? props.theme.background : props.theme.barelyVis};

`

export const ThemeText = styled.div`
  width: 65%;
  text-align: center;

  font-size: 20px;
  font-weight: bold;
`