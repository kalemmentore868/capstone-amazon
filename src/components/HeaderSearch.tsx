import React, { ChangeEvent, useState } from 'react'
import { useProducts } from '../helper/hooks';
import "../assets/css/HeadingSearch.css"
import Loader from './Loader';
import { Link } from 'react-router-dom';

const HeaderSearch = () => {
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const getProducts = useProducts()
    const products = getProducts.data ?? [];

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if (event.target.value.length > 0) {
            setShowSuggestions(true)
        } else {
            setShowSuggestions(false)
        }
    };

    const onSearch = (searchTerm: string) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    const handleBlur = () => {
        setTimeout(() => setShowSuggestions(false), 300)

    }

    return (

        <div className="search-container">
            <div className="search-inner">
                <input type="text" value={value} onChange={onChange} onBlur={handleBlur} onFocus={() => setShowSuggestions(true)} />
                <button onClick={() => onSearch(value)}> Search </button>
            </div>
            <div className="dropdown-s">
                {showSuggestions && (
                    <div>
                        {getProducts.isLoading ? <Loader /> : (
                            <div>
                                {products
                                    .filter((product) => {
                                        const searchTerm = value.toLowerCase();
                                        const fullName = product.title.toLowerCase();

                                        return (
                                            searchTerm &&
                                            fullName.startsWith(searchTerm) &&
                                            fullName !== searchTerm
                                        );
                                    })
                                    .slice(0, 10)
                                    .map((product) => (
                                        <div
                                            onClick={() => onSearch(product.title)}
                                            className="dropdown-row-s"
                                            key={product.title}
                                        >
                                            <Link className='drop-link-s' to={`/products/${product.id}`}>
                                                {product.title}
                                            </Link>

                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    )
}

export default HeaderSearch