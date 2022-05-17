import React from 'react'
import { Container } from './styled/Container.styled'
import { Flex } from './styled/Flex.styled'
import { StyledFooter } from './styled/Footer.styled'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus ea sapiente tenetur modi deserunt nisi cupiditate ipsum sequi ratione?</li>
            <li>+1-123-456-7891</li>
            <li>someone@huddle.com</li>
          </ul>
          <ul>
            <li>About us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle, All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer