import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';



export const Bar = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;

  margin-top: -70px;
  height: 70px;
  width: 100%;
  
  z-index: 100;
  transition: 0.4s;

  background: ${props => props.pos > 50 ? props.theme.light : 'transparent'};
`

export const NavHome = styled.div`
  position: absolute;
  left: 0;

  padding-left: 3vw;

  font-weight: bold;
  font-size: 25px;
  color: ${props => props.theme.highlight};

  text-transform: uppercase;
`

export const NavList = styled.div`
  height: 100%;
  position: absolute;
  right: calc(3vw - 20px);

  display: flex;
`

export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;  
  height: 100%;
  padding: 0 20px;
  font-size: 18px;
  color: ${props => props.pos > 50 ? props.theme.dark : props.theme.light};
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  &.active {
    border-bottom: ${props => '5px solid'};
  }
`

export const ThemeButton = styled.div`
  display: flex;
  align-items: center;  
  height: 100%;
  padding: 0 20px;
  font-size: 18px;
  color: ${props => props.pos > 50 ? props.theme.dark : props.theme.light};
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`

export const ThemePicker = styled.div`
  position: absolute;
  top: 100px;
  right: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 350px;

  transition: 0.2s;

  opacity: ${props => props.vis ? 1 : 0};
  pointer-events: ${props => props.vis ? 'all' : 'none'};
`

export const ExitThemeButton = styled.div`
  position: absolute;
  top: 5px;
  right: 19px;
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.theme.barelyVis};

  &:hover {
    cursor: pointer;
  }
`
