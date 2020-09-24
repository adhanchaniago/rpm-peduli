import React from 'react'
import { Link } from "gatsby"
import SearchIcon from '@material-ui/icons/Search';
import Logo from "../assets/logo.jpeg"

import "../styles/index.scss"

function header() {
    return (
        <div className="header">
                <Link to="/">
                    <img className="logo" src={Logo} alt="Logo" />
                </Link>
                <section className="searchbar">
                    <input
                        className="search__input"
                        type="text"
                        placeholder="Donasi apa yang kamu cari..." 
                        />
                    <SearchIcon className="" />
                </section>
        </div>
    )
}

export default header
