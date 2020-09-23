import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"

const Layout = (props) => {
  return (
    <div ClassName={LayoutStyles.content}> 
      <Header />
      <Footer />
        {props.children}
    </div>  
  )
}

export default Layout
