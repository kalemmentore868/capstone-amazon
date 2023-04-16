import { debounce } from 'lodash'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { BiSearchAlt } from "react-icons/bi"
import { useSearchParams } from 'react-router-dom'
import "../assets/css/search.css"
import { useProducts } from '../helper/hooks'
import Loader from './Loader'

const SearchBar = () => {
    const [search, setSearch] = useSearchParams()


    const onSearchChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;

        if (text.length === 0) {
            search.delete('query');
            setSearch(search, {
                replace: true
            })
        } else {
            search.set('query', text);
            setSearch(search, {
                replace: true
            })
        }
    }, 350)


    return (
        <Form className="d-flex input-group w-auto search-box" >
            <Form.Control type="search"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={onSearchChange}
                defaultValue={search.get('query') ?? ''}
            />

            <span className="input-group-text border-0" id="search-addon" >
                <BiSearchAlt />
            </span>






        </Form>
    )
}

export default SearchBar