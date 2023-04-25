import React, {useState, useEffect} from 'react'

import ThemeSelection from '../ThemePicker'

import {
  Bar, 
  NavList,
  NavLink,
  NavHome,
  ThemeButton,
  ThemePicker
} from './NavElements.js'


const NavBar = ({thmFcn}) => {
  const [themePicker, setThemePicker] = useState(false);
  const toggleTheme = () => {
    setThemePicker(!themePicker);
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setThemePicker(false);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Bar pos={scrollPosition}>
        <NavHome>
          Seth H
        </NavHome>

        <NavList>

          <NavLink to={'experience'}
            smooth={true} duration={500} spy={true}
            exact='true' offset={-50}
            pos={scrollPosition}
          >experience</NavLink>

          <NavLink to={'other'}
            smooth={true} duration={500} spy={true}
            exact='true' offset={-50} 
            pos={scrollPosition}
          >other work</NavLink>

          <NavLink to={'skills'}
            smooth={true} duration={500} spy={true}
            exact='true' offset={-50}
            pos={scrollPosition}
          >skills</NavLink>

          <ThemeButton 
            onClick={toggleTheme} pos={scrollPosition} >
            Theme
          </ThemeButton>

        </NavList>

        <ThemePicker vis={themePicker}>
          <ThemeSelection thmFcn={thmFcn}/>
        </ThemePicker>

      </Bar>
    </>
  )
}

export default NavBar
