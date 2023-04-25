import styled from 'styled-components'



export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  
  background: white;
`

export const ThemeTitle = styled.div`
  padding: 10px 0 0 10px;
`

export const ThemeMenu = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`

export const ThemeItem = styled.div`
  display: flex;
  width: 100%;
`

export const ThemeButton = styled.div`
  flex-grow: 3;
  background: ${props => props.sel ? 'green' : 'blue'};
`

export const ThemeText = styled.div`
  flex-grow: 7;
  text-align: center;

  font-size: 20px;
  font-weight: bold;
`