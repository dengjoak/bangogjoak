import React from "react"
import styled from "styled-components"
import { Title } from "./typography/title"
import { Subtitle } from "./typography/subtitle"
import { HeroIcon } from "./content/hero-icon"
import { LINKS } from "../consts"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  height: calc(100vh - 130px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 509px) {
    /* height: calc(65vh - 107px); */

    height: 55vh;
    margin-bottom: 100px;
    justify-content: flex-end;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  bottom: -49px;
`

export const Hero = () => (
  <Wrapper>
    <div style={{ position: "absolute" }}>
      <Title>Bang & Joak Consulting</Title>
      <Subtitle>Full-Stack Web Development</Subtitle>
      <IconWrapper>
        <HeroIcon icon="fab fa-github" link={LINKS.github} />
        <HeroIcon icon="fab fa-linkedin-in" link={LINKS.linkedin} />
      </IconWrapper>
    </div>
  </Wrapper>
)
