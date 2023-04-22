import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
} from './NavbarElements'



const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF"}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            
            <NavLogo to="/" onClick={toggleHome}> SETH H </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks to="experience" 
                  smooth={true} duration={500} spy={true}
                  exact='true' offset={-80} scrollNav={scrollNav}
                  > EXPERIENCE </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="other"
                  smooth={true} duration={500} spy={true}
                  exact='true' offset={-80} scrollNav={scrollNav}
                  > OTHER WORK </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="skills"
                  smooth={true} duration={500} spy={true}
                  exact='true' offset={-80} scrollNav={scrollNav}
                  > SKILLS </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact"
                  smooth={true} duration={500} spy={true} 
                  exact='true' offset={-80} scrollNav={scrollNav}
                  > CONTACT </NavLinks>
              </NavItem>
            </NavMenu>


          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar