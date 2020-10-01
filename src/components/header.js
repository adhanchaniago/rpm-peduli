import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"

const Header = () => {
  return (
    <div>
        <ul className="navbar">
          <li>
            <Link to="/">
              <img src="https://img.icons8.com/material-rounded/24/00aeef/home.png" />Home
            </Link>
          </li>
	  <li>
	    <Link to="/donasi">
	      <img src="https://img.icons8.com/material-rounded/24/00aeef/love.png" />Program
	    </Link>
	  </li>
	  <li>
	    <Link to="/blog">
	      <img src="https://img.icons8.com/material-rounded/24/00aeef/news.png" />Berita
	    </Link>
	  </li>
	  <li>
	  <Link to="/donasisaya">
	    <img src="https://img.icons8.com/pastel-glyph/24/00aeef/box--v2.png" />Donasi Saya
	  </Link>
	  </li>
        </ul>
      </div>
  )
}

export default Header
