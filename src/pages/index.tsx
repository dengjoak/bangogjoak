import React from "react"
import styled from "styled-components"
import { Hero } from "../components/hero"
import { ProjectItem } from "../components/content/project-item"
import { PROJECT_LINKS, CONTACT } from "../consts"

import Layout from "../components/layout"
import SEO from "../components/seo"

const keyconstruction = require("../images/keyconstruction.png")
const keyproperty = require("../images/keyproperty.png")
const futurstore = require("../images/futurstore.png")
const bamboorestaurant = require("../images/bamboorestaurant.png")

const projects = [
  {
    name: "keyconstruction",
    pic: keyconstruction,
    link: PROJECT_LINKS.keyconstruction,
  },
  { name: "keyproperty", pic: keyproperty, link: PROJECT_LINKS.keyproperty },
  {
    name: "futurstore",
    pic: futurstore,
    link: PROJECT_LINKS.futurstore,
  },
  {
    name: "bamboorestaurant",
    pic: bamboorestaurant,
    link: PROJECT_LINKS.bamboorestaurant,
  },
]

const ProjectList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
`

const EmailLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: "Fira Mono", monospace;
  width: 100%;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Bang & Joak Consulting"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Hero />
    <ProjectList>
      {projects.map(({ pic, link }) => (
        <ProjectItem pic={pic} link={link} />
      ))}
    </ProjectList>
    <div style={{ width: "100%", textAlign: "center", marginBottom: 75 }}>
      <EmailLink href={`mailto://${CONTACT.email}`}>{CONTACT.email}</EmailLink>
    </div>
  </Layout>
)

export default IndexPage
