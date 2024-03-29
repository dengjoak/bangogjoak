import React from "react"
import { Subtitle } from "../typography/subtitle"
import { FooterItem } from "./footer-item"
import { CONTACT } from "../../consts"

export const Footer = () => (
  <div
    style={{
      paddingLeft: 56,
      paddingRight: 56,
      backgroundColor: "#6202EE",
      height: 78,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      textDecoration: "none",
    }}
  >
    <FooterItem
      icon="fas fa-envelope"
      label={CONTACT.email}
      link={`mailto:${CONTACT.email}`}
    />
    <Subtitle style={{ marginBottom: 0 }} color="#fff">
      Get in Touch
    </Subtitle>
  </div>
)
