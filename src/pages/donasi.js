import React from "react"
<<<<<<< HEAD
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
=======

import Layout from "../components/layout"

const Donasi = () => {
    return (
        <div>
	  <Layout>
            <h2><center>Halaman Donasi</center></h2>
	  </Layout>
        </div>
>>>>>>> 26553a3de3aee8d96d5be70341346969f5b37452
    )
}

export default Donasi
