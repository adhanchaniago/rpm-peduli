import React from "react"

import Header from "./header"
import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"

const Layout = (props) => {
  return (
    <div className={LayoutStyles.container}>
      <div ClassName={LayoutStyles.content}> 
        <Header />
          {props.children}
      </div>  
    </div>
  )
}

export default Layout
