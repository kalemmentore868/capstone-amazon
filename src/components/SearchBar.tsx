import React from 'react'
import Form from 'react-bootstrap/Form'
import { BiSearchAlt } from "react-icons/bi"
import "../assets/css/search.css"

const SearchBar = () => {
    return (
        <Form className="d-flex input-group w-auto" >
            <Form.Control type="search"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
                <BiSearchAlt />
            </span>

        </Form>
    )
}

export default SearchBar