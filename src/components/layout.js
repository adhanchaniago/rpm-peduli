import React from "react"

import Header from "./header"
<<<<<<< HEAD
=======
import Footer from "./footer"
>>>>>>> 26553a3de3aee8d96d5be70341346969f5b37452
import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"

const Layout = (props) => {
  return (
<<<<<<< HEAD
    <div className={LayoutStyles.container}>
      <div ClassName={LayoutStyles.content}> 
        <Header />
          {props.children}
      </div>  
    </div>
=======
    <div ClassName={LayoutStyles.content}> 
      <Header />
      <Footer />
        {props.children}
    </div>  
>>>>>>> 26553a3de3aee8d96d5be70341346969f5b37452
  )
}

export default Layout
