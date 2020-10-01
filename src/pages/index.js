import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
        rpm: file(relativePath: {eq: "images/rpm-gambar1.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
      }
  `)

    return (
        <Layout>
            <h3>
                <center>Rumah Pemberdayaan Masyarakat Menerima Donasi dari Anda.</center>
            </h3>
            <p>{<Img fluid={data.rpm.childImageSharp.fluid} />}</p>
        </Layout>
    )
}
export default IndexPage