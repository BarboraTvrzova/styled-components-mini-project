import React from 'react'
import { StyledHeader, Nav, Logo } from './styled/Header.styled'
import { Button } from './styled/Button.styled'
import { Container } from './styled/Container.styled'
import { Flex } from './styled/Flex.styled'
import { Image } from './styled/Header.styled'


const Header = () => {
  return (
    <StyledHeader>
      <Container >
        <Nav>         
          <Logo src="./images/logo.svg" alt="logo"/>
          <Button>Try it free</Button> 
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. YOu have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get started for free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header