import React from "react"
import { StaticQuery, graphql } from "gatsby"

graphql`
  query SidebarItemsQuery {
    allSidebarItemJson {
      edges {
        node {
	  label
	  link
	  }
	}
      }
    }
`
