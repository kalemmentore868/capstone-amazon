import React from 'react'
import { BiSearchAlt } from "react-icons/bi"
import "../assets/css/search.css"

const SearchBar = () => {
    return (
        <div className="search">
            <form action="#">
                <input type="text"
                    placeholder=" Search Products"
                    name="search" />
                <button>
                    <BiSearchAlt size="18px" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar