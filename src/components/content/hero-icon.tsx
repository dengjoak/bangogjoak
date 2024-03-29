import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export const HeroIcon = ({ link, icon }: any) => (
  <OutboundLink href={link} target="_blank">
    <i
      style={{ marginLeft: 18, marginRight: 18, color: "#FFFF" }}
      className={icon}
    />
  </OutboundLink>
)
