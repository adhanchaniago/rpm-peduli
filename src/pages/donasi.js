import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const Donasi = () => { 
  const data = useStaticQuery(graphql`
    query {
      allDonasiJson {
        edges {
          node {
            campaign
            donation
            donator
            label
            link
          }
        }
      }
    }
 `)
  
      return (
        <Layout>
	  <p>Test Json</p>
	    {data.allDonasiJson.edges.map((edge) => {
	      return (
	        <p>
		  {edge.node.campaign}
		  {edge.node.donation}
		  {edge.node.donator}
		  {edge.node.label}
		  {edge.node.link}
		</p>
	        )
	      })}
	</Layout>
    )
}

export default Donasi
