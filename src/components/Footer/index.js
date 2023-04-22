import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements'

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Don't Click These</FooterLinkTitle>
                <FooterLink to="/signin">How Its Made</FooterLink>
                <FooterLink to="/signin">Were Stupid</FooterLink>
                <FooterLink to="/signin">Dead End Jobs</FooterLink>
                <FooterLink to="/signin">WallStreet Wannabes</FooterLink>
                <FooterLink to="/signin">Lies of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle> Don't Click These</FooterLinkTitle>
                <FooterLink to="/signin">How Its Made</FooterLink>
                <FooterLink to="/signin">Were Stupid</FooterLink>
                <FooterLink to="/signin">Dead End Jobs</FooterLink>
                <FooterLink to="/signin">WallStreet Wannabes</FooterLink>
                <FooterLink to="/signin">Lies of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
              <FooterLinkTitle> Don't Click These</FooterLinkTitle>
                <FooterLink to="/signin">How Its Made</FooterLink>
                <FooterLink to="/signin">Were Stupid</FooterLink>
                <FooterLink to="/signin">Dead End Jobs</FooterLink>
                <FooterLink to="/signin">WallStreet Wannabes</FooterLink>
                <FooterLink to="/signin">Lies of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
              <FooterLinkTitle> Don't Click These</FooterLinkTitle>
                <FooterLink to="/signin">How Its Made</FooterLink>
                <FooterLink to="/signin">Were Stupid</FooterLink>
                <FooterLink to="/signin">Dead End Jobs</FooterLink>
                <FooterLink to="/signin">WallStreet Wannabes</FooterLink>
                <FooterLink to="/signin">Lies of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>

              <SocialLogo to="/" onClick={toggleHome}>
                SETH H
              </SocialLogo>

              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>

            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>

    </>
  )
}

export default Footer;