import React from 'react'
import { Link } from "gatsby"
import SearchIcon from '@material-ui/icons/Search';

import "../styles/index.scss"

function header() {
    return (
        <div className="header">

            <div className="">
                <section className="searchbar">
                    <input
                        className="search__input"
                        type="text" />
                    <SearchIcon className="" />
                </section>
            </div>
        </div>
    )
}

export default header
